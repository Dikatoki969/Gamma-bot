const fs = require("fs")
const path = require("path")

let handler = async (m, { client, reply, command, prefix, sleep, text }) => {
  let input = text || m.quoted?.text || m.quoted?.body || '';
  
  if (!input) {
    return m.reply(`*CJS to ESM Converter*
Kirim kode CommonJS yang ingin dikonversi ke ESM
*Contoh:*
\`\`\`javascript
const React = require('react');
const { useState } = require('react');
const fs = require('fs');
module.exports = function App() {
  return React.createElement('div', null, 'Hello World');
}
\`\`\`
*Hasil akan otomatis dikonversi ke ESM format*`);
  }
  try {
    let convertedCode = await CJStoESM(input);
    await m.reply(`${convertedCode}`);
  } catch (error) {
    await m.reply(`*❌ Error saat konversi:*\n${error.message}`);
  }
};
handler.help = ['convert'];
handler.tags = ['owner'];
handler.command = ["cjstoesm", "cjs2esm"];
handler.owner = true;
module.exports = handler;

async function CJStoESM(code) {
  if (!code || typeof code !== 'string') {
    throw new Error('Input code is required and must be a string');
  }
  let result = code.trim();  
  result = result.replace(/const\s*{\s*([^}]+)\s*}\s*=\s*require\s*\(\s*['"`]([^'"`]+)['"`]\s*\)\s*;?/g, (match, imports, module) => {
    const cleanImports = imports.split(',').map(imp => {
      const trimmed = imp.trim();
      if (trimmed.includes(' as ')) {
        return trimmed;
      } else if (trimmed.includes(':')) {
        const [alias, original] = trimmed.split(':').map(s => s.trim());
        return `${original} as ${alias}`;
      }
      return trimmed;
    }).join(', ');
    return `import { ${cleanImports} } from '${module}';`;
  });
  result = result.replace(/let\s*{\s*([^}]+)\s*}\s*=\s*require\s*\(\s*['"`]([^'"`]+)['"`]\s*\)\s*;?/g, (match, imports, module) => {
    const cleanImports = imports.split(',').map(imp => {
      const trimmed = imp.trim();
      if (trimmed.includes(' as ')) {
        return trimmed;
      } else if (trimmed.includes(':')) {
        const [alias, original] = trimmed.split(':').map(s => s.trim());
        return `${original} as ${alias}`;
      }
      return trimmed;
    }).join(', ');
    return `import { ${cleanImports} } from '${module}';`;
  });
  
  result = result.replace(/var\s*{\s*([^}]+)\s*}\s*=\s*require\s*\(\s*['"`]([^'"`]+)['"`]\s*\)\s*;?/g, (match, imports, module) => {
    const cleanImports = imports.split(',').map(imp => {
      const trimmed = imp.trim();
      if (trimmed.includes(' as ')) {
        return trimmed;
      } else if (trimmed.includes(':')) {
        const [alias, original] = trimmed.split(':').map(s => s.trim());
        return `${original} as ${alias}`;
      }
      return trimmed;
    }).join(', ');
    return `import { ${cleanImports} } from '${module}';`;
  });
  result = result.replace(/const\s+(\w+)\s*=\s*require\s*\(\s*['"`]([^'"`]+)['"`]\s*\)\s*;?/g, (match, name, module) => {
    return `import ${name} from '${module}';`;
  });
  result = result.replace(/let\s+(\w+)\s*=\s*require\s*\(\s*['"`]([^'"`]+)['"`]\s*\)\s*;?/g, (match, name, module) => {
    return `import ${name} from '${module}';`;
  });
  result = result.replace(/var\s+(\w+)\s*=\s*require\s*\(\s*['"`]([^'"`]+)['"`]\s*\)\s*;?/g, (match, name, module) => {
    return `import ${name} from '${module}';`;
  });
  result = result.replace(/^\s*require\s*\(\s*['"`]([^'"`]+)['"`]\s*\)\s*;?\s*$/gm, (match, module) => {
    return `import '${module}';`;
  });
  result = result.replace(/module\.exports\s*=\s*(.+?)(?=\n|$)/gs, (match, value) => {
    return `export default ${value.trim()}`;
  });
  result = result.replace(/module\.exports\.(\w+)\s*=\s*(.+?)(?=\n|$)/g, (match, name, value) => {
    const trimmedValue = value.trim();
    if (/^\w+$/.test(trimmedValue) && trimmedValue !== name) {
      return `export { ${trimmedValue} as ${name} };`;
    }
    return `export const ${name} = ${value.trim()};`;
  });
  result = result.replace(/exports\.(\w+)\s*=\s*(.+?)(?=\n|$)/g, (match, name, value) => {
    const trimmedValue = value.trim();
    if (/^\w+$/.test(trimmedValue) && trimmedValue !== name) {
      return `export { ${trimmedValue} as ${name} };`;
    }
    return `export const ${name} = ${value.trim()};`;
  });
  result = result.replace(/__dirname/g, 'import.meta.dirname');
  result = result.replace(/__filename/g, 'import.meta.filename');
  result = result.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  return result.trim();
}