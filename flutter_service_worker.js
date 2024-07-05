'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "de2d0c59eb190d3bce0ddf305a2b6e0c",
".git/config": "bdf12cf811b96d72e7a6e86f2bfef9ae",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bc790cea49ad8267263c7ebacd47ac9b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0ef23abc7c4b5c90adf7925c47958e29",
".git/logs/refs/heads/main": "151c3d505db67f434987e36329793032",
".git/logs/refs/remotes/origin/main": "30357d7f0fd10ff3b1d504a2c3643e9c",
".git/objects/01/063c9b131477fabfd2d7020b570da82ee7881f": "161a79218d55d8d8adf0ce7dfdadc25c",
".git/objects/04/600a658fb5e4b08d1c3d06c7ff1f11d280a92f": "b37279d8e134fa843fd03222656196b3",
".git/objects/05/9a8661688029fabd2175bd9d29620547365ca5": "8d3bf65a259a7f5684c3e55738d737a4",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/8276c2d6a9a7c0e7e0177c71151ca0d1d38280": "0019e09f72eefd54d52e62ea7b00cb12",
".git/objects/11/e5854591676051f5cbe199206459563267691e": "bfa351e1a98040c05491c2fa8abfb9a9",
".git/objects/13/16bf8014f0bd4adae7ae817136dc3effd72ed6": "70eb46f79872c5dc9f2f14d3e2dc8565",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/e0aa340890c29f7c69037002fba0c3b4ef0068": "11bb15650ceba5d763da0cc8b4e8403b",
".git/objects/1c/1ceb11ee3cd87a632bdf302f007eb6dce49f58": "01045686ff72c5449051a9684009ffe2",
".git/objects/1c/b19f39c146f52ce014bc9c6226bd57b0ff372b": "5dec1a2b84808053dfdfda93ede5a144",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/5a19cba99b7022c037392db65553ddb97da3e3": "316b830365c54691978b8fac56ee7012",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/3c0c397d303129de266c0d5ba3971bbfb4df45": "d21e91083659c73c382aa51d23d7b208",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/0a6b94ae4bc6252e7f1242ca857b3c71f98dd6": "9b058a723ed093d71a6b1181f18c0237",
".git/objects/25/2d3684f6ce3635eb53a52f2457c6ce41bfb773": "1f68a5b78caec1f365c004fc3e76a720",
".git/objects/25/42f29d99cab70a75904f55cf5b3d69b6143855": "b1dae6f82fd177eab3038d0a905811c9",
".git/objects/2b/11003736aaa1a61f58fc2efa9683260612028c": "e001da3f9a756cc06155fc84b601ec2d",
".git/objects/2b/b0924fce2ed40fa4fd70d438e4b830f0b89709": "fcda32380567cde3df912051917dcba4",
".git/objects/32/713767098d22e8834c2ca1c333a7acb3843c01": "c50510ef96744f9342fedba76f06d736",
".git/objects/3d/2c24e5ff55ba10a7aed3276bd044c81f0b6dea": "936b4406b2125243e2a95a4b75f605a6",
".git/objects/42/34e355a6cda72ee9f22b60db4cb454c2e58e88": "d932771d2fb0d04ab0c5868f260275db",
".git/objects/45/d0bc68e8cafa0d2acf447a7d989c386f91bcd2": "538f8ccd4d5e2021ab0db21aa06d624f",
".git/objects/49/6ddcdaf179057cedf0bb21b504895d238799e6": "7d2099d40395bc997084c104b6bbd786",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/9c7d74b20aa85c9f5dd30cb14c66f2237628f4": "2a141a377a16bea4b7e241ac19e5fcfe",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/25e1c6a11a1073437213637531e6a9d8f9b91c": "f2406379db2d97b31c1e33b50372ffeb",
".git/objects/53/16cef935f8d8167c48101d0312077b752ff98e": "746c2f80df22d5ac9ca6aed12ab4a837",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/60/341689e02430ca3dfb4cb2168608178d7f5603": "b362e66e633bcfad242612a33e84b712",
".git/objects/64/a655a63318bba5166e6494a76f6eada09b3494": "3f05ce8a3773f223923609170b8fbd6f",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/b27ea84d2669d74885c9ca390e597d6e7310c5": "27a0ad0316b9f037b49a31fb007fa2e8",
".git/objects/72/e0e3f7f23899ec7079e8bc9edc955316f22077": "161578ee914d2669287ffb567e2baf02",
".git/objects/83/894f0edba518572469d5ac8bfe07c66b54de21": "544a3c3e73fa49bafac6a2a534b6d2f0",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/233d71a8bea4bb372e7a2f0230b75dcebb9cfc": "63a431f3b5499d3d9860e11ac4c63748",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/0a93f6734e368484b3f45a320975b6579485bf": "d8555aa8b97a7bb36c9a905837f84c52",
".git/objects/90/69a26017059d69309e3509de862ae449dc1401": "7ba85171ec9f3aafa185df57db12f88c",
".git/objects/91/3c67dd0c22e78f7284889ad7344c4f29469aef": "ec0ca256caa0325f4ab5190dd71891ae",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/9c/a5ea77de25e9bb9d3321dd2128a896292779b6": "b714aca81ae2ea74e362fc12de5064e1",
".git/objects/a0/1f57f2ee0bd1b4eabccb87ddc3cdb1cabfec6c": "e553f4ad92d8cd75e7140c9bc932ac9f",
".git/objects/a1/0b511fb1f2252c0eafc60961e27de31a87ccfb": "e7769bf2143d4ac5ffc4bf5e975ce6f9",
".git/objects/a8/2b8ce3826b0e52aea218bd3bcd64cda3407e10": "36d970104823f679fde5c4db759c1560",
".git/objects/a8/88cb6a2c7855ab88e202d4692f95a039c9c8e8": "8de4f462bf3eec5c4b7c2066f122a9cb",
".git/objects/ab/9ebe7a059d2c3ff366512bbe78cf99e5c217f5": "6cee2dd31209072748fb0b0d9e835e33",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b4/c13835cea48250f66baabdf046bb02f1f90e17": "e4ebe744267857c470c05180a490669b",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c2/5b1feb1841d89031fd115e960c43204e049b04": "ddc8939cb23c167b58f611659d5bbe52",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/8a58939990348c0be3ab94078d48dd4173779c": "800950030fb31395640c2dac5bd63f0b",
".git/objects/c7/3e9a62207d824d6d1f6386d078442fee355af9": "14a640f5d957177764a418da9acccb9c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/8d69d2881da106a17e62c043aa19abec6db367": "2dd42704c061c52e572c192dd4993f75",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/507359662d002866adbe6cfa272a847f8afee6": "a485e04a2981e09a5b7bcd3b0ecd6a1e",
".git/objects/dc/acd2b0df1cf08994b647a64983bb7e44d134e3": "c3b47ddf7301567b95b71a57b22008b8",
".git/objects/de/ef90a6d138fe31be8a3188d5bfb82661059ce8": "8e99f14e1a09a6cdaf93ff2b64fd0291",
".git/objects/df/a858bcfbd136054527452af5990555554de44f": "adf55fc712ef605260f455f8fe042c33",
".git/objects/df/b2eb5eb8613659e4765ea6bf504a905dc73ef9": "e8916710ff31aa5267f3eafd9d92b557",
".git/objects/e6/a276a0db8a2c80c277a0a480f5069fb1597de7": "091ccf9a3d601a78ba8d6562c2c37bfb",
".git/objects/e6/c5930e681c6188a4c5b03d8c94ffe8a510de1a": "c78a7c08330481af3d394be3487f06f0",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/d130726dc4b9a9f1aa88108e6b7b3a5b713ee8": "a5a72054d10b54b61c9d54b19e269dd0",
".git/objects/ef/2026e8984297703b999d8332c8e428175870ea": "9f5d7d19a3883270d45b03e4bcf9ff5c",
".git/objects/f0/39c9016b0ebde46df5f20c4965a715960c39ab": "2ce81b52df4595ef6462f49505c28572",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/5e08d79776dd5434efbcc343529e474e2ac84b": "e652324976fbe046a0b09bdad4660ef0",
".git/objects/f8/5a37ca89d71e86c224585aae1dcca5f40a163a": "0518e6b3464c0adf41dea502cbe93583",
".git/objects/fa/b3f4d5b71385325c1cf23f37331e2113615bb0": "f4ced3784a9a0c5f5aabf258e56bd3f8",
".git/objects/fd/e4060f1a3bb80eecff200dff14e815dd941757": "5e3e426c12d5db3b775a044cceff9bc9",
".git/refs/heads/main": "2917b8b1937874c60c85be8cdac5e4d6",
".git/refs/remotes/origin/main": "2917b8b1937874c60c85be8cdac5e4d6",
"assets/AssetManifest.bin": "52a2730d31ac4306f2c7eeeb81273b7d",
"assets/AssetManifest.bin.json": "71507ebbbbed210f16482b87f6531cd6",
"assets/AssetManifest.json": "1a4d9f7325c1dbf6383acd65b404ac34",
"assets/assets/chair_professional_photo.jpg": "abee6c38df604bb937df514d275b3c1a",
"assets/assets/instagram_post_1.jpg": "ec60b34630c12d8d7c7f2f5b0013ba07",
"assets/assets/instagram_post_2.jpg": "084229a6c74d083fe9b95d21a83c4fa8",
"assets/assets/instagram_post_3.jpg": "8000cc582c4fdebf0f4ec26617356322",
"assets/assets/instagram_post_4.jpg": "b7abd0f8000c9edca4f4358eec32fb96",
"assets/assets/landscape_logo.svg": "758711f56abc0003ee36c868df5125a3",
"assets/assets/logo_name.png": "916ab5f63be2b070af0b09b39285b700",
"assets/assets/professional_photo.png": "6440cb422233ef42a0e8330df5906c16",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "954ff2667411153f31112fe9e5ab7053",
"assets/NOTICES": "2bb3d8f9481d65edfee19dfdf7757397",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "adac17b5b2a0c6ebbb29b9bfbb03c91e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "b70ccf6f1e4435bd08808199af3f7fa2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "901258f5a24d1378ccb61a874982f70c",
"/": "901258f5a24d1378ccb61a874982f70c",
"main.dart.js": "5e3e49c942a0415d21d54799a8c4c171",
"manifest.json": "46e4127f14b9a4d7fe2a66873c3d30e4",
"version.json": "b2475851872346176245ae1f3202a978"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
