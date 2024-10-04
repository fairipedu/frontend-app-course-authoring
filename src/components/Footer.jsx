import React from 'react';

import { getConfig } from '@edx/frontend-platform';

export const Footer = () => {
  
  return (
    <div className="footer p-2">

        <a href={getConfig().STUDIO_BASE_UR} className="">
        교수자 메인
        </a>
        <span> | </span>
        <a href={getConfig().STUDIO_BASE_UR} className="">
            학습자 메인
        </a>
        <span className="float-end">contact us : fairipcs@gmail.com</span>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;