import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import type { UrlObject } from 'url';
import styles from './ImageLink.module.css';
import { c } from 'nextra/dist/types-c8e621b7';

interface ImageLinkProps {
  baseHref: string;
  image: {
    height?: number | `${number}` | undefined;
    width?: number | `${number}` | undefined;
  };
  actionText: string;
  emptyTextItems: string[];
}

function formatString(actionText: string, baseHref: string, emptyTextItems: string[] = []) {
  const capitalizeWords = (str: string) => {
    return str.replace(/\b\w/g, (c) => c.toUpperCase());
  };
  const href = `${baseHref}${actionText.replaceAll(' ', '-')}`;
  const alt = actionText;
  const text = emptyTextItems.includes(actionText) ? '' : capitalizeWords(actionText);
  const src = `/images${baseHref}${actionText.replaceAll(' ', '_')}.png`;

  return { alt, href, src, text };
}
const ImageLink = ({ baseHref, image: { height = 35, width = 35 }, actionText, emptyTextItems = [] }: ImageLinkProps) => {
  const { alt, href, src, text } = formatString(actionText, baseHref, emptyTextItems);
  return (
    <Link
      href={href}
      className={clsx('text-underline-animation-class', styles.link)}
    >
      <Image alt={alt} src={src} width={width} height={height} />
      {text && <span>{text}</span>}
    </Link>
  );
};

export default ImageLink;
