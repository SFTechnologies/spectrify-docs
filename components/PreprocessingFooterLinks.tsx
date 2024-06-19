import FooterLinksContainer from './FooterLinksContainer';
import ImageLink from './ImageLink';

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

const PreprocessingFooterLinks = () => {
  return (
    <FooterLinksContainer>
      {footerLinksList.map(({ actionText }) => (
        <ImageLink
          actionText={actionText}
          key={actionText}
          baseHref="/preprocessing/"
        />
      ))}
    </FooterLinksContainer>
  );
};
export default PreprocessingFooterLinks;