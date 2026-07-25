import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://cloud-security-codex.example/", {
      headers: {
        accept: "text/html",
        host: "cloud-security-codex.example",
        "x-forwarded-host": "cloud-security-codex.example",
        "x-forwarded-proto": "https",
      },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the public Cloud Security Codex experience", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Cloud Security Codex<\/title>/i);
  assert.match(html, /Field-tested cloud security knowledge/);
  assert.match(html, /Semantic search/);
  assert.match(html, /https:\/\/cloud-security-codex\.example\/og\.png/);
  assert.doesNotMatch(html.toLowerCase(), new RegExp(["chat", "gpt"].join("")));
  assert.doesNotMatch(html, /C:\\Users\\|\/Users\/|\/home\//i);
});

test("returns the public security header baseline", async () => {
  const response = await render();

  assert.match(response.headers.get("content-security-policy") ?? "", /default-src 'self'/);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("x-frame-options"), "DENY");
  assert.equal(response.headers.get("referrer-policy"), "strict-origin-when-cross-origin");
  assert.match(response.headers.get("permissions-policy") ?? "", /camera=\(\)/);
  assert.equal(response.headers.get("cross-origin-opener-policy"), "same-origin");
  assert.match(response.headers.get("strict-transport-security") ?? "", /max-age=63072000/);
});
