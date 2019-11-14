/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "87dd47410afc2ece6ffaf61322c44f15"
  },
  {
    "url": "assets/css/0.styles.75b7cc77.css",
    "revision": "d2b988338b04e1eb6a574f3cd6d9622a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.c8dfb3e6.js",
    "revision": "bb09f2271c08451ff10a176821b08e39"
  },
  {
    "url": "assets/js/3.e43a6e3d.js",
    "revision": "11e6cc8578be989f8f4c49e6726a1622"
  },
  {
    "url": "assets/js/4.7ce3458c.js",
    "revision": "3af12bed93de16e40a289ca16e0ddad3"
  },
  {
    "url": "assets/js/5.13711e2a.js",
    "revision": "fc0196b7ba4371d42e05cb2e87991289"
  },
  {
    "url": "assets/js/6.d01740d8.js",
    "revision": "b8c4f6b25ab23ef9072ecbd0f7ad7a7a"
  },
  {
    "url": "assets/js/7.c0bbbf59.js",
    "revision": "376fb19aa52b1b9372a9f0531808bdd1"
  },
  {
    "url": "assets/js/8.f151c506.js",
    "revision": "14f23a9463bff91886bdab4d32c4ca14"
  },
  {
    "url": "assets/js/app.9d673859.js",
    "revision": "0ae76d35342e935fab05c7ee2bfc03e2"
  },
  {
    "url": "de/index.html",
    "revision": "1f388399fc1972eb1dc7ffc3e398ac83"
  },
  {
    "url": "index.html",
    "revision": "f4ffd3d36fecf6ca5970b09ea34373a7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
