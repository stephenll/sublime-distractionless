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
    "revision": "37e848654e3e6c1a7c4e7b0bedafa3b0"
  },
  {
    "url": "assets/css/0.styles.a54056d7.css",
    "revision": "28c7be50cc474833a573695926f2ba16"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.5134ce0b.js",
    "revision": "bc5dc70099d4dd1ccc0a007857856d6a"
  },
  {
    "url": "assets/js/3.bf285e7e.js",
    "revision": "52e5f55b6a7ec3c481b4004ab454043f"
  },
  {
    "url": "assets/js/4.eeb5cb3e.js",
    "revision": "4e6bde9242a4c217df6149372ee2f472"
  },
  {
    "url": "assets/js/5.ed1a52e2.js",
    "revision": "ee059516b9695a27e2a7cc8af70b6531"
  },
  {
    "url": "assets/js/6.fa78e055.js",
    "revision": "2a0342d781fcdf3636d06bf71851a639"
  },
  {
    "url": "assets/js/7.4069c293.js",
    "revision": "00db9d51297b265e00f46daf36a38111"
  },
  {
    "url": "assets/js/8.77d40084.js",
    "revision": "36b1dad1a727bcfaaabff4f45cd50fee"
  },
  {
    "url": "assets/js/app.0ce03a46.js",
    "revision": "2886dc1cc3fa2fc50c17146e6c64ab6d"
  },
  {
    "url": "de/index.html",
    "revision": "179cfd95f0c3a4e7d086a43926c803f4"
  },
  {
    "url": "index.html",
    "revision": "91380238f5e9ab5a989049954a7386eb"
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
