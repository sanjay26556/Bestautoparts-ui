const fs = require('fs');
const path = require('path');
const https = require('https');

const pages = [
  { name: 'BMWModels', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2ZjMmZkYWZlNGYyODRmOWI5NGVjMmQwZjI2YzI3YzBmEgsSBxD6v_S0_wgYAZIBJAoKcHJvamVjdF9pZBIWQhQxMDg2NDIzNTI0Mjk2MDA1MzU4MA&filename=&opi=89354086' },
  { name: 'MahindraXUV700', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzNiMTVmZTA3ZDlkMzRmN2JhMzY2MDM3ZGQ2NmIxYmU5EgsSBxD6v_S0_wgYAZIBJAoKcHJvamVjdF9pZBIWQhQxMDg2NDIzNTI0Mjk2MDA1MzU4MA&filename=&opi=89354086' },
  { name: 'HyundaiModels', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzkwYTZhN2QxNzJlNjRiNTZiZWE5YWZhYjBlNGQ2NTA2EgsSBxD6v_S0_wgYAZIBJAoKcHJvamVjdF9pZBIWQhQxMDg2NDIzNTI0Mjk2MDA1MzU4MA&filename=&opi=89354086' },
  { name: 'TataModels', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2RiNTk5YWI5ZGMzMTRhZmFhOTljYzI0NmE0NWRiN2E0EgsSBxD6v_S0_wgYAZIBJAoKcHJvamVjdF9pZBIWQhQxMDg2NDIzNTI0Mjk2MDA1MzU4MA&filename=&opi=89354086' },
  { name: 'MarutiSwift', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2NlZjg2MjA3ZDMzNzRmN2NhNTVmMmJkMTBiZTVkMTFkEgsSBxD6v_S0_wgYAZIBJAoKcHJvamVjdF9pZBIWQhQxMDg2NDIzNTI0Mjk2MDA1MzU4MA&filename=&opi=89354086' },
  { name: 'TataNexon', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAxNGUzYjkyYmQ3YTQzNjBhY2JiOGVjNTU3YmRiMjQ2EgsSBxD6v_S0_wgYAZIBJAoKcHJvamVjdF9pZBIWQhQxMDg2NDIzNTI0Mjk2MDA1MzU4MA&filename=&opi=89354086' },
  { name: 'MahindraModels', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2MxYjgyZTI2MGZhYzQzNWM5MDliZGJlNWNmYjY1MDU5EgsSBxD6v_S0_wgYAZIBJAoKcHJvamVjdF9pZBIWQhQxMDg2NDIzNTI0Mjk2MDA1MzU4MA&filename=&opi=89354086' },
  { name: 'MarutiSuzukiModels', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzUwMTIzMWUzZDE5ZjRjOTdiZThkYjY3MTdkYzM4NjdkEgsSBxD6v_S0_wgYAZIBJAoKcHJvamVjdF9pZBIWQhQxMDg2NDIzNTI0Mjk2MDA1MzU4MA&filename=&opi=89354086' }
];

const downloadPage = (page) => {
  return new Promise((resolve, reject) => {
    https.get(page.url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        let bodyMatch = data.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
        if (bodyMatch) {
          let body = bodyMatch[1];
          // Remove repetitive layout components
          body = body.replace(/<nav[^>]*>[\s\S]*?<\/nav>/i, '');
          body = body.replace(/<footer[^>]*>[\s\S]*?<\/footer>/i, '');
          body = body.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
          
          // Convert to JSX
          body = body.replace(/class=/g, 'className=');
          body = body.replace(/for=/g, 'htmlFor=');
          body = body.replace(/<!--/g, '{/*').replace(/-->/g, '*/}');
          body = body.replace(/<(img|input|hr|br|source|area|base|col|embed|link|meta|param)([^>]*?)(?<!\/)>/gi, '<$1$2 />');
          
          // Wrap with main layout class if needed
          let mainMatch = body.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
          if (mainMatch) {
             body = `<main className="min-h-screen pt-20">${mainMatch[1]}</main>`;
          }

          const jsxContent = `import { Link } from 'react-router-dom';\n\nexport default function ${page.name}() {\n  return (\n    <>\n      ${body}\n    </>\n  );\n}\n`;
          
          fs.writeFileSync(path.join('./src/pages', page.name + '.jsx'), jsxContent);
          resolve();
        } else {
          resolve();
        }
      });
    }).on('error', reject);
  });
};

Promise.all(pages.map(downloadPage)).then(() => console.log('Downloaded all screens.'));
