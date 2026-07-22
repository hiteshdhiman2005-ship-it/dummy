import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string | string[];
  schema?: object | object[];
  image?: string;
  indexable?: boolean;
}

function setMetaTag(attrName: 'name' | 'property', attrValue: string, content: string) {
  let tag = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    document.head.appendChild(tag);
  }
  tag.setAttribute(attrName, attrValue);
  tag.setAttribute('content', content);
}

export function useSEO({ title, description, keywords, schema, image, indexable = true }: SEOProps) {
  useEffect(() => {
    document.title = title;

    setMetaTag('name', 'description', description);
    setMetaTag(
      'name',
      'robots',
      indexable ? 'index,follow,max-image-preview:large,max-snippet:-1' : 'noindex,follow'
    );
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'PrestigeTime');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:card', 'summary_large_image');

    const singularKeywordMeta = document.querySelectorAll('meta[name="keyword"]');
    singularKeywordMeta.forEach((el) => el.remove());

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
      const existingKeywords = document.querySelector('meta[name="keywords"]');
      if (existingKeywords) {
        existingKeywords.remove();
      }
    }

    const baseUrl = window.location.origin || 'https://prestigetime.vercel.app';
    const cleanPath = window.location.pathname === '/' ? '' : window.location.pathname;
    const canonicalUrl = `${baseUrl}${cleanPath}`;

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);
    setMetaTag('property', 'og:url', canonicalUrl);

    const socialImage = image || `${baseUrl}/prestigetime-social.jpg`;
    setMetaTag('property', 'og:image', socialImage);
    setMetaTag('name', 'twitter:image', socialImage);

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
  }, [title, description, keywords, schema, image, indexable]);
}
