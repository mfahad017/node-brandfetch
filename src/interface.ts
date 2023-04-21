type BrandFetchLinkNames =
  | 'twitter'
  | 'facebook'
  | 'instagram'
  | 'github'
  | 'youtube'
  | 'linkedin'
  | 'crunchbase';

export interface IBrandFetch {
  name: string;

  domain: string;
  claimed: boolean;
  description: string | null;

  links: {
    name: BrandFetchLinkNames;
    url: string;
  }[];

  logos: {
    type: 'logo' | 'icon' | 'symbol' | 'other';
    theme: 'dark' | 'light' | null;
    formats: {
      src: string;
      format: 'svg' | 'png' | 'jpeg';
      background: 'transparent' | null;
      height: number;
      width: number;
      size: number;
    }[];
  }[];
  colors: {
    hex: string;
    type: 'accent' | 'dark' | 'light' | 'brand';
    brightness: number;
  }[];
  fonts: {
    name: string;
    type: 'title' | 'body';
    origin: 'google' | 'custom' | 'system' | null;
    originId: string | null;
  }[];
  images: {
    type: 'banner' | 'other';
    formats: {
      src: string;
      format: 'png' | 'svg' | 'jpeg';
      height: number;
      width: number;
      size: number;
      background: 'transparent' | null;
    }[];
  }[];
}

export interface IBrandFetchSearch {
  name: string | null;
  domain: string;
  claimed: boolean;
  icon: string;
  brandId: string;
}
