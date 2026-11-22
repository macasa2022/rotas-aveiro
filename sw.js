// Rotas Aveiro — serviço de arranque: permite instalar a aplicação e abri-la sem Internet.
// Só guarda os ficheiros da própria aplicação. Mapas, pesquisa de moradas e rotas vão sempre à rede e nunca são guardados aqui.
// Estratégia «rede primeiro»: com Internet usa sempre a versão mais recente; sem Internet usa a última guardada.
const CACHE = 'rotas-aveiro-app-v1';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './icon-180.png'];
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache => Promise.all(FILES.map(file => cache.add(file).catch(() => null)))));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('rotas-aveiro-app-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request; const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;
  if (url.pathname.includes('/road/') || url.pathname.endsWith('/geocode')) return;
  const isPage = request.mode === 'navigate';
  const name = url.pathname.split('/').pop();
  if (!isPage && !FILES.includes('./' + name)) return;
  event.respondWith(fetch(request).then(response => {
    if (response.ok) {const copy = response.clone(); caches.open(CACHE).then(cache => cache.put(isPage ? './index.html' : request, copy));}
    return response;
  }).catch(() => caches.match(isPage ? './index.html' : request).then(hit => hit || caches.match('./'))));
});
