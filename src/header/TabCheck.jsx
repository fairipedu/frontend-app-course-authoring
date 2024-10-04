import React from 'react';
import { getConfig } from '@edx/frontend-platform';
import { useParams, useLocation } from 'react-router';
export const TabCheck = () => {
  const courseId = useParams().courseId;
  const { pathname } = useLocation();
  
  /*
   * 강의개요 -> 강의 계획
   * 수정 -> 강의개요공지
   * 페이지&리소스 -> 강의개요(탭)관리
   * 
   */
  return (    
    <div className="studio-header-tab">
      <div className="fixbox">
        <div className={ (pathname.indexOf("/import") >= 0) ? "on" : "" } ><a href={`${getConfig().STUDIO_BASE_URL}/import/${courseId}`}>가져오기</a></div>
        <div className={ (pathname.indexOf("/export") >= 0) ? "on" : "" }><a href={`${getConfig().STUDIO_BASE_URL}/export/${courseId}`}>강의내보내기</a></div>
        <div className={ (pathname.indexOf("/checklists") >= 0) ? "on" : "" }><a href={`${getConfig().STUDIO_BASE_URL}/checklists/${courseId}`}>체크리스트</a></div>        
      </div>
    </div>
  );
};

TabCheck.propTypes = {};

export default TabCheck;
