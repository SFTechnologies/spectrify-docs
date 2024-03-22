import ImageLink from '../ImageLink';

import styles from './PreprocessingFooterLinks.module.css';

interface PreprocessingFooterLinksProps {
  imagePath: string;
}

const PreprocessingFooterLinks = ({
  imagePath,
}: PreprocessingFooterLinksProps) => {
  return (
    <div className={styles.container}>
      <ImageLink
        href='/preprocessing/standardize'
        image={{
          alt: 'standardization icon',
          src: `${imagePath}standardization_icon.svg`,
        }}
        text='Standardize'
      />
      <ImageLink
        href='/preprocessing/baseline-correction'
        image={{
          alt: 'baseline correction icon',
          src: `${imagePath}baseline_icon.svg`,
        }}
        text='Baseline'
      />
      <ImageLink
        href='/preprocessing/smooth'
        image={{ alt: 'smoothing icon', src: `${imagePath}smoothing_icon.svg` }}
        text='Smooth'
      />
      <ImageLink
        href='/preprocessing/offset'
        image={{ alt: 'offset icon', src: `${imagePath}offset_icon.svg` }}
        text='Offset'
      />
      <ImageLink
        href='/preprocessing/normalize'
        image={{
          alt: 'normalization icon',
          src: `${imagePath}normalization_icon.svg`,
        }}
        text='Normalize'
      />
      <ImageLink
        href='/preprocessing/peak-detection'
        image={{
          alt: 'peak detection icon',
          src: `${imagePath}peak_detection_icon.svg`,
        }}
        text='Peaks'
      />
      <ImageLink
        href='/preprocessing/offset'
        image={{ alt: 'offset icon', src: `${imagePath}derivative_icon.svg` }}
        text='Derivative'
      />
      <ImageLink
        href='/preprocessing/restore'
        image={{ alt: 'restore icon', src: `${imagePath}restore_icon.svg` }}
        text='Restore Spectra'
      />
    </div>
  );
};

export default PreprocessingFooterLinks;
