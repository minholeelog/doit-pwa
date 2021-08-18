const cacheName = 'hello-pwa-v1'
const files = [
  './',
  './index.html',
  './manifast.json',
  './images/hello-pwa.png',
  './images/icons/favicon.ico',
  './images/icons/android-chrome-192x192.png',
]

self.addEventListener('install', (e) => {
  console.log('서비스 워커 설치함!')
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('파일을 캐시에 저장함!')
      return cache.addAll(files)
    })
  )
})

self.addEventListener('activate', (e) => {
  console.log('서비스 워커 동작 시작됨!')
})

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches
      .match(e.request)
      .then((res) => {
        if (!res) {
          console.log('네트워크에서 데이터 요청!', e.request)
          return fetch(e.request)
        }
        console.log('캐시에서 데이터 요청!', e.request)
        return res
      })
      .catch((err) => console.log(err))
  )
})
