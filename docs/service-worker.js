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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "eaffe53df88aa6b07eb935b11a6d3154"
  },
  {
    "url": "assets/css/0.styles.0e9ab3b0.css",
    "revision": "945371b9804c9c3bb66528d665547abd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.788ddfb3.js",
    "revision": "d655b195e51f948f9a85740719553f74"
  },
  {
    "url": "assets/js/3.eb4feefb.js",
    "revision": "319688e38de1d70f9c795216ba46ac92"
  },
  {
    "url": "assets/js/4.1a555e10.js",
    "revision": "51fb5aa6c8eb27fd2399f414e72d5277"
  },
  {
    "url": "assets/js/5.d9e076d5.js",
    "revision": "ec7167e559708e578bba42b2bfb81e83"
  },
  {
    "url": "assets/js/6.edc11af3.js",
    "revision": "bd6b1eecbe55ac56221221a57f463dda"
  },
  {
    "url": "assets/js/7.0e51eb5c.js",
    "revision": "24f8e495c22d39b5b6b0cba8b8d9b634"
  },
  {
    "url": "assets/js/8.829bff3b.js",
    "revision": "b5e99e94c62c886d65d2b3fd9a2c3fea"
  },
  {
    "url": "assets/js/app.ca37e7e5.js",
    "revision": "8dc5db9f627b835c9d7d4f1aa3d72981"
  },
  {
    "url": "de/index.html",
    "revision": "24d66470bc84beb15a838b14db3678c6"
  },
  {
    "url": "index.html",
    "revision": "c58ee2ef8b59851fb2b20840d759fc4b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
