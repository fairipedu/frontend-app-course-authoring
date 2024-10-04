import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import {
  useLocation,
} from 'react-router-dom';
import { Footer } from './components/Footer';
import Header from './header';
import { fetchCourseDetail } from './data/thunks';
import { useModel } from './generic/model-store';
import NotFoundAlert from './generic/NotFoundAlert';
import PermissionDeniedAlert from './generic/PermissionDeniedAlert';
import { getCourseAppsApiStatus } from './pages-and-resources/data/selectors';
import { RequestStatus } from './data/constants';
import Loading from './generic/Loading';
import Aside from './components/Aside';

import { useStudioHome } from './studio-home/hooks';


const CourseAuthoringPage = ({ courseId, children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourseDetail(courseId));
  }, [courseId]);
  const { studioHomeData } = useStudioHome(false);
  const courseDetail = useModel('courseDetails', courseId);

  const courseNumber = courseDetail ? courseDetail.number : null;
  const courseOrg = courseDetail ? courseDetail.org : null;
  const courseTitle = courseDetail ? courseDetail.name : courseId;
  const courseAppsApiStatus = useSelector(getCourseAppsApiStatus);
  const courseDetailStatus = useSelector(state => state.courseDetail.status);
  const inProgress = courseDetailStatus === RequestStatus.IN_PROGRESS;
  const { pathname } = useLocation();
  const isEditor = pathname.includes('/editor');
  
  if (courseDetailStatus === RequestStatus.NOT_FOUND && !isEditor) {
    return (
      <NotFoundAlert />
    );
  }
  if (courseAppsApiStatus === RequestStatus.DENIED) {
    return (
      <PermissionDeniedAlert />
    );
  }

  var tabName = '';
  if( 
    pathname.indexOf("/course_info") >= 0 ||  
    pathname.indexOf("/pages-and-resources") >= 0 || 
    pathname.indexOf("/assets") >= 0 || 
    pathname.indexOf("/settings/detail") >= 0
  ) {
    tabName = "tab-overview";
  } else if( 
    pathname.indexOf("/settings/grading") >= 0 || 
    pathname.indexOf("/course_team") >= 0 || 
    pathname.indexOf("/settings/advanced") >= 0 || 
    pathname.indexOf("/certificates") >= 0
  ) {
    tabName = "tab-group";
  } else if(
    pathname.indexOf("/import") >= 0 || 
    pathname.indexOf("/export")  >= 0 || 
    pathname.indexOf("/checklists") >= 0
  ) {
    console.log('check');
    tabName = "tab-check";
  } else {
    tabName = "tab-overview";
  }
  
  

  return (
    <div className="top-wrapper">
      {/* While V2 Editors are temporarily served from their own pages
      using url pattern containing /editor/,
      we shouldn't have the header and footer on these pages.
      This functionality will be removed in TNL-9591 */}
      <aside className="aside-nav">
        <Aside courseData={studioHomeData.courses} />
      </aside>
      <main>
        {inProgress ? !isEditor && <Loading />
          : (!isEditor && (
            <Header
              tabName={tabName}
              number={courseNumber}
              org={courseOrg}
              title={courseTitle}
              contextId={courseId}
            />
          )
          )}
        {children}
        {!inProgress && !isEditor && <Footer />}
      </main>
    </div>
  );
};

CourseAuthoringPage.propTypes = {
  children: PropTypes.node,
  courseId: PropTypes.string.isRequired,
};

CourseAuthoringPage.defaultProps = {
  children: null,
};

export default CourseAuthoringPage;
