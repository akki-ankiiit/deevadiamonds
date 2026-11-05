/**
 * Visual QA helper: captures pages at the target breakpoints.
 * Usage: node scripts/screenshot.mjs [baseUrl] [outDir] [path ...]
 */
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const [base = "http://127.0.0.1:4178", out = "screenshots", ...paths] =
  process.argv.slice(2);
const routes = paths.length ? paths : ["/"];
const viewports = (process.env.VIEWPORTS || "1440x900,390x844")
  .split(",")
  .map((v) => v.split("x").map(Number));
const full = process.env.FULL !== "0";

mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
const errors = [];
for (const [width, height] of viewports) {
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: 1,
  });
  page.on("pageerror", (e) => errors.push(`${width} ${e.message}`));
  page.on(
    "console",
    (m) => m.type() === "error" && errors.push(`${width} console: ${m.text()}`),
  );
  for (const route of routes) {
    await page.goto(base + route, { waitUntil: "networkidle" });
    if (full) {
      // Scroll through the page so lazy images load and reveals trigger.
      const h = await page.evaluate(() => document.body.scrollHeight);
      for (let y = 0; y < h; y += height * 0.7) {
        await page.evaluate((top) => window.scrollTo(0, top), y);
        await page.waitForTimeout(140);
      }
      await page.evaluate(() =>
        document
          .querySelectorAll("[data-reveal]")
          .forEach((el) => el.classList.add("is-revealed")),
      );
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(900);
    } else await page.waitForTimeout(2600);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth,
    );
    if (overflow > 1)
      errors.push(`${width} ${route}: horizontal overflow ${overflow}px`);
    const name = `${out}/${route.replace(/[/?=&]+/g, "_") || "_"}-${width}.png`;
    await page.screenshot({ path: name, fullPage: full });
    console.log("saved", name);
  }
  await page.close();
}
await browser.close();
console.log(errors.length ? errors.join("\n") : "no errors");
