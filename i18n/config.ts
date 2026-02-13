export const i18nConfig = {
  locales: ['zh-CN', 'en'],
  defaultLocale: 'en',
};

export type Locale = (typeof i18nConfig)['locales'][number];