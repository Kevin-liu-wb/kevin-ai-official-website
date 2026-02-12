export const i18nConfig = {
  locales: ['zh-CN', 'en'],
  defaultLocale: 'zh-CN',
};

export type Locale = (typeof i18nConfig)['locales'][number];