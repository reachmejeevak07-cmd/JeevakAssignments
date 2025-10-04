import { chromium, webkit, test} from "@playwright/test";

test("Test to launch a browser manually", async () => {
  // Edge Browser
  const edgeBrowser  = await chromium.launch({
    channel: 'msedge',
    headless: false,
  });

  const edgeContext = await edgeBrowser.newContext();
  const edgePage = await edgeContext.newPage();

  await edgePage.goto('https://www.redbus.in');
  console.log('--- Redbus (Edge) ---');
  console.log('Page Title:', await edgePage.title());
  console.log('Current URL:', edgePage.url());

  // WebKit Browser
  const webkitBrowser = await webkit.launch({ headless: false });
  const webkitContext = await webkitBrowser.newContext();
  const webkitPage  = await webkitContext.newPage();

  await webkitPage.goto('https://www.flipkart.com');
  console.log('--- Flipkart (WebKit) ---');
  console.log('Page Title:', await webkitPage.title());
  console.log('Current URL:', webkitPage.url());

  await edgeBrowser.close();
  await webkitBrowser.close();
});
