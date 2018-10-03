importScripts('latentAccountant.js');



self.addEventListener('fetch', measure(function(e) {
        const { request } = e;
        e.respondWith(
            fetch(request).then((response) => {
                return response;
            })
        );

  }));
