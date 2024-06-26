import React from 'react';

import {useThemeConfig} from '@docusaurus/theme-common';
import FooterComponent from '@site/src/components/FooterComponent/FooterComponent';
import FooterLinks from '@theme/Footer/Links';
import FooterLogo from '@theme/Footer/Logo';
import FooterCopyright from '@theme/Footer/Copyright';
import FooterLayout from '@theme/Footer/Layout';

function Footer(): JSX.Element | null {
  const {footer} = useThemeConfig();
  if (!footer) {
    return null;
  }
  const {copyright, links, logo, style} = footer;

  return (
    // <FooterLayout
    //   style={style}
    //   links={links && links.length > 0 && <FooterLinks links={links} />}
    //   logo={logo && <FooterLogo logo={logo} />}
    //   copyright={copyright && <FooterCopyright copyright={copyright} />}
    // />
    // <h1> hello this is footer</h1>
    <FooterComponent />
  );
}

export default React.memo(Footer);
