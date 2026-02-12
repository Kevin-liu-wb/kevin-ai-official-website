export interface Feature {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  company: string;
  companyEn: string;
  quote: string;
  quoteEn: string;
  author: string;
  role: string;
  roleEn: string;
}

export interface NewsItem {
  id: string;
  title: string;
  titleEn: string;
  date: string;
  category: string;
  categoryEn: string;
}

export interface Event {
  id: string;
  title: string;
  titleEn: string;
  date: string;
  location: string;
  locationEn: string;
  type: string;
}

export interface Stat {
  value: string;
  label: string;
  labelEn: string;
}