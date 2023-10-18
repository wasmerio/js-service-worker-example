const fibonacci = (num) => {
  if (num <= 1) {
    return num;
  }
  let prevNum = 0;
  let currNum = 1;
  let result = 0;
  for (let i = 2; i <= num; i++) {
    result = prevNum + currNum;
    prevNum = currNum;
    currNum = result;
  }
  return result;
};

async function handler({ request }) {
  const { url } = request;
  // get the search params
  const params = url.searchParams;
  const fibNum = params.get("n");
  if (!fibNum) {
    return new Response(
      "Please provide a number as a query param like <domain>/?n=10",
      {
        headers: { "content-type": "text/plain" },
      }
    );
  }
  const result = fibonacci(fibNum);

  const out = JSON.stringify({
    success: true,
    fibResult: result,
  });
  return new Response(out, {
    headers: { "content-type": "application/json" },
  });
}

addEventListener("fetch", handler);
