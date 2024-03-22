import FooterLinksContainer from '../FooterLinksContainer';
import ImageLink from '../ImageLink';

interface WorkspaceManagementFooterLinksProps {
  imagePath: string;
}

const WorkspaceManagementFooterLinks = ({
  imagePath,
}: WorkspaceManagementFooterLinksProps) => {
  return (
    <FooterLinksContainer>
      <ImageLink
        href='/workspace-management/open-workspace'
        image={{
          alt: 'open workspace icon',
          src: `${imagePath}open_workspace_icon.svg`
        }}
        text='Open Workspace' />
      <ImageLink
        href='/workspace-management/save-workspace'
        image={{
          alt: 'save workspace icon',
          src: `${imagePath}save_workspace_icon.svg`
        }}
        text='Save Workspace' />
      <ImageLink
        href='/workspace-management/close-workspace'
        image={{
          alt: 'close workspace icon',
          src: `${imagePath}close_workspace_icon.svg`
        }}
        text='Close Workspace' />
      <ImageLink
        href='/workspace-management/new-workspace'
        image={{
          alt: 'new workspace icon',
          src: `${imagePath}new_workspace_icon.svg`
        }}
        text='New Workspace' />
    </FooterLinksContainer>
  );
};

export default WorkspaceManagementFooterLinks;
