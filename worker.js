addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  return new Response('V2Ray Worker Ready', { status: 200 })
}
