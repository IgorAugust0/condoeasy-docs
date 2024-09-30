import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

// Links used throughout the application
const links = {
  github: {
    user: "https://github.com/IgorAugust0/",
    repo: "https://github.com/IgorAugust0/condoeasy",
  },
  site: "https://condoeasy.vercel.app",
  ogImage: {
    default: "https://condoeasy.vercel.app/og.jpeg",
    dynamic: "https://condoeasy.vercel.app/api/og?title=",
  },
};

// Logo component for the application header
const logo = (
  <>
    <svg width="24" height="24" viewBox="0 0 384 512">
      <path
        fill="currentColor"
        d="M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"
      />
    </svg>
    <span style={{ marginLeft: ".4em", fontWeight: 800 }}>CondoEasy</span>
  </>
);

// Footer text component with up-to-date year and link to the GitHub repository
const text = () => (
  <span>
    MIT {new Date().getFullYear()} ©
    <a href={links.github.user} target="_blank">
      CondoEasy
    </a>
    .
  </span>
);

// Title component for navigation items, with special handling for separators
const titleComponent = ({ title, type }) => {
  if (type === "separator") {
    return <span className="cursor-default">{title}</span>;
  }
  return <>{title}</>;
};

// Function to generate the head elements for the document
const head = () => {
  const { asPath, route } = useRouter();
  const { frontMatter, title: configTitle } = useConfig();

  // default values
  const ogConfig = {
    title: "CondoEasy",
    description: "Um app moderno para facilitar a gestão de condomínios 🏢✨",
    favicon: "/favicon.svg",
  };

  // Determine if the current route is the default route
  const isDefault = route === "/" || !configTitle;

  // values to be used
  const favicon = String(ogConfig.favicon);
  const title = configTitle + (isDefault ? "" : " – CondoEasy");
  const description = String(frontMatter.description || ogConfig.description);
  const canonical = new URL(asPath, links.site).toString();
  const ogUrl = isDefault
    ? links.ogImage.default
    : `${links.ogImage.dynamic}${configTitle}`; // to be implemented
  const domain = links.site.replace("https://", "");

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogUrl} />
      <link rel="canonical" href={canonical} />

      <meta httpEquiv="Content-Language" content="pt-BR" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site:domain" content={domain} />
      <meta name="twitter:url" content={canonical} />
      <meta name="apple-mobile-web-app-title" content={title} />

      <link rel="apple-touch-icon" href={favicon} type="image/svg+xml" />
      <link rel="icon" href={favicon} type="image/svg+xml" />
      <link rel="icon" href="/favicon.png" type="image/png" />
      <link
        rel="icon"
        href="/favicon-dark.svg"
        type="image/svg+xml"
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="icon"
        href="/favicon-dark.png"
        type="image/png"
        media="(prefers-color-scheme: dark)"
      />
    </>
  );
};

const config: DocsThemeConfig = {
  logo,
  search: {
    placeholder: "Pesquisar documentação...",
    loading: "Carregando...",
    // emptyResult: "Nenhum resultado encontrado.",
    error: "Erro ao buscar resultados.",
  },
  sidebar: {
    titleComponent,
    defaultMenuCollapseLevel: 2, // 1 = all collapsed, 2 = all expanded
    toggleButton: true,
  },
  project: {
    link: links.github.repo,
  },
  docsRepositoryBase: links.github.repo,
  editLink: {
    component: null,
  },
  feedback: {
    content: "Alguma dúvida? Deixe um feedback →",
  },
  toc: {
    backToTop: true,
    title: "Nesta página",
  },
  footer: {
    text,
  },
  head,
};

export default config;
