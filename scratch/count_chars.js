const fs = require('fs');
const content = fs.readFileSync('src/app/journal/[slug]/page.tsx', 'utf8');

const articlesMatch = content.match(/const ARTICLES: Record<string, ArticleData> = ({[\s\S]+?});/);
if (!articlesMatch) {
    console.log('ARTICLES object not found');
    process.exit(1);
}

// Simple string length estimation (not perfect due to code but gives a good idea)
const articlesData = articlesMatch[1];
const totalChars = articlesData.length;

// Count specifically the values
const stringValues = articlesData.match(/`([\s\S]+?)`|'([\s\S]+?)'|"([\s\S]+?)"/g);
let characterCount = 0;
if (stringValues) {
    stringValues.forEach(val => {
        // Remove quotes and count
        characterCount += val.length - 2;
    });
}

console.log(`Total estimated characters in ARTICLES: ${characterCount}`);
