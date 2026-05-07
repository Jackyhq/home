import { next, rewrite } from "@vercel/functions";

const ENGLISH_HOSTS = new Set(["jackyw.uk", "www.jackyw.uk"]);

const UK_DESTINATIONS = new Map([
  ["/", "/index-uk.html"],
  ["/index.html", "/index-uk.html"],
  ["/robots.txt", "/robots-uk.txt"],
  ["/sitemap.xml", "/sitemap-uk.xml"],
]);

export const config = {
  matcher: ["/", "/index.html", "/robots.txt", "/sitemap.xml"],
};

export default function middleware(request) {
  const url = new URL(request.url);
  if (!ENGLISH_HOSTS.has(url.hostname.toLowerCase())) return next();

  const destination = UK_DESTINATIONS.get(url.pathname);
  if (!destination) return next();

  url.pathname = destination;
  return rewrite(url);
}
