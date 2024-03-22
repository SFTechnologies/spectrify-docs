import FooterLinksContainer from '../FooterLinksContainer';
import ImageLink from '../ImageLink';

interface FileManagementFooterLinksProps {
  imagePath: string;
}

const FileManagementFooterLinks = ({
  imagePath,
}: FileManagementFooterLinksProps) => {
  return (
    <FooterLinksContainer>
      <ImageLink
        href='/file-management/import-spectra'
        image={{
          alt: 'import spectra icon',
          src: `${imagePath}import_spectra_icon.svg`
        }}
        text='Import Spectra' />
      <ImageLink
        href='/file-management/export-spectra'
        image={{
          alt: 'export spectra icon',
          src: `${imagePath}export_spectra_icon.svg`
        }}
        text='Export Spectra' />
      <ImageLink
        href='/file-management/delete-spectra'
        image={{
          alt: 'delete spectra icon',
          src: `${imagePath}delete_spectra_icon.svg`
        }}
        text='Delete Spectra' />
    </FooterLinksContainer>
  );
};

export default FileManagementFooterLinks;
