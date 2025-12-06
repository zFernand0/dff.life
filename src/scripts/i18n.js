import fs from 'fs';
import * as cheerio from 'cheerio';
const givenFilePath = process.argv[2] || './src/index.html';
const html = fs.readFileSync(givenFilePath, 'utf8');
const $ = cheerio.load(html);

const i18n = {};

$('[data-i18n]').each((_, el) => {
  const key = $(el).attr('data-i18n');
  let value = $(el).text().replace(/\n\s+/g, ' ').trim();
  // For buttons/links with no text, fallback to value attribute
  if (!value) value = $(el).val() || '';
  i18n[key] = value;
});

fs.writeFileSync('./en.json', JSON.stringify(i18n, null, 2), 'utf8');
console.log('Extracted', Object.keys(i18n).length, 'strings to en.json');
