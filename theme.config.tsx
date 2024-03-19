import Image from 'next/image';
import { useRouter } from 'next/router';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <Image src="/images/spectrify_logo.svg" alt="spectrify logo" width={200} height={110} />,
  logoLink: "https://www.spectrify.app/",
  project: {
    link: 'https://github.com/SFTechnologies/spectrify-docs',
  },
  docsRepositoryBase: 'https://github.com/SFTechnologies/spectrify-docs/blob/main',
  footer: {
    text: (
      <div style={{ display: "flex", alignItems: "center", justifyContent:"center", gap:"6px", width:"100%"}}>
        <div>Powered by</div>
        <a href="https://sftec.es/">
          <Image src="/images/SFTec_logo.png" alt="SFTec logo" width={100} height={110} />
        </a>
      </div>
    )
  },
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1
  },
  head: () => {
    const { route } = useRouter();
    const { title } = useConfig();

    const pageTitle = route === '/' ? title : `${title} | Spectrify`;

    return <title>{pageTitle}</title>;
  }
}

export default config;




