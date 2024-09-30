import path from "node:path";
import nextra from "nextra";

// to deploy with nginx, github pages, etc, read: https://nextra.site/docs/guide/static-exports
const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const sep = path.sep === "/" ? "/" : "\\\\";
const ALLOWED_SVG_REGEX = new RegExp(`components${sep}icons${sep}.+\\.svg$`);

export default withNextra({
  // internationalization support (to be implemented)
  //   i18n: {
  //     locales: ['pt_BR', 'en-US', 'es'],
  //     defaultLocale: 'pt_BR'
  //   }

  // allow svgs files to be imported as React components
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );
    fileLoaderRule.exclude = ALLOWED_SVG_REGEX;

    config.module.rules.push({
      test: ALLOWED_SVG_REGEX,
      use: ["@svgr/webpack"],
    });
    return config;
  },
});
