import { locations } from "@/data/locations";
import { services } from "@/data/services";

const baseUrl = "https://titanprojectsolutions.com";
const lastBuild = "2026-04-18";

export default function sitemap() {
  const staticPages = [
    { url: baseUrl, lastModified: lastBuild, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/services`, lastModified: lastBuild, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: lastBuild, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/financing`, lastModified: lastBuild, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: lastBuild, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/faq`, lastModified: lastBuild, changeFrequency: "monthly", priority: 0.8 },
  ];

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: lastBuild,
    changeFrequency: "monthly",
    priority: service.featured ? 0.95 : 0.8,
  }));

  const locationPages = locations.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: lastBuild,
    changeFrequency: "monthly",
    priority: location.slug === "massapequa" ? 0.85 : 0.7,
  }));

  return [...staticPages, ...servicePages, ...locationPages];
}
