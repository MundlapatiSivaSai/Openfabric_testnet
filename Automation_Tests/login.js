const puppeteer = require('puppeteer');
const dappeteer = require('dappeteer');

async function loginOpenFabric() {
  const browser = await dappeteer.launch(puppeteer, { headless: false }); // Launch in non-headless mode for visual confirmation
  const metamask = await dappeteer.getMetamask(browser);

  // Import an account into MetaMask using the provided seed phrase and password
  await metamask.importAccount('couple lab stage switch pilot exile clown hospital bonus chase bridge exhibit', 'Meta@test');

  // Adding the OpenfabricTest network to MetaMask
  await metamask.addNetwork({
    networkName: 'OpenfabricTest',
    rpc: 'https://rpc.openfabric.dev/',
    chainId: 185947263,
    symbol: 'tstOFN',
  });

  // Switching to the OpenfabricTest network
  await metamask.switchNetwork('OpenfabricTest');

  // Navigate to the Openfabric
  const page = await browser.newPage();
  await page.goto('https://openfabric.dev');

  // Wait for the "Connect Wallet" button and click it to initiate the MetaMask connection
  await page.waitForSelector('button[title="Connect Wallet"]', { visible: true });
  await page.click('button[title="Connect Wallet"]');
  
  console.log('Attempted to log in to Openfabric with MetaMask');
}

loginOpenFabric().catch(console.error);
