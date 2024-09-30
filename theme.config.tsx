import React from "react";
import { DocsThemeConfig, Link } from "nextra-theme-docs";
import { useRouter } from "next/router";

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

const config: DocsThemeConfig = {
  logo,
  
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (["/", "/docs"].includes(asPath)) {
      return { titleTemplate: "CondoEasy" };
    }
    return { titleTemplate: "%s | CondoEasy" };
  },
  search: {
    placeholder: "Pesquisar documentação...",
    loading: "Carregando...",
    error: "Erro ao buscar resultados.",
    // emptyResult: "Nenhum resultado encontrado.",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 2, // 1 = all collapsed, 2 = all expanded
    toggleButton: true,
  },
  project: {
    link: "https://github.com/IgorAugust0/condoeasy",
  },
  docsRepositoryBase: "https://github.com/IgorAugust0/condoeasy",
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
    text: (
      <span>
        MIT {new Date().getFullYear()} ©
        <a href="https://github.com/IgorAugust0" target="_blank">
          CondoEasy
        </a>
        .
      </span>
    ),
  },
  // i18n: [
  //   { locale: 'pt-BR', text: 'Português' },
  //   { locale: 'en-US', text: 'English' },
  //   { locale: 'es', text: 'Español' }
  // ]
};

export default config;
