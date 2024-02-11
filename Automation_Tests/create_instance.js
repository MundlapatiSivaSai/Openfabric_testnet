const puppeteer = require('puppeteer');
const dappeteer = require('dappeteer');

async function createAIInstanceOnOpenFabric() {
  const browser = await dappeteer.launch(puppeteer, { headless: false }); // Launch in non-headless mode for visual confirmation
  const metamask = await dappeteer.getMetamask(browser);

  // Import an account into MetaMask using the provided seed phrase and password
  await metamask.importAccount('couple lab stage switch pilot exile clown hospital bonus chase bridge exhibit', 'Meta@test');

  // Assuming the OpenfabricTest network is already added and selected from the previous steps
  // Navigate to the Openfabric website
  const page = await browser.newPage();
  await page.goto('https://openfabric.dev');

  // Wait for the "Connect Wallet" button and click it to initiate the MetaMask connection
  await page.waitForSelector('button[title="Connect Wallet"]', { visible: true });
  await page.click('button[title="Connect Wallet"]');
  
  // Navigate to the AI Xplorer after wallet connection
  await page.waitForNavigation(); // Ensure the navigation after wallet connection is complete
  await page.goto('https://openfabric.dev/apps/top-rated');

  // Select the desired QRfabric by finding the specific element that triggers the selection
  await page.waitForSelector('selector_for_QRfabric', { visible: true });
  await page.click('selector_for_QRfabric');

  // Click on "Create Instance" after selecting the QRfabric
  await page.waitForSelector('button[title="Create Instance"]', { visible: true });
  await page.click('button[title="Create Instance"]');

  // Select GPU1 - 
  await page.waitForSelector('selector_for_gpu1_option', { visible: true });
  await page.click('selector_for_gpu1_option');
  
  // Click on "Pay" to proceed with the instance creation
  await page.waitForSelector('button[title="Pay"]', { visible: true });
  await page.click('button[title="Pay"]');

  // Handle any post-payment confirmation or navigation as needed

  console.log('AI instance creation process initiated on OpenFabric');
}

createAIInstanceOnOpenFabric().catch(console.error);
