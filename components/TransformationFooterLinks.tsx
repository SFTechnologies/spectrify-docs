import FooterLinksContainer from './FooterLinksContainer';
import ImageLink from './ImageLink';

const footerLinksList = [
  { actionText: 'intensity' },
  { actionText: 'restore' },
];

const TransformationFooterLinks = () => {
  return (
    <FooterLinksContainer>
      {footerLinksList.map(({ actionText }) => (
        <ImageLink
          actionText={actionText}
          key={actionText}
          baseHref="/transformation/"
        />
      ))}
    </FooterLinksContainer>
  );
};
export default TransformationFooterLinks;