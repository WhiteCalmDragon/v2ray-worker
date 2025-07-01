addEventListener('fetch', event => {
  event.respondWith(new Response('V2Ray Worker Ready', { status: 200 }))
})
