const ENGLISH_HOSTS = new Set(["jackyw.uk", "www.jackyw.uk"]);

const UK_DESTINATIONS = new Map([
  ["/", "/index-uk"],
  ["/index.html", "/index-uk"],
  ["/robots.txt", "/robots-uk.txt"],
  ["/sitemap.xml", "/sitemap-uk.xml"],
]);

const isHtmlNavigation = (request, pathname) => {
  const accept = request.headers.get("accept") || "";
  return !pathname.includes(".") && accept.includes("text/html");
};

export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (!ENGLISH_HOSTS.has(url.hostname.toLowerCase())) return context.next();

  const destination =
    UK_DESTINATIONS.get(url.pathname) ||
    (isHtmlNavigation(context.request, url.pathname) ? "/index-uk" : null);

  if (!destination) return context.next();

  url.pathname = destination;
  return context.env.ASSETS.fetch(new Request(url, context.request));
}
