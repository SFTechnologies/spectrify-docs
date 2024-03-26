import FooterLinksContainer from '../FooterLinksContainer';
import ImageLink from '../ImageLink';

interface SpectraTableFooterLinksProps {
  imagePath: string;
}

const footerLinksList = [
  { actionText: 'standardize' },
  { actionText: 'baseline correction' },
  { actionText: 'smooth' },
  { actionText: 'offset' },
  { actionText: 'normalize' },
  { actionText: 'peak detection' },
  { actionText: 'derivative' },
  { actionText: 'restore' },
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
          baseHref="/preprocessing/"
          image={{
            width: width,
          }}
        />
      ))}
    </FooterLinksContainer>
  );
};
export default SpectraTableFooterLinks;