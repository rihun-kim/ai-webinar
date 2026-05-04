export async function onRequest(context) {
  const { topic } = context.params;
  const url = new URL(context.request.url);
  url.pathname = `/webinar/${topic}/index.html`;
  const res = await context.env.ASSETS.fetch(new Request(url, context.request));
  return new Response(res.body, {
    status: res.status,
    headers: { ...Object.fromEntries(res.headers), "content-type": "text/html; charset=utf-8" },
  });
}
