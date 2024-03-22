import { PropsWithChildren } from 'react';

import styles from './FooterLinksContainer.module.css';

const FooterLinksContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default FooterLinksContainer;