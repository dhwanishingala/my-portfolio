import { PortfolioPage } from "@/components/PortfolioPage";
import { site } from "@/data/site";

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: site.role,
    sameAs: [site.social.github, site.social.linkedin],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <PortfolioPage />
    </>
  );
}
