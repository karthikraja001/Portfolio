'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "644f2855aeac72f16c311817a33f2179",
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
".git/index": "3ce18780f059681e8eee9a4cf42a7ef1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1592f4bd056cb8275f87fcad18ddb658",
".git/logs/refs/heads/main": "d55963dc896b504785d5b07744c68868",
".git/logs/refs/remotes/origin/main": "3aafd5c696bb62e1a1eac665809f4e31",
".git/objects/00/014e358fe0ac49e8d1ae4db17b69ee536e9d07": "54e0bffb62c1e38f4310d2a5f1001285",
".git/objects/00/e259c842449df7ec6dc817d01c69ae8d4e19f7": "58f0aa814352916f576a667485a4ecd8",
".git/objects/01/e1f2ec22cbf6d91a39bfe9fb1cab8481fd03f9": "995bad957a753b1be7f8d3feb4421f32",
".git/objects/01/f70ee1d2757fd6163e3cb8303882bd706d00be": "9bcbcf9184b469a44b3bccc68747baef",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/670edff6a2ab3f4f824e1fc0becd3c714fa356": "476980355532ba14bcaa005cc74f287d",
".git/objects/0f/fdce26a73686b6e6bf625f29afe782a7b7740a": "9dbe2bfdfdedf9516b0f94c843ab74cf",
".git/objects/15/a128e5694896d4890f4a8acd8cc2e88c853062": "0a19932ac526fc985b0f7ee20440c8b7",
".git/objects/21/0317f6f945fda2be2f867bb7cf6ccf53b274ee": "a1a3a28b7256d87f9f5f60680ce81577",
".git/objects/21/d1a33aa5639c0f72ef276cd2924f02b7365b7b": "1987a5ad11c33b47342ec1ba38e7e7bb",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/af52f9dca527ca3b8b74526c162a343b83c4eb": "75385f02fccc52bd76c12db714c3e936",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/c7bc8247e7ddf28d8f6b97dfe97f5bffba02f2": "6b13e65547510082996440a1ebd0f678",
".git/objects/2a/07197089363661c3f2d6bd6e14c2a573fada38": "ae1868ba300357ac6987c052612a468e",
".git/objects/2b/a8511724b41adfc0baaaf5bb387b451648ebaf": "320ce0872b74846369664b72f5333c62",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/5ea4c6fbef398c00b4c71b5a409675e4725542": "cc8e6c50b5bb25d4aa00a0b38e193671",
".git/objects/35/59cc37b37826fb8f80f134fd962b89540e62e6": "348b62d8d562616abc3c20dd0f6a29d5",
".git/objects/37/2711f5c3a6fc81164fc0e07310b623237cc842": "8f259827d70e09b755f621d501a33b3e",
".git/objects/3d/195af78e9745162fc54d7b9f4ceb18c882b3e8": "581779118f86b52f513be74b10a60e07",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/4e/5808f39b9f5431290780357db3fa36c8f1616e": "7b1549f78041f5abf9d29f0d4382b165",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/5f/67836b605a8a6311e77ce7ad3408ace192d8a7": "eda7b311630561c16e2ae8d35594a683",
".git/objects/5f/ff3805d3e73d32268e7a2ea02eb74eb3b69a9d": "c30e29b485460ca67afbe80e325b43ea",
".git/objects/62/e92e7252a2a372aa9c165c3a8e9d2673ef9a9c": "84f25baf0b1d24538114734c4e705ec2",
".git/objects/65/734597efd133012e3d61b6b5c0976b35749ebc": "197b25a5b7df75e55080408ee40b8e04",
".git/objects/6d/837b7a01c6dbb0de11d000de0441b8e2ec04df": "173c17799f0ce94866a91e336332c299",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/4a5d6d088c74dbdd635160a94ad20f62c22130": "30f7ebdb226fec7a8286903249921f2a",
".git/objects/80/0d60b71e9fd4eac33067e8895a57ce0c126c6a": "cef414e7459088cba79e97d8d94e1306",
".git/objects/8a/89cae6c90d2acaae717ec9e27b6f004647f152": "9f367a9673de771af9b8e417eaeeb65c",
".git/objects/8a/d1a8c6284700df954ecfd8d5d7c3429a297f2b": "eed92027e46cf9d799cab5cdc4576092",
".git/objects/8d/4f888eabefe7949880e777fc7d5d5c61cf351e": "e23b9617ccb79f8d6977ddb6e278343a",
".git/objects/8f/e578a2971158d7470417ecc2a863e1e9af77e5": "1915deb7e8d01d7c7d348ccb8032d8c4",
".git/objects/90/425a6fa5c957cd83ff820eb80d6fcd89cda9da": "bc62e515d7abdb227b84ac11b025a4e7",
".git/objects/92/3d3dfeb9d58d7464ce2c97f6fb7d152a8b0d74": "767accf632c8e34c9af272e48e4a8c21",
".git/objects/9f/2fcdb33af07d48cc1f87e0f814d1775d7310f7": "533d897c659c995ac6a2ac1e9236d6db",
".git/objects/a9/57f26060fbef2a44a20ca8a8a067e0a6d4cdca": "df7ef4ae6e6a6425aac6a428370776ae",
".git/objects/aa/7ab99ecbd99fcd08f095c905a3df5d78c07803": "9219bb5d6fc61ca33c20510bfd579829",
".git/objects/ab/605f9e2e3c347708a810435ba3a7debc52e1df": "6625299185704ce425994aa2ca00c523",
".git/objects/ac/19b329149abc2af5022ff4a0d870df6deb8800": "d5d17af325de4deccb03b8d79486c6bc",
".git/objects/ae/79d0de8dfd180e04dc7c3826908dd414874633": "41add60c92774c43d42f6839a9a4582b",
".git/objects/af/4d58e20fa5259e5c22c9cb2abe3ce8b4ce3011": "8c32d6bb0ff59d5aa124756b48bc5f12",
".git/objects/af/b814217506a43c988bc97481fc74440ddf4b26": "5720d8016a599a15d018637ec12c92b4",
".git/objects/b6/b61d54402b5fbede71c02217d2af5568dea304": "4011fe180f46bf2c578a2d6305315238",
".git/objects/bd/38ba899b99e05f1b4e8aba14849c5b59b06628": "8ce981e082691a97d8a9796dbeb98160",
".git/objects/be/f84be6e6a4f91ed3a78a589ffa2f54e675a7d9": "608b103d8cf06950c47af63ae3aad4d1",
".git/objects/c4/406cacf122066bfa722de8698b6165d7dd9e53": "d575dba14efe4df987442b8df7c15a03",
".git/objects/c7/f0bc3fee9406ed0c2e39fde9790d3cc8220b62": "ffa85ab9fef779527964d9603edc0de1",
".git/objects/d0/a89ff8ba1f31798716689bcd45782f355bcf80": "2bf862c4291fb632550b5b6bb5c0af0e",
".git/objects/d4/3a17ed3fd9fb4482a2433cae6fce3da84d5202": "27b4e420acc467c230fe26d10a911970",
".git/objects/d5/52a1c0427a11cec20bef94ab89009a6a3afc06": "79ae4e9f479ee00e82ba0a794b2b624e",
".git/objects/dc/57629b6e7994561316994bc87d7548a287dbd7": "e43ae18ee3fce9fca7fa273b252e8d66",
".git/objects/e2/9e895fc1e0ac642cbcdff3e7d3bbe2b7e032ba": "7d1a36d1b1d0635bdaa1d48eee6ba265",
".git/objects/e7/daf7e391f53e0ef304062fa25b662f445bc9d7": "fcf6fe75d592b70090c205ea5b1c22d2",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/76313e82b9e5d8e81baf50e919ed867d9d3f1d": "4109840b8648777d761bc05b92ab4f2a",
".git/objects/f7/0624f64e079d52e01f596e532e5b99fd32b217": "7c50bcd1841d1ff3a263025af10f768e",
".git/objects/fb/437d6e47e340723752c4e8b8325171aaaf9ae2": "10dbe1740a242ee1b352a917edcfd144",
".git/refs/heads/main": "e4df711bba727fb2393f2ea5ae125efe",
".git/refs/remotes/origin/main": "e4df711bba727fb2393f2ea5ae125efe",
"assets/AssetManifest.json": "697c2bbef01a2bb1f8c7094551611c88",
"assets/assets/avatar.png": "df575d1f45dac1e4d6282f5ec3732077",
"assets/assets/blog.png": "1269539dc4954cd7f8a8f75b2de5ac8c",
"assets/assets/fiverr.png": "2c5d77c6dc958fd93117add95297671e",
"assets/assets/FontManifest.json": "26355205b100ef2056b082a38138e9f7",
"assets/assets/freelancer.png": "ecf24f389b46cafde959004d98dd6651",
"assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"assets/assets/sun.png": "38f4bd1ef16053620704d6141c197ef7",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/FontManifest.json": "f11a194435507f2d7c17013959521b0d",
"assets/NOTICES": "4f7c044d05a4327fe8eae3ff0b7ec8ee",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"index.html": "1b6ec6f0001243acce10087dc3dab5ce",
"/": "1b6ec6f0001243acce10087dc3dab5ce",
"main.dart.js": "99072a26027ccab6cbf28ce489b79cb5",
"version.json": "f6476601f31587b63bc88a55c5635867"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
