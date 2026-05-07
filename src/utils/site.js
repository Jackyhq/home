const DEFAULT_SITE_URL = "jackyw.cn";
const ENGLISH_HOSTS = new Set(["jackyw.uk", "www.jackyw.uk"]);

const getCurrentHostname = () => {
  if (typeof window === "undefined") return "";
  return window.location.hostname.toLowerCase();
};

const stripProtocol = (url) => url.replace(/^(https?:)?\/\//i, "").replace(/\/.*$/, "");

export const isEnglishSiteHost = (hostname = getCurrentHostname()) =>
  ENGLISH_HOSTS.has(hostname.toLowerCase());

export const getRuntimeSiteUrl = () => {
  const configuredUrl = import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL;

  if (!isEnglishSiteHost()) return configuredUrl;

  return configuredUrl.replace(/\.cn(?=\/|$)/i, ".uk");
};

export const getRuntimeSiteHostParts = () => stripProtocol(getRuntimeSiteUrl()).split(".");

export const getRuntimeSiteHref = () => {
  const url = getRuntimeSiteUrl();

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  return `//${url}`;
};
