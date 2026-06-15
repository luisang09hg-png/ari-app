const http = require('http');
const fs   = require('fs');
const path = require('path');
const crypto = require('crypto');
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
    let data = fs.readFileSync(filePath);
    const ext  = path.extname(filePath).slice(1);
    
    let cspNonce = '';
    if (ext === 'html' || urlPath === '/index.html') {
      cspNonce = crypto.randomBytes(16).toString('base64');
      let htmlString = data.toString('utf8');
      htmlString = htmlString.replace(/<script /g, `<script nonce="${cspNonce}" `);
      htmlString = htmlString.replace(/<script>/g, `<script nonce="${cspNonce}">`);
      data = Buffer.from(htmlString, 'utf8');
    }

    const cspBase = "default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://*.supabase.co wss://*.supabase.co https://cdn.jsdelivr.net; media-src 'self' blob:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-src 'self' https://challenges.cloudflare.com;";
    const csp = cspNonce 
      ? `${cspBase} script-src 'self' 'nonce-${cspNonce}' https://cdn.jsdelivr.net https://unpkg.com https://cdnjs.cloudflare.com https://challenges.cloudflare.com;`
      : `${cspBase} script-src 'self' https://cdn.jsdelivr.net https://unpkg.com https://cdnjs.cloudflare.com https://challenges.cloudflare.com;`;

    res.writeHead(200, {
      'Content-Type': mime[ext] || 'text/plain',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Content-Security-Policy': csp,
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
