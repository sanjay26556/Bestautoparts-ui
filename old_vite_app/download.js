const https = require('https');
const fs = require('fs');

const files = [
  { url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzUwMTIzMWUzZDE5ZjRjOTdiZThkYjY3MTdkYzM4NjdkEgsSBxD6v_S0_wgYAZIBJAoKcHJvamVjdF9pZBIWQhQxMDg2NDIzNTI0Mjk2MDA1MzU4MA&filename=&opi=89354086', name: 'models.html' },
  { url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2ViNmM5OWEyZjJmNzQxODlhZjc5ZDkxZjYyOWVkODNlEgsSBxD6v_S0_wgYAZIBJAoKcHJvamVjdF9pZBIWQhQxMDg2NDIzNTI0Mjk2MDA1MzU4MA&filename=&opi=89354086', name: 'services.html' },
  { url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2NhYmRlYzA4MzRkNzQyMTNhN2E0NDNkYmNkNTEzYWZjEgsSBxD6v_S0_wgYAZIBJAoKcHJvamVjdF9pZBIWQhQxMDg2NDIzNTI0Mjk2MDA1MzU4MA&filename=&opi=89354086', name: 'product.html' },
  { url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzczOWU4OGZiM2M1NDQwMWY4NTZkNTM0ODkyODMwNmQzEgsSBxD6v_S0_wgYAZIBJAoKcHJvamVjdF9pZBIWQhQxMDg2NDIzNTI0Mjk2MDA1MzU4MA&filename=&opi=89354086', name: 'cart.html' },
  { url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzEyYjViNDIzMGM5ZDQ2Njk4YTAxODkwYjkwOTE5NjE1EgsSBxD6v_S0_wgYAZIBJAoKcHJvamVjdF9pZBIWQhQxMDg2NDIzNTI0Mjk2MDA1MzU4MA&filename=&opi=89354086', name: 'login.html' }
];

files.forEach(file => {
  const fileStream = fs.createWriteStream(file.name);
  https.get(file.url, response => {
    response.pipe(fileStream);
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded ${file.name}`);
    });
  }).on('error', err => {
    fs.unlink(file.name, () => {});
    console.error(`Error downloading ${file.name}: ${err.message}`);
  });
});
