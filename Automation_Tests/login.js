const puppeteer = require('puppeteer');
const dappeteer = require('dappeteer');

async function loginOpenFabric() {
  const browser = await dappeteer.launch(puppeteer, { headless: false }); // Launch in non-headless mode for visual confirmation
  const metamask = await dappeteer.getMetamask(browser);

  // Import an account into MetaMask using the provided seed phrase and password
  await metamask.importAccount('couple lab stage switch pilot exile clown hospital bonus chase bridge exhibit', 'Meta@test');

  // Add the OpenfabricTest network to MetaMask
  await metamask.addNetwork({
    networkName: 'OpenfabricTest',
    rpc: 'https://rpc.openfabric.dev/',
    chainId: 185947263, // Make sure this is correct; MetaMask expects a decimal chain ID
    symbol: 'tstOFN',
  });

  // Switch to the OpenfabricTest network
  await metamask.switchNetwork('OpenfabricTest');

  // Navigate to the Openfabric website
  const page = await browser.newPage();
  await page.goto('https://openfabric.dev');

  // Wait for the "Connect Wallet" button and click it to initiate the MetaMask connection
  // This assumes the button is immediately available; may need to adjust for page load times
  await page.waitForSelector('button[title="Connect Wallet"]', { visible: true });
  await page.click('button[title="Connect Wallet"]');

  // The following steps would depend on how the website interacts with MetaMask for connecting the wallet
  // and might require manual interaction or specific handling based on the website's implementation

  console.log('Attempted to log in to Openfabric with MetaMask');
}

loginOpenFabric().catch(console.error);
