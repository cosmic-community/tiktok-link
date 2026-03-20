export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface SiteSettings extends CosmicObject {
  type: 'site-settings';
  metadata: {
    site_name?: string;
    tagline?: string;
    hero_description?: string;
    logo?: {
      url: string;
      imgix_url: string;
    };
    seo_description?: string;
    footer_text?: string;
  };
}

export interface Faq extends CosmicObject {
  type: 'faqs';
  metadata: {
    question?: string;
    answer?: string;
    order?: number;
  };
}

export interface DownloadResponse {
  success: boolean;
  downloadUrl?: string;
  title?: string;
  thumbnail?: string;
  error?: string;
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}