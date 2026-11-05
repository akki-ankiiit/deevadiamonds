import { test, expect } from "@playwright/test";

const routes = [
  "/",
  "/collections",
  "/collections/rings",
  "/collections/earrings/halo-studs",
  "/about",
  "/lab-grown-diamonds",
  "/contact",
  "/privacy",
  "/terms",
  "/exchange-and-buyback",
];

function trackErrors(page) {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  return errors;
}

for (const route of routes) {
  test(`${route} renders without errors or overflow`, async ({ page }) => {
    const errors = trackErrors(page);
    await page.goto(route);
    await expect(page.locator("main h1").first()).toBeVisible();
    await expect(page).toHaveTitle(/DEEVA/);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);
    const broken = await page.evaluate(async () => {
      const imgs = [...document.querySelectorAll("img")];
      await Promise.all(
        imgs.map(
          (img) => (img.loading = "eager") && img.decode().catch(() => {}),
        ),
      );
      return imgs
        .filter((img) => !img.naturalWidth)
        .map((img) => img.currentSrc || img.src);
    });
    expect(broken).toEqual([]);
    expect(errors).toEqual([]);
  });
}

test("no legacy branding remains", async ({ page }) => {
  for (const route of ["/", "/about", "/contact"]) {
    await page.goto(route);
    const text = await page.locator("body").innerText();
    expect(text).not.toMatch(/azure|interior|era residence/i);
  }
});

test("homepage shows the campaign hero and verified store details", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator(".hero h1")).toContainText("A brilliance");
  await expect(page.locator(".hero h1")).toContainText("your own.");
  const footer = page.locator("footer");
  await expect(footer).toContainText("Currency Tower");
  await expect(footer).toContainText("+91 92016 61918");
  await expect(
    footer.locator(`a[href="https://www.instagram.com/deeva.diamonds/"]`),
  ).toHaveCount(1);
});

test("collection filter narrows the styles and syncs to the URL", async ({
  page,
}) => {
  await page.goto("/collections");
  const cards = page.locator(".pgrid .piece");
  await expect(cards.first()).toBeVisible();
  const total = await cards.count();
  await page.getByRole("button", { name: /^Earrings/ }).click();
  await expect(page).toHaveURL(/category=earrings/);
  await expect(cards).toHaveCount(3);
  expect(total).toBeGreaterThan(3);
  await page.getByRole("button", { name: /^All/ }).click();
  await expect(cards).toHaveCount(total);
});

test("piece page links back to its collection and offers WhatsApp enquiry", async ({
  page,
}) => {
  await page.goto("/collections/rings/pear-halo-ring");
  await expect(page.locator("h1")).toHaveText("Pear Halo Ring");
  const wa = page.getByRole("link", { name: /Enquire on WhatsApp/ });
  await expect(wa).toHaveAttribute("href", /wa\.me\/919201661918/);
  await page.locator(".crumbs").getByRole("link", { name: "Rings" }).click();
  await expect(page).toHaveURL(/\/collections\/rings$/);
});

test("enquiry form validates before handing off", async ({ page }) => {
  await page.goto("/contact?topic=custom");
  await expect(page.locator("select")).toHaveValue("custom");
  await page.getByRole("button", { name: /Send/ }).click();
  await expect(page.getByText("Please enter your name.")).toBeVisible();
  await expect(page.locator('input[name="name"]')).toHaveAttribute(
    "aria-invalid",
    "true",
  );
  await page.fill('input[name="name"]', "Asha");
  await page.fill('input[name="phone"]', "98765 43210");
  await page.fill(
    'textarea[name="message"]',
    "I would like a custom solitaire ring.",
  );
  const popup = page.waitForEvent("popup");
  await page.getByRole("button", { name: /Send/ }).click();
  expect((await popup).url()).toMatch(
    /phone=919201661918|wa\.me\/919201661918/,
  );
  await expect(page.locator(".enquiry__status")).toContainText("WhatsApp");
});

test("search finds styles and navigates", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Search the site" }).click();
  await page.fill("#site-search", "pendant");
  const result = page
    .locator(".search__results a")
    .filter({ hasText: "Solitaire Pendant" });
  await expect(result).toBeVisible();
  await result.click();
  await expect(page).toHaveURL(/solitaire-pendant/);
});

test("desktop mega menu opens from Collections", async ({ page, isMobile }) => {
  test.skip(isMobile, "Desktop navigation only");
  await page.goto("/");
  await page.hover(".header__nav a[aria-controls]");
  await expect(page.locator("#mega-menu")).toHaveClass(/is-open/);
  await page
    .locator("#mega-menu")
    .getByRole("link", { name: /Bracelets/ })
    .click();
  await expect(page).toHaveURL(/\/collections\/bracelets$/);
});

test("mobile menu navigates", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Mobile navigation only");
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page.locator("#mobile-menu")).toHaveClass(/is-open/);
  await page
    .locator("#mobile-menu")
    .getByRole("link", { name: "About DEEVA" })
    .click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.locator("#mobile-menu")).not.toHaveClass(/is-open/);
});

test("unknown routes show the branded 404", async ({ page }) => {
  await page.goto("/does-not-exist");
  await expect(page.locator("h1")).toContainText("not here");
});

test("content stays visible with reduced motion", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto("/");
  await page.locator("#collections-title").scrollIntoViewIfNeeded();
  await expect(page.locator("#collections-title")).toHaveCSS("opacity", "1");
  await context.close();
});
