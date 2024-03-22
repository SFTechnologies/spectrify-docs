import Image from 'next/image';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: (
    <Image
      src='/images/spectrify_logo.svg'
      alt='spectrify logo'
      width={200}
      height={110}
    />
  ),
  logoLink: 'https://www.spectrify.app/',
  project: {
    link: 'https://github.com/SFTechnologies/spectrify-docs',
  },
  docsRepositoryBase:
    'https://github.com/SFTechnologies/spectrify-docs/blob/main',
  footer: {
    text: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          width: '100%',
        }}
      >
        <div>Powered by</div>
        <a href='https://sftec.es/'>
          <Image
            src='/images/SFTec_logo.png'
            alt='SFTec logo'
            width={100}
            height={110}
          />
        </a>
      </div>
    ),
  },
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1,
  },
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta property='og:title' content='Spectrify Docs' />
      <link rel='icon' type='image/x-icon' href='/images/favicon.ico' />
      <title>SPECTRIFY Docs</title>
    </>
  ),
};

export default config;
