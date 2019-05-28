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
    "revision": "ec2c3ee02bf21353f41060c6f71f8d80"
  },
  {
    "url": "assets/css/0.styles.293e4c7b.css",
    "revision": "945371b9804c9c3bb66528d665547abd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.80e9b5e1.js",
    "revision": "d655b195e51f948f9a85740719553f74"
  },
  {
    "url": "assets/js/3.902c001d.js",
    "revision": "319688e38de1d70f9c795216ba46ac92"
  },
  {
    "url": "assets/js/4.1a52cecb.js",
    "revision": "51fb5aa6c8eb27fd2399f414e72d5277"
  },
  {
    "url": "assets/js/5.c13b874c.js",
    "revision": "831778299f9cc4a8f3d5d1fe8ee30ed8"
  },
  {
    "url": "assets/js/6.9a9b66ea.js",
    "revision": "fbd3d6efcb56d25561c1a72548221daf"
  },
  {
    "url": "assets/js/7.b3fe5548.js",
    "revision": "24f8e495c22d39b5b6b0cba8b8d9b634"
  },
  {
    "url": "assets/js/8.bda4a42c.js",
    "revision": "b5e99e94c62c886d65d2b3fd9a2c3fea"
  },
  {
    "url": "assets/js/app.0d2bd016.js",
    "revision": "c845a591ad8f8c6a9375821474bdaf26"
  },
  {
    "url": "de/index.html",
    "revision": "5521f6d7af68390bf0308ff8edcdd680"
  },
  {
    "url": "index.html",
    "revision": "d8b8c5170f5638908bd0190653c35b30"
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
