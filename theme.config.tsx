import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>SPECTRIFY</span>,
  project: {
    link: 'https://github.com/SFTechnologies/spectrify-docs',
  },
  docsRepositoryBase: 'https://github.com/SFTechnologies/spectrify-docs/blob/main',
  footer: {
    text: 'Nextra Docs Template',
  },
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1
  }
}

export default config
