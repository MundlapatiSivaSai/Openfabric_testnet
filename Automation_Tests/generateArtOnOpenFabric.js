const puppeteer = require('puppeteer');
const dappeteer = require('dappeteer');

async function generateArtOnOpenFabric() {
  const browser = await dappeteer.launch(puppeteer, { headless: false }); // Launch in non-headless mode for visual confirmation
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
  await page.waitForNavigation(); // Ensure the navigation after wallet connection is complete
  await page.goto('https://openfabric.dev/my-executions');

  // Navigate to the ArtFabric Application
  // This assumes there's a specific selector to identify the ArtFabric Application from the list
  await page.waitForSelector('selector_for_ArtFabric_Application', { visible: true });
  await page.click('selector_for_ArtFabric_Application');

  // Wait for the navigation and page load for the ArtFabric Application
  await page.waitForNavigation({ waitUntil: 'networkidle0' });

  // Enter the text "Beautiful world" in the prompt input field
  // Again, you'll need to adjust the selector based on the actual input field for the prompt
  await page.waitForSelector('input[name="promptInputField"]', { visible: true });
  await page.type('input[name="promptInputField"]', 'Beautiful world');

  // Click the "RUN" button to start the generation process
  // The selector for the "RUN" button needs to be accurate for the script to work
  await page.waitForSelector('button[title="RUN"]', { visible: true });
  await page.click('button[title="RUN"]');

  // At this point, the script would wait for the image generation to complete
  // You might want to add logic to wait for a specific element that indicates the image has been generated
  console.log('Initiated the generation of art based on "Beautiful world" on OpenFabric');
}

generateArtOnOpenFabric().catch(console.error);
