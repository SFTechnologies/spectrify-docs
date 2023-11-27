import Image from 'next/image';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span><Image src="/images/spectrify_logo.svg" alt="spectrify logo" width={200} height={110} /></span>,
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




