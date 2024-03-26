import image from 'next/image';
import FooterLinksContainer from '../FooterLinksContainer';
import ImageLink from '../ImageLink';

interface SpectraTableFooterLinksProps {
  imagePath: string;
}

const footerLinksList = [
  { actionText: 'import spectra' },
  { actionText: 'export spectra' },
  { actionText: 'delete spectra' },
];

const SpectraTableFooterLinks = ({
  imagePath,
}: SpectraTableFooterLinksProps) => {
  return (
    <FooterLinksContainer>
      {footerLinksList.map(({ actionText, width }) => (
        <ImageLink
          actionText={actionText}
          key={actionText}
          baseHref="/file-management/"
          image={{
            width: width,
          }}
        />
      ))}
    </FooterLinksContainer>
  );
};
export default SpectraTableFooterLinks;

