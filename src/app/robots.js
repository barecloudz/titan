export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://titanprojectsolutions.com/sitemap.xml",
    host: "https://titanprojectsolutions.com",
  };
}
