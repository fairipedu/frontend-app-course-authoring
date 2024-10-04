import React from 'react';
import { getConfig } from '@edx/frontend-platform';
import { useParams } from 'react-router';
export const TabGroup = () => {
  const courseId = useParams().courseId;
  /*
   * 강의개요 -> 강의 계획
   * 수정 -> 강의개요공지
   * 페이지&리소스 -> 강의개요(탭)관리
   * 
   */
  
  return (    
    <div className="studio-header-tab">
      <div className="fixbox">
        <div className="tab-update"><a href={`${getConfig().STUDIO_BASE_URL}/settings/grading/${courseId}`}>채점규칙설정</a></div>
        <div className="tab-overview on"><a href={`${getConfig().STUDIO_BASE_URL}/course_team/${courseId}`}>그룹멤버관리</a></div>
        <div className="tab-update"><a href={`${getConfig().STUDIO_BASE_URL}/group_configurations/${courseId}`}>그룹관리</a></div>
        <div className="tab-update"><a href={`${getConfig().STUDIO_BASE_URL}/settings/advanced/${courseId}`}>고급설정</a></div>
        <div className="tab-update"><a href={`${getConfig().STUDIO_BASE_URL}/course/${courseId}/certificates`}>인증서관리</a></div>
      </div>
    </div>
  );
};

TabGroup.propTypes = {};

export default TabGroup;
