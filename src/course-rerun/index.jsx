import React from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Layout,
  Stack,
  ActionRow,
  Button,
} from '@openedx/paragon';
import { StudioFooter } from '@edx/frontend-component-footer';
import { useNavigate, useParams } from 'react-router-dom';

import Header from '../header';
import Loading from '../generic/Loading';
import { getLoadingStatuses } from '../generic/data/selectors';
import InternetConnectionAlert from '../generic/internet-connection-alert';
import { RequestStatus } from '../data/constants';
import CourseRerunForm from './course-rerun-form';
import CourseRerunSideBar from './course-rerun-sidebar';
import messages from './messages';
import { useCourseRerun } from './hooks';
import Aside from '../components/Aside';
import Footer from '../components/Footer';

const CourseRerun = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const {
    intl,
    displayName,
    savingStatus,
    initialFormValues,
    originalCourseData,
  } = useCourseRerun(courseId);
  const { organizationLoadingStatus } = useSelector(getLoadingStatuses);

  if (organizationLoadingStatus === RequestStatus.IN_PROGRESS) {
    return <Loading />;
  }

  const handleRerunCourseCancel = () => {
    navigate('/home');
  };

  return (
    <div class="top-wrapper">
      <aside class="aside-nav">
        <Aside />
      </aside>
      <main>
        <Header isHiddenMainMenu />
        <Container size="xl" className="small p-4 mt-3">
          <section className="mb-4">
            <article>
              <section>
                <header className="d-flex">
                  <Stack>
                    <h2>
                      강의복제 : {displayName}
                    </h2>
                    <span className="large">{originalCourseData}</span>
                  </Stack>
                  <ActionRow className="ml-auto">
                    <Button variant="outline-primary" size="sm" onClick={handleRerunCourseCancel}>
                      취소
                    </Button>
                  </ActionRow>
                </header>
                <hr />
              </section>
            </article>
            <Layout>
              <Layout.Element>
                <CourseRerunForm
                  initialFormValues={initialFormValues}
                  onClickCancel={handleRerunCourseCancel}
                />
              </Layout.Element>
            </Layout>
          </section>
        </Container>
        <div className="alert-toast">
          <InternetConnectionAlert
            isFailed={savingStatus === RequestStatus.FAILED}
            isQueryPending={savingStatus === RequestStatus.PENDING}
          />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default CourseRerun;
