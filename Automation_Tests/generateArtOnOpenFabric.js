const puppeteer = require('puppeteer');
const dappeteer = require('dappeteer');

async function generateArtOnOpenFabric() {
  const browser = await dappeteer.launch(puppeteer, { headless: false });
  const metamask = await dappeteer.getMetamask(browser);

  // Import an account into MetaMask using the provided seed phrase and password
  await metamask.importAccount('couple lab stage switch pilot exile clown hospital bonus chase bridge exhibit', 'Meta@test');

  // Navigate to the Openfabric website
  const page = await browser.newPage();
  await page.goto('https://openfabric.dev');

  // Wait for the "Connect Wallet" button and click it to initiate the MetaMask connection
  await page.waitForSelector('button[title="Connect Wallet"]', { visible: true });
  await page.click('button[title="Connect Wallet"]');

  // Navigate to the installed applications page
  await page.waitForNavigation(); 
  await page.goto('https://openfabric.dev/my-executions');

  // Navigate to the ArtFabric Application
  await page.waitForSelector('selector_for_ArtFabric_Application', { visible: true });
  await page.click('selector_for_ArtFabric_Application');

  // Wait for the navigation and page load for the ArtFabric Application
  await page.waitForNavigation({ waitUntil: 'networkidle0' });

  // Entering the text "Beautiful world" in the prompt input field
  await page.waitForSelector('input[name="promptInputField"]', { visible: true });
  await page.type('input[name="promptInputField"]', 'Beautiful world');

  // Click the "RUN" button to start the generation process
  await page.waitForSelector('button[title="RUN"]', { visible: true });
  await page.click('button[title="RUN"]');

  // At this point, the script would wait for the image generation to complete
  console.log('Initiated the generation of art based on "Beautiful world" on OpenFabric');
}

generateArtOnOpenFabric().catch(console.error);
