import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ImageLink.module.css';

export interface ImageLinkProps {
  actionText: string;
  baseHref: string;
  hideText?: boolean;
  image?: {
    height?: number | `${number}`;
    width?: number | `${number}`;
  };
}

function formatString(actionText: string, baseHref: string) {
  const href = `${baseHref}${actionText.replaceAll(' ', '-')}`;
  const src = `/images${baseHref}${actionText.replaceAll(' ', '_')}.png`;

  return { alt: actionText, href, src, text: actionText };
}

const DEFAULT_SIZE = 35;

const ImageLink = ({ actionText, baseHref, hideText = false, image = { height: DEFAULT_SIZE, width: DEFAULT_SIZE } }: ImageLinkProps) => {
  const { alt, href, src, text } = formatString(actionText, baseHref);
  const { height = DEFAULT_SIZE, width = DEFAULT_SIZE } = image;

  return (
    <Link
      href={href}
      className={clsx('text-underline-animation-class', styles.link)}
    >
      <Image alt={alt} src={src} width={width} height={height} />
      {!hideText && text && <span className={styles.linkText}>{text}</span>}
    </Link>
  );
};

export default ImageLink;
