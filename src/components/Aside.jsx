import React, { useState, useRef, useLayoutEffect } from 'react';
import BrandLogo from './BrandLogo';

import AccordionItem from './Accordion/AccordionItem';
import { getConfig } from '@edx/frontend-platform';
import {
  useParams,
} from 'react-router-dom';

export const Aside = ({ courseData }) => {
  const [active, setActive] = useState(null);
  const courseId = useParams().courseId;
  const asideList = [
    {
      isOpen: 0,
      id: 1,
      header: '대시보드',
      icon: 'ri-home-5-fill',
      url: getConfig().STUDIO_BASE_URL,
      subNav: [],
    },
  ];
  var studioAsideList = asideList;
  if(courseData) {
    courseData.map((item) => {  
      if(item.courseKey == courseId) {
        open = 1;
      } else {
        open = 0;
      }
      const navItem = {
        isOpen: open,
        id: studioAsideList.length+1,
        header: item.displayName,
        url: '',
        icon: 'ri-graduation-cap-fill',
        subNav: [
          {"navText" : "강의관리", "navUrl" : getConfig().STUDIO_BASE_URL+item.url},
          {"navText" : "채점및그룹", "navUrl" : `${getConfig().STUDIO_BASE_URL}/settings/grading/${item.courseKey}`},
          {"navText" : "강의데이터", "navUrl" : `${getConfig().STUDIO_BASE_URL}/import/${item.courseKey}`},
        ],
      };
      studioAsideList = [...studioAsideList, navItem];
      
    });
  }
  

  const handleToggle = (idx) => {
    if (active === idx) {
      setActive(null);
    } else {
      setActive(idx);
    }
  };

  return (
    <>
      <BrandLogo />
      <ul className="fe-nav">
        {
          studioAsideList.map((item) => (
            <AccordionItem active={active} key={item.id} handleToggle={handleToggle} subNavList={item} isOpen={item.isOpen}/>
          ))
        }
      </ul>
    </>
  );
};

export default Aside;
