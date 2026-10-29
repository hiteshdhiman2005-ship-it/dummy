export const routeLoaders = {
  home: () => import('./pages/Home'),
  about: () => import('./pages/About'),
  products: () => import('./pages/Products'),
  blog: () => import('./pages/Blog'),
  contact: () => import('./pages/Contact'),
  wishlist: () => import('./pages/WishlistRoute'),
  sitemap: () => import('./pages/Sitemap'),
};

const routePrefetchers: Record<string, () => Promise<unknown>> = {
  '/': routeLoaders.home,
  '/about': routeLoaders.about,
  '/products': routeLoaders.products,
  '/services': routeLoaders.products,
  '/blog': routeLoaders.blog,
  '/contact': routeLoaders.contact,
  '/wishlist': routeLoaders.wishlist,
  '/sitemap': routeLoaders.sitemap,
};

export function prefetchRoute(path: string) {
  const loadRoute = routePrefetchers[path];
  if (loadRoute) {
    void loadRoute().catch((error: unknown) => {
      console.error(`Failed to preload route "${path}"`, error);
    });
  }
}
