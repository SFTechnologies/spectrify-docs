import FooterLinksContainer from './FooterLinksContainer';
import ImageLink, { ImageLinkProps } from './ImageLink';

const defaultProps = {
  hideText: true,
  image: { width: 170 }
};

const footerLinksList: Pick<ImageLinkProps, 'actionText' | 'hideText' | 'image'>[] = [
  { actionText: 'column selection', ...defaultProps },
  { actionText: 'clear filters', ...defaultProps },
  { actionText: 'create metadata', ...defaultProps },
  { actionText: 'import metadata', ...defaultProps },
  { actionText: 'delete order filter', ...defaultProps }
];

const SpectraTableFooterLinks = () => {
  return (
    <FooterLinksContainer>
      {footerLinksList.map((props) => (
        <ImageLink
          {...props}
          key={props.actionText}
          baseHref="/spectra-table/"
        />
      ))}
    </FooterLinksContainer>
  );
};
export default SpectraTableFooterLinks;
