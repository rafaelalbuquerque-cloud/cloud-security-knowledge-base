import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { extname } from "node:path";
import test from "node:test";

const forbiddenProductReference = ["chat", "gpt"].join("");
const binaryExtensions = new Set([".ico", ".jpg", ".jpeg", ".png", ".webp"]);

function trackedTextFiles() {
  return execFileSync("git", ["ls-files", "-z"], { encoding: "utf8" })
    .split("\0")
    .filter(Boolean)
    .filter((path) => existsSync(path))
    .filter((path) => !binaryExtensions.has(extname(path).toLowerCase()));
}

test("tracked files contain no prohibited product reference", () => {
  const findings = [];

  for (const path of trackedTextFiles()) {
    const content = readFileSync(path, "utf8");
    if (content.toLowerCase().includes(forbiddenProductReference)) {
      findings.push(path);
    }
  }

  assert.deepEqual(findings, []);
});

test("tracked files contain no common credential signatures", () => {
  const accessKeyPrefix = ["A", "K", "I", "A"].join("");
  const temporaryKeyPrefix = ["A", "S", "I", "A"].join("");
  const privateKeyMarker = `${"-".repeat(5)}BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY${"-".repeat(5)}`;
  const tokenPrefixes = [
    ["g", "h", "p"].join(""),
    ["github", "_pat"].join(""),
    ["s", "k", "-"].join(""),
    ["x", "o", "x"].join(""),
  ].join("|");
  const signatures = [
    new RegExp(`${accessKeyPrefix}[0-9A-Z]{16}`),
    new RegExp(`${temporaryKeyPrefix}[0-9A-Z]{16}`),
    new RegExp(privateKeyMarker),
    new RegExp(`(?:${tokenPrefixes})[A-Za-z0-9_-]{10,}`),
  ];
  const findings = [];

  for (const path of trackedTextFiles()) {
    const content = readFileSync(path, "utf8");
    if (signatures.some((signature) => signature.test(content))) {
      findings.push(path);
    }
  }

  assert.deepEqual(findings, []);
});

test("public responses apply the security header baseline", () => {
  const worker = readFileSync("worker/index.ts", "utf8");

  for (const header of [
    "Content-Security-Policy",
    "Strict-Transport-Security",
    "X-Content-Type-Options",
    "X-Frame-Options",
    "Referrer-Policy",
    "Permissions-Policy",
    "Cross-Origin-Opener-Policy",
  ]) {
    assert.match(worker, new RegExp(header));
  }
});
