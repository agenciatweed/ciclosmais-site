import type { APIRoute } from 'astro';
import { disciplinas } from '../data/disciplinas';
import { unidades } from '../data/unidades';

export const GET: APIRoute = ({ site }) => {
  const caminhos = [
    '/',
    '/disciplinas',
    ...disciplinas.map((d) => `/disciplinas/${d.slug}`),
    '/cursos-livres',
    '/viagens-culturais',
    '/confraternizacoes',
    '/unidades',
    ...unidades.map((u) => `/unidades/${u.slug}`),
  ];
  const urls = caminhos.map((c) => `  <url><loc>${new URL(c, site).href}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
