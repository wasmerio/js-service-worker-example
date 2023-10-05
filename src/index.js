async function handler(request) {
  const out = JSON.stringify({
    success: true,
    package: "wasmer/js-service-worker",
  });
  return new Response(out, {
    headers: { "content-type": "application/json" },
  });
}

addEventListener("fetch", handler);
