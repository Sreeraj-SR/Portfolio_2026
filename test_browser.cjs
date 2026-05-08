const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.error('PAGE ERROR:', err.toString()));
  
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  
  const content = await page.evaluate(() => {
    return document.getElementById('root').innerHTML;
  });
  
  console.log('Root content length:', content.length);
  if (content.length < 100) {
    console.log('Root content:', content);
  }
  
  await browser.close();
})();
