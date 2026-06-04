const http = require('http');
const fs   = require('fs');
const path = require('path');
const root = path.join(__dirname);

const mime = {
  html: 'text/html; charset=utf-8',
  css:  'text/css',
  js:   'application/javascript',
  png:  'image/png',
  jpg:  'image/jpeg',
  jpeg: 'image/jpeg',
  svg:  'image/svg+xml',
  ico:  'image/x-icon'
};

http.createServer((req, res) => {
  const urlPath = req.url === '/' ? '/index.html' : req.url.split('?')[0];
  const filePath = path.normalize(path.join(root, urlPath));
  
  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  try {
    const data = fs.readFileSync(filePath);
    const ext  = path.extname(filePath).slice(1);
    res.writeHead(200, {
      'Content-Type': mime[ext] || 'text/plain',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://unpkg.com https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://*.supabase.co wss://*.supabase.co https://cdn.jsdelivr.net https://api.anthropic.com; media-src 'self' blob:; frame-src 'none';",
      'Permissions-Policy': 'camera=(self)',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
    });
    res.end(data);
  } catch (e) {
    res.writeHead(404);
    res.end('Not found: ' + urlPath);
  }
}).listen(3000, () => {
  console.log('ARI Server running at http://localhost:3000');
});
