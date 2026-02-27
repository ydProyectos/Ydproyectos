self.addEventListener("install", event => {
    console.log("Service Worker instalado");
  
    event.waitUntil(
      caches.open("pwa-v1").then(cache => {
        return cache.addAll([
          "./",
          "./index.html"
        ]);
      })
    );
  });