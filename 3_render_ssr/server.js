
import path from 'path';
import fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFileSync } from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = fastify();

server.register(fastifyStatic, {
  root: path.join(__dirname, 'dist'),
});

server.get('/', async (_, reply) => {
    const html = renderApp()
    reply.type('text/html').send(html);
});

function renderApp() {
    const indexHTML = readFileSync('./dist/index.html', 'utf-8');
    const javascript = readFileSync('./main.js', 'utf-8');
    const css = readFileSync('./style.css', 'utf-8');

    return `

      <style>
        ${css}
      </style>
      ${indexHTML}
      <script type="module">
        ${javascript}
      </script>
    `
};

const start = async () => {
  try {
    await server.listen({
        port: 3000,
    });
    console.log('Server listening on http://localhost:3000');
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
};

start();






