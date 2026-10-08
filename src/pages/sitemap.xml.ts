import { locales, localePath } from '../content/locales';
import { site } from '../config/site';
export function GET() {
  const urls = locales.map(locale => `<url><loc>${site.origin}${localePath(locale.id)}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}<url><loc>${site.origin}${site.base}privacy.html</loc></url></urlset>`, { headers: { 'Content-Type': 'application/xml' } });
}
