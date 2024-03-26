import image from 'next/image';
import FooterLinksContainer from '../FooterLinksContainer';
import ImageLink from '../ImageLink';

interface SpectraTableFooterLinksProps {
  imagePath: string;
}

const footerLinksList = [
  { actionText: 'column selection', width: 170 },
  { actionText: 'clear filters', width: 170 },
  { actionText: 'create metadata', width: 170 },
  { actionText: 'import metadata', width: 170 },
  { actionText: 'delete order filter', width: 170 }
];

const emptyTextItems = ['column selection', 'clear filters', 'create metadata', 'import metadata', 'delete order filter'];

const SpectraTableFooterLinks = ({
  imagePath,
}: SpectraTableFooterLinksProps) => {
  return (
    <FooterLinksContainer>
      {footerLinksList.map(({ actionText, width }) => (
        <ImageLink
          actionText={actionText}
          key={actionText}
          baseHref="/spectra-table/"
          image={{
            width: width,
          }}
          emptyTextItems={emptyTextItems}
        />
      ))}
    </FooterLinksContainer>
  );
};
export default SpectraTableFooterLinks;
