const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'site', 'index.html');

console.log('Iniciando testes...');

// 1. Verificar se o arquivo existe
if (!fs.existsSync(filePath)) {
  console.error('ERRO: Arquivo site/index.html não encontrado!');
  process.exit(1);
}
console.log('✅ Arquivo site/index.html encontrado.');

// 1.1 Verificar se o CSS existe
const cssPath = path.join(__dirname, 'site', 'style.css');
if (!fs.existsSync(cssPath)) {
  console.error('ERRO: Arquivo site/style.css não encontrado!');
  process.exit(1);
}
console.log('✅ Arquivo site/style.css encontrado.');

// 2. Verificar conteúdo do arquivo
const content = fs.readFileSync(filePath, 'utf8');

const expectedTexts = [
  'Pipeline CI/CD',
  'Thomas Raphael',
  'GitHub Actions',
  'Mackenzie'
];

let allPassed = true;

expectedTexts.forEach(text => {
  if (content.includes(text)) {
    console.log(`✅ Conteúdo encontrado: "${text}"`);
  } else {
    console.error(`❌ ERRO: Conteúdo não encontrado: "${text}"`);
    allPassed = false;
  }
});

if (!allPassed) {
  process.exit(1);
}

console.log('Todos os testes passaram com sucesso!');
process.exit(0);
