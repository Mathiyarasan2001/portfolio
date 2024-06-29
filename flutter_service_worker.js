'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "43721d4219d1d92e7c4a583c9b76e0a2",
"assets/AssetManifest.bin.json": "fca078870f7e6a613af724c4be3e55bd",
"assets/AssetManifest.json": "55bf9a77a186e13c7e8e0afabbe65545",
"assets/assets/Androidstudio.png": "f7d9ad132f19f9a8603802d055a4ae8d",
"assets/assets/Api/1.jpg": "f15d6d70beffec180a70df2c6edbc6e8",
"assets/assets/Api/2.jpg": "a041448ee7bf4eee96343d7344d977db",
"assets/assets/Api/3.jpg": "cecd6492aedc74108c41f1f1ab725987",
"assets/assets/Api/4.jpg": "adf46ccd8a4d0b916901db834790f975",
"assets/assets/Api/5.jpg": "cc44fe00f36bad7a3362e3442fe00c1f",
"assets/assets/api.jpg": "52b88da816943aabb22bac0cc829737c",
"assets/assets/bottom/facebook.png": "2dbb771b0537dbb161b91ff53957562d",
"assets/assets/bottom/gmail.png": "604131a42b64964b8482c84e8b47e908",
"assets/assets/bottom/insta.png": "69aa402b467c5ec7698ed07912a53528",
"assets/assets/bottom/limkedin.png": "d24befecc99f4ceedbfc9ea866b31db9",
"assets/assets/circleci.webp": "e52702f6876a46af7f446ca13d31a80e",
"assets/assets/Dart.webp": "60fbd31aec7b4a720354e75682f53901",
"assets/assets/db.jpg": "051cca18d5f13878e7a100575ef9513b",
"assets/assets/Desktopprojects/anime/IMG_20240627_233011.jpg": "2a638ee567e3346c76e72e5eb877cb03",
"assets/assets/Desktopprojects/anime/IMG_20240627_233022.jpg": "05237ca1f2db5a19bc35f35bcdbc6d26",
"assets/assets/Desktopprojects/anime/Screenshot_2023-12-10-19-25-05-58_168011485e822596949ff4d3c0d3385e.jpg": "221145a0f6d0bf351052e91713daf5e5",
"assets/assets/Desktopprojects/anime/Screenshot_2023-12-10-19-25-13-49_168011485e822596949ff4d3c0d3385e.jpg": "870e75c8415b1990dea1e20b9ea8cd98",
"assets/assets/Desktopprojects/anime/Screenshot_2023-12-10-19-25-16-82_168011485e822596949ff4d3c0d3385e.jpg": "20f1a8b52fd380d04a618b3bfa8fe14e",
"assets/assets/Desktopprojects/anime/Screenshot_2023-12-10-19-25-22-80_168011485e822596949ff4d3c0d3385e.jpg": "706180f24fc7d0e0eff2faf3f0e62b7d",
"assets/assets/Desktopprojects/anime/Screenshot_2023-12-10-19-25-25-71_168011485e822596949ff4d3c0d3385e.jpg": "3bda60ca020d7a7572a363653640e91d",
"assets/assets/Desktopprojects/Fashion%2520Website/1.jpeg": "a795dff8e74c0f818f13ff2fa30ce59e",
"assets/assets/Desktopprojects/Fashion%2520Website/2.jpeg": "561c688481cd80f2e28394b786f649a8",
"assets/assets/Desktopprojects/Fashion%2520Website/3.jpeg": "7fa886b43598ff485dd8d9d475f9262d",
"assets/assets/Desktopprojects/Fashion%2520Website/4.jpeg": "d926b4b168eee6e686026395065c268b",
"assets/assets/Desktopprojects/Fashion%2520Website/5.jpeg": "dac16ef85a2246c4261a7a01104ac704",
"assets/assets/Desktopprojects/Fashion%2520Website/6.jpeg": "7675a74eacbac794dab1a3774d6562da",
"assets/assets/Desktopprojects/Marvel/1.jpg": "246ed9b0961710ad907a52a934916c8b",
"assets/assets/Desktopprojects/Marvel/2.jpg": "c19667fc1f3f996fd6b4aa532d3f88c3",
"assets/assets/Desktopprojects/Marvel/3.jpg": "49366ae7a932ac575c97ba760c532800",
"assets/assets/Desktopprojects/Marvel/4.jpg": "79175b10f947fe2760cb0615be88048b",
"assets/assets/Desktopprojects/Marvel/5.jpg": "f8a61262ab2e727d1d2b6a280985c7d1",
"assets/assets/Desktopprojects/Marvel/6.jpg": "333ed558905295bbe3c1b80a9a97a961",
"assets/assets/Desktopprojects/Marvel/IMG_20240627_233645.jpg": "8da750a757822c28138f993d07f56d5b",
"assets/assets/Desktopprojects/Movie%2520Api/1.jpg": "f15d6d70beffec180a70df2c6edbc6e8",
"assets/assets/Desktopprojects/Movie%2520Api/2.jpg": "a041448ee7bf4eee96343d7344d977db",
"assets/assets/Desktopprojects/Movie%2520Api/3.jpg": "cecd6492aedc74108c41f1f1ab725987",
"assets/assets/Desktopprojects/Movie%2520Api/4.jpg": "adf46ccd8a4d0b916901db834790f975",
"assets/assets/Desktopprojects/Movie%2520Api/5.jpg": "cc44fe00f36bad7a3362e3442fe00c1f",
"assets/assets/Desktopprojects/SOCIAL%2520MEDIA/Screenshot_2023-12-01-16-52-30-97_773275f56fe0bcce2e2fc56d5a13361e.jpg": "669c426da91d965ea5e7259fbd2d7dc8",
"assets/assets/Desktopprojects/SOCIAL%2520MEDIA/Screenshot_2023-12-01-16-52-43-43_773275f56fe0bcce2e2fc56d5a13361e.jpg": "3a2039b0547a331b996779a7040afd42",
"assets/assets/Desktopprojects/SOCIAL%2520MEDIA/Screenshot_2023-12-01-16-52-51-32_773275f56fe0bcce2e2fc56d5a13361e.jpg": "d0356ab6126f0675e83b3b0f3eab196e",
"assets/assets/Desktopprojects/SOCIAL%2520MEDIA/Screenshot_2023-12-01-16-52-59-36_773275f56fe0bcce2e2fc56d5a13361e.jpg": "16eed8af8d9eff460c5ac9683fd592b8",
"assets/assets/Desktopprojects/SOCIAL%2520MEDIA/Screenshot_2023-12-01-16-53-02-68_773275f56fe0bcce2e2fc56d5a13361e.jpg": "581bed0dbe9e60fa45da0533fc24721b",
"assets/assets/Desktopprojects/SOCIAL%2520MEDIA/Screenshot_2023-12-01-16-53-06-01_773275f56fe0bcce2e2fc56d5a13361e.jpg": "0bf68bce53091983c4c219e4c6037113",
"assets/assets/Desktopprojects/SOCIAL%2520MEDIA/Screenshot_2023-12-01-16-53-12-48_773275f56fe0bcce2e2fc56d5a13361e.jpg": "f10e041916e53acbbc3e5b268db6db0a",
"assets/assets/Desktopprojects/SOCIAL%2520MEDIA/Screenshot_2023-12-01-16-53-16-93_773275f56fe0bcce2e2fc56d5a13361e.jpg": "a63a8a8e9dc7fb3d80ac73278de30f62",
"assets/assets/Desktopprojects/SOCIAL%2520MEDIA/Screenshot_2023-12-01-16-53-24-01_773275f56fe0bcce2e2fc56d5a13361e.jpg": "a4410433c06ed878119bef181432c6ae",
"assets/assets/Desktopprojects/Social%2520media_1/IMG_20240419_113903.jpg": "8a4b23aad781e47cd50e084933d4444a",
"assets/assets/Desktopprojects/Social%2520media_1/IMG_20240419_113926.jpg": "357750a1110df93768c7ca644fecd6ef",
"assets/assets/Desktopprojects/Social%2520media_1/IMG_20240419_113945.jpg": "3a41503ba781b6651a69ed821ed93e12",
"assets/assets/Desktopprojects/Social%2520media_1/IMG_20240419_113955.jpg": "dc05cd4f62a7c8b2ac12fc0449649b92",
"assets/assets/Desktopprojects/Social%2520media_1/IMG_20240419_114152.jpg": "22d5908fd88ce7797c1dce1d0e5cbedd",
"assets/assets/Desktopprojects/Social%2520media_1/IMG_20240419_114215.jpg": "f3148dd5e18f5df36039b09e23a8fe32",
"assets/assets/Desktopprojects/Social%2520media_1/IMG_20240419_114230.jpg": "5f3a6710c21167347fa597a4936b70d6",
"assets/assets/Desktopprojects/Social%2520media_1/IMG_20240419_114241.jpg": "f006f2da62301bbcd476dce06fbe0b5c",
"assets/assets/Desktopprojects/Texter/IMG_20240627_233412.jpg": "15e17ff8f403abbe3ddc3c773af20ab6",
"assets/assets/Desktopprojects/Texter/IMG_20240627_233420.jpg": "35b8c94892da7540b90cce388bd1f6ea",
"assets/assets/Desktopprojects/Texter/IMG_20240627_233428.jpg": "2a1b9fde7e8e0ceac50fae946e67bcf0",
"assets/assets/Desktopprojects/Texter/IMG_20240627_233436.jpg": "db053dd7479acba6249fec4ef143c838",
"assets/assets/Desktopprojects/Texter/IMG_20240627_233502.jpg": "8091032f1dfc7a9ec461140951d083e6",
"assets/assets/Desktopprojects/Texter/IMG_20240627_233515.jpg": "12a1b0ed494141750f4e49295ee15fcd",
"assets/assets/Desktopprojects/Texter/IMG_20240627_233523.jpg": "bb594335ac98617887bb0ee7b5109ffd",
"assets/assets/Desktopprojects/Texter/IMG_20240627_233532.jpg": "62388c1919e003ca357e9bc98cf4e8cd",
"assets/assets/Desktopprojects/Texter/IMG_20240627_233540.jpg": "426a323eda29b975503dbd4cbccd38cd",
"assets/assets/Fashion/1.jpg": "14fb769c7e28917c1689bded0e5a09aa",
"assets/assets/Fashion/2.jpg": "9c96caae4d53395defdd27280080f78f",
"assets/assets/Fashion/3.jpg": "059c9b12f0e9411e35830715a24fdfa3",
"assets/assets/Fashion/4.jpg": "ef178d6487d356a4f4c1442fe419ea36",
"assets/assets/Fashion/5.jpg": "f6784578de40b209fe43862414769759",
"assets/assets/Fashion/6.jpg": "d08bdea4ab5708da930388a06f55704d",
"assets/assets/firebase.png": "b6ae8a1c820bce4305b890f38ce77221",
"assets/assets/firebase.svg": "7f8d489c1887554fcf61932505d46393",
"assets/assets/flutter.jpg": "0bfc99f4720fe3f6313cafb7e1e91f98",
"assets/assets/getx.jpg": "86bc58241b8e79979aa404521b233c02",
"assets/assets/GifFiles/Anime%2520Paradise.gif": "eca03713d66d8bb6a42decd69768f0dc",
"assets/assets/GifFiles/Betting.gif": "9d30988cf9c3bc297028c26dcbe245ef",
"assets/assets/GifFiles/Dynamic.gif": "d000569babb19630edd272a10efe7214",
"assets/assets/GifFiles/Fashion%2520App.gif": "7b1665bf0b0d877aac1527be0d4c1f8e",
"assets/assets/GifFiles/MarvelApp.gif": "27f5424d29dd8e8f549a73432c7f73e2",
"assets/assets/GifFiles/Movie%2520Api.gif": "8e7b5990465fe22b58e7361e69290b49",
"assets/assets/GifFiles/Texter.gif": "c3e5138ea922f252e52e9cc889d7e31e",
"assets/assets/GifFiles/Toktok.gif": "ae97630c60449581bc599ba9fa349e41",
"assets/assets/Github.png": "ed78dbd4b501e57ccc7b0dbac0e7f18b",
"assets/assets/Githubskill.png": "ed78dbd4b501e57ccc7b0dbac0e7f18b",
"assets/assets/Group%25206.png": "07a6e9cef4c1203ebf51c3fe482774bc",
"assets/assets/Image/github.png": "3d4c7482f267f5accbb7461766f3f790",
"assets/assets/Image/instagram.png": "3a0c1157c3e8a9db7a3438a37bc9423c",
"assets/assets/Image/linkedin.png": "d604727cedcd27fcc981ffdb1f318a66",
"assets/assets/Image/sty1.png": "7fd524608233ec6af1ae333b58c0c67e",
"assets/assets/Image/sty2.png": "31468f30781d0f95a38fa6c384dd1143",
"assets/assets/Image/Vector.png": "d8eca5dcac894dafff756c662b944d40",
"assets/assets/linkedin.png": "5c557ec329d38a3e186dcf2f9da2aef4",
"assets/assets/logo%25201.png": "9b703f122bc192bd7de04cb0065a6cbe",
"assets/assets/lottiefile/Androidstudio.json": "b6d9782212519bc3d8e02515ac365eb2",
"assets/assets/lottiefile/Api%2520-%2520Copy.json": "0b2fc1723d780bea9499339a51611799",
"assets/assets/lottiefile/Api.json": "0b2fc1723d780bea9499339a51611799",
"assets/assets/lottiefile/Firebase.json": "cda05e7a6ec29d8b26a3ba30abbd8a34",
"assets/assets/lottiefile/Flutter.json": "0e6337e7fbc4ce8fefa9b077bd4c2fa2",
"assets/assets/lottiefile/Github.json": "122b9e4a9c57a3cef07704cf16685ea0",
"assets/assets/lottiefile/MobileApp.json": "8a6d3ac743db00f8e30f76d21883c6fd",
"assets/assets/lottiefile/wesite.json": "7d83fba56c1b46c99693646379826679",
"assets/assets/mail.png": "01ed889621491b785226adaa5f467079",
"assets/assets/Marvel/Marvel_page-0001.jpg": "aefb2e13ff8a80d5c2959555b61d0599",
"assets/assets/Marvel/Marvel_page-0002.jpg": "25c02f7fb6766de889fd75f392b43f97",
"assets/assets/Marvel/Marvel_page-0003.jpg": "d04c50c3ff61090a196903f8bcecb86a",
"assets/assets/Marvel/Marvel_page-0004.jpg": "3f87b08754a939ea657eaebc9535583e",
"assets/assets/Marvel/Marvel_page-0005.jpg": "954d9a06a1971407869b1b65b75e00d9",
"assets/assets/Marvel/Marvel_page-0006.jpg": "5535f973a07abd2df7cffa6a24b5b785",
"assets/assets/Mathiyarasan_resume_page-0001.jpg": "dc00f89e64c75ddf03ea21044859766e",
"assets/assets/my%2520photo.jpg": "29cbd076277b96daea8526ad73b4c7d5",
"assets/assets/nodejs.webp": "fdf850243da5ba91039fa1f39a1a2f4a",
"assets/assets/separatorBlack%25201.png": "22b17a4da80bb7f99a424e7b1f791788",
"assets/assets/Socialmedia/1.jpg": "8a4b23aad781e47cd50e084933d4444a",
"assets/assets/Socialmedia/2.jpg": "357750a1110df93768c7ca644fecd6ef",
"assets/assets/Socialmedia/3.jpg": "3a41503ba781b6651a69ed821ed93e12",
"assets/assets/Socialmedia/4.jpg": "dc05cd4f62a7c8b2ac12fc0449649b92",
"assets/assets/Socialmedia/5.jpg": "22d5908fd88ce7797c1dce1d0e5cbedd",
"assets/assets/Socialmedia/6.jpg": "f3148dd5e18f5df36039b09e23a8fe32",
"assets/assets/Socialmedia/7.jpg": "5f3a6710c21167347fa597a4936b70d6",
"assets/assets/Socialmedia/8.jpg": "f006f2da62301bbcd476dce06fbe0b5c",
"assets/assets/vscode.jpg": "894c538019a24d392ecf10cfcec72a80",
"assets/FontManifest.json": "866b9b20ab0e8c30ffe220d2a2d66abe",
"assets/fonts/MaterialIcons-Regular.otf": "4242e141a3c84338880c7e96fb753189",
"assets/NOTICES": "4bd48df7fd6b79fbb3dab6f311e873b5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "83a2a9561f83504537daca30bcc712c2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f75bd1046f95be1c4852b1d046df38bc",
"/": "f75bd1046f95be1c4852b1d046df38bc",
"main.dart.js": "ec7902cb37105b8d93507426728f421a",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
