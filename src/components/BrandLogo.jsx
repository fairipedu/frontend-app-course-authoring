import React from 'react';

import { getConfig } from '@edx/frontend-platform';

export const BrandLogo = () => {
  
  return (
    <a href={getConfig().STUDIO_BASE_UR} className="logo-wrap">
      <img
        className="logo"
        src={`${getConfig().LMS_BASE_URL}/theming/asset/images/theme_logo_white.png`}
        alt="LMS Logo"
      />
    </a>
  );
};

BrandLogo.propTypes = {};

export default BrandLogo;
