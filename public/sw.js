/* ShivAnvaya service worker — minimal shell caching (PRD §10).
 * Rules:
 * - Never cache /admin, /api or any non-GET request.
 * - Never cache search result pages (query strings may contain private text).
 * - Immutable hashed build assets: cache-first.
 * - Public navigations: network-first, falling back to the cached copy, then /offline.
 * Bump CACHE_VERSION when the rules or shell list change.
 */
const CACHE_VERSION = "shivanvaya-shell-v1";
const SHELL_URLS = ["/offline", "/hi", "/hi/mantras", "/hi/shiva-names", "/hi/jyotirlinga", "/hi/panch-kedar", "/icon.svg"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then((cache) => cache.addAll(SHELL_URLS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

function isPrivatePath(pathname) {
  return pathname.startsWith("/admin") || pathname.startsWith("/api");
}

function isSearchPath(pathname) {
  return /\/search\/?$/.test(pathname);
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (isPrivatePath(url.pathname)) return; // network only, no cache writes

  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((response) => {
            if (response.ok) {
              const copy = response.clone();
              caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
            }
            return response;
          }),
      ),
    );
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok && !isSearchPath(url.pathname)) {
            const copy = response.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() =>
          caches
            .match(request)
            .then((cached) => cached || caches.match("/offline")),
        ),
    );
  }
});
