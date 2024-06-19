import FooterLinksContainer from './FooterLinksContainer';
import ImageLink from './ImageLink';

interface SpectraTableFooterLinksProps {
  imagePath: string;
}

const footerLinksList = [
  { actionText: 'open workspace' },
  { actionText: 'save workspace' },
  { actionText: 'close workspace' },
  { actionText: 'new workspace' },
];

const WorkspaceManagementFooterLinks = ({
  imagePath,
}: SpectraTableFooterLinksProps) => {
  return (
    <FooterLinksContainer>
      {footerLinksList.map(({ actionText }) => (
        <ImageLink
          actionText={actionText}
          key={actionText}
          baseHref="/workspace-management/"
        />
      ))}
    </FooterLinksContainer>
  );
};
export default WorkspaceManagementFooterLinks;
