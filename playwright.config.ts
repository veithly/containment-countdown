import { defineConfig, devices } from "@playwright/test";

const deployedURL = process.env.DEPLOYED_URL;

export default defineConfig({
  testDir: "./tests",
  timeout: 60000,
  expect: {
    timeout: 10000,
  },
  use: {
    baseURL: deployedURL || "http://localhost:4387",
    trace: "on-first-retry",
  },
  webServer: deployedURL
    ? undefined
    : {
        command: "npm run dev",
        url: "http://localhost:4387",
        reuseExistingServer: true,
        timeout: 120000,
      },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } },
    },
    {
      name: "mobile",
      use: { ...devices["Pixel 5"], viewport: { width: 390, height: 844 } },
    },
  ],
});
