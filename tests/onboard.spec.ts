import { expect, test } from "@playwright/test";

test("fresh judge completes the hero containment path", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Contain risky identities in 60 seconds after evidence crosses threshold.").first()).toBeVisible();
  await page.getByRole("link", { name: /open mission/i }).click();
  await expect(page.getByTestId("countdown-ring")).toBeVisible();
  await page.getByTestId("threshold-slider").fill("70");
  await expect(page.getByText("This event changed the outcome")).toBeVisible();
  await page.getByTestId("approve-containment").click();
  await expect(page.getByTestId("containment-status").first()).toContainText("CONTAINED");
  await page.goto("/dossier/demo");
  await expect(page.getByTestId("verification-report")).toContainText("VERIFIED");
  await expect(page.getByTestId("dossier-export")).toBeVisible();
  await page.getByTestId("dossier-export").click();
  await expect(page.getByText(/Stored in D1, KV, and R2|Exported in replay mode/)).toBeVisible();
});

test("mobile dossier proves status without scrolling", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile proof check");
  await page.goto("/dossier/demo");
  await expect(page.getByTestId("containment-status")).toContainText("CONTAINED");
  await expect(page.getByTestId("verification-report")).toContainText("VERIFIED");
  await expect(page.getByRole("link", { name: "Evidence" })).toBeVisible();
});
