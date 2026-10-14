// Python yoksa yedek sunucu: node sunucu.js 8642
const http = require("http"), fs = require("fs"), path = require("path");
const port = +process.argv[2] || 8642, root = __dirname;
const types = {".html":"text/html; charset=utf-8",".js":"text/javascript; charset=utf-8",".css":"text/css; charset=utf-8",".woff2":"font/woff2",".json":"application/json",".svg":"image/svg+xml"};
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]); if (p.endsWith("/")) p += "index.html";
  const f = path.join(root, path.normalize(p));
  if (!f.startsWith(root)) { res.writeHead(403); return res.end(); }
  fs.readFile(f, (e, d) => { if (e) { res.writeHead(404); return res.end("Yok"); } res.writeHead(200, {"Content-Type": types[path.extname(f)] || "application/octet-stream"}); res.end(d); });
}).listen(port, "127.0.0.1", () => console.log("http://localhost:" + port));
