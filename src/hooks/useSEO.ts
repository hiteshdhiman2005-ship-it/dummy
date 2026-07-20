import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string | string[];
  schema?: object | object[];
}

export function useSEO({ title, description, keywords, schema }: SEOProps) {
  useEffect(() => {
    // Dynamically update page title
    document.title = title;

    // Dynamically update or create meta description tag
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Dynamically update or create meta keywords tag
    // Ensure no collision by searching for both singular "keyword" and plural "keywords"
    const singularKeywordMeta = document.querySelectorAll('meta[name="keyword"]');
    singularKeywordMeta.forEach((el) => el.remove()); // Remove all singular "keyword" elements to prevent conflicts

    if (keywords) {
      const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords;
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywordsString);
    } else {
      // Clean up plural keywords tag if none specified for this view
      const existingKeywords = document.querySelector('meta[name="keywords"]');
      if (existingKeywords) {
        existingKeywords.remove();
      }
    }

    // Dynamically update or create canonical link tag
    const baseUrl = 'https://project-time24.netlify.app';
    const cleanPath = window.location.pathname === '/' ? '' : window.location.pathname;
    const canonicalUrl = `${baseUrl}${cleanPath}`;

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // Dynamically create or update schema script tag
    if (schema) {
      let schemaScript = document.querySelector('script[id="seo-schema"]') as HTMLScriptElement;
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        schemaScript.setAttribute('id', 'seo-schema');
        document.head.appendChild(schemaScript);
      }
      schemaScript.innerHTML = JSON.stringify(schema, null, 2);
    } else {
      const existingScript = document.querySelector('script[id="seo-schema"]');
      if (existingScript) {
        existingScript.remove();
      }
    }

    return () => {
      const existingScript = document.querySelector('script[id="seo-schema"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [title, description, keywords, schema]);
}
