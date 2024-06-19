import FooterLinksContainer from '../FooterLinksContainer';
import ImageLink, { ImageLinkProps } from '../ImageLink';

const footerLinksList: Pick<ImageLinkProps, 'actionText'>[] = [
  { actionText: 'import spectra' },
  { actionText: 'export spectra' },
  { actionText: 'delete spectra' },
  { actionText: 'import metadata' },
];

const SpectraTableFooterLinks = () => {
  return (
    <FooterLinksContainer>
      {footerLinksList.map(({ actionText }) => (
        <ImageLink
          actionText={actionText}
          key={actionText}
          baseHref="/file-management/"
        />
      ))}
    </FooterLinksContainer>
  );
};
export default SpectraTableFooterLinks;

