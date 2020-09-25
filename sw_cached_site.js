const cacheName = "v1.1";

// Call Install Event

self.addEventListener("install", (e) => {
  console.log("Service Worker: Installed");
});

// Call Activate Event

self.addEventListener("activate", (e) => {
  console.log("Service Worker: Activated");
  // Remove Unwanted Caches
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log("Service Worker: Clearing Old Cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call Fetch Event

self.addEventListener("fetch", (e) => {
  console.log("Service Worker: Fetching");
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        // Make Copy of response
        const resCopy = res.clone();
        // Open Cache
        caches.open(cacheName).then((cache) => {
          // Addd Response to cache
          cache.put(e.request, resCopy);
        });
        return res;
      })
      .catch((err) => caches.match(e.request).then((res) => res))
  );
});
