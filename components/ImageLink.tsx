import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import type { UrlObject } from 'url';
import styles from './ImageLink.module.css';

type Url = string | UrlObject;
interface ImageLinkProps {
    href: Url,
    image : {
        alt: string,
        src:  string,
    },
    text: string

}

const ImageLink = ({href, image, text}: ImageLinkProps) => {
  return (
    <Link
      href={href}
      className={clsx('text-underline-animation-class', styles.link)}
    >
      <Image
        alt={image.alt}
        src={image.src}
        width={35}
        height={35}
      />
      <span>
        {text}
      </span>
    </Link>
  );
};

export default ImageLink;
