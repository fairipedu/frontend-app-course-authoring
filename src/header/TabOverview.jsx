import React from 'react';
import { getConfig } from '@edx/frontend-platform';
import { useParams, useLocation } from 'react-router';
import { getPagePath } from '../utils';
export const TabOverview = () => {
  const courseId = useParams().courseId;
  const { pathname } = useLocation();
  /*
   * 강의개요 -> 강의 계획
   * 수정 -> 강의개요공지
   * 페이지&리소스 -> 강의개요(탭)관리
   * 
   */
  const courseOutlinePath = "/course/"+courseId;
  const pagesResourcesUrl = getPagePath(courseId, 'true', 'tabs');
  return (
    <div className="studio-header-tab">
       
      <div className="fixbox">
        <div className={ (pathname.indexOf("/settings/details") >= 0) ? "on" : "" } ><a href={`${getConfig().STUDIO_BASE_URL}/settings/details/${courseId}`}>강의일정및소개관리</a></div>
        <div className={ (pathname == courseOutlinePath ) ? "on" : "" } ><a href={`${getConfig().STUDIO_BASE_URL}/course/${courseId}`}>강의계획관리</a></div>
        <div className={ (pathname.indexOf("/pages-and-resources") >= 0) ? "on" : "" } ><a href={ pagesResourcesUrl }>강의개요관리</a></div>
        <div className={ (pathname.indexOf("/course_info") >= 0) ? "on" : "" } ><a href={`${getConfig().STUDIO_BASE_URL}/course_info/${courseId}`}>강의개요알림관리</a></div>
        <div className={ (pathname.indexOf("/assets") >= 0) ? "on" : "" } ><a href={`${getConfig().STUDIO_BASE_URL}/assets/${courseId}`}>파일함</a></div>
      </div>
    </div>
  );
};

TabOverview.propTypes = {};

export default TabOverview;
