import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useIntl } from '@edx/frontend-platform/i18n';
import {
  Icon,
  Row,
  Pagination,
  Alert,
  Button,
} from '@openedx/paragon';
import { Error } from '@openedx/paragon/icons';

import { COURSE_CREATOR_STATES } from '../../../constants';
import { getStudioHomeData, getStudioHomeCoursesParams } from '../../data/selectors';
import { updateStudioHomeCoursesCustomParams } from '../../data/slice';
import { fetchStudioHomeData } from '../../data/thunks';
import CardItem from '../../card-item';
import CollapsibleStateWithAction from '../../collapsible-state-with-action';
import ContactAdministrator from './contact-administrator';
import CoursesFilters from './courses-filters';
import ProcessingCourses from '../../processing-courses';
import { LoadingSpinner } from '../../../generic/Loading';
import AlertMessage from '../../../generic/alert-message';
import messages from '../messages';
import './index.scss';

const CoursesTab = ({
  coursesDataItems,
  showNewCourseContainer,
  onClickNewCourse,
  isShowProcessing,
  isLoading,
  isFailed,
  dispatch,
  numPages,
  coursesCount,
  isEnabledPagination,
}) => {
  const intl = useIntl();
  const location = useLocation();
  const {
    courseCreatorStatus,
    optimizationEnabled,
  } = useSelector(getStudioHomeData);
  const studioHomeCoursesParams = useSelector(getStudioHomeCoursesParams);
  const { currentPage, isFiltered } = studioHomeCoursesParams;
  const hasAbilityToCreateCourse = courseCreatorStatus === COURSE_CREATOR_STATES.granted;
  const showCollapsible = [
    COURSE_CREATOR_STATES.denied,
    COURSE_CREATOR_STATES.pending,
    COURSE_CREATOR_STATES.unrequested,
  ].includes(courseCreatorStatus);
  const locationValue = location.search ?? '';

  const handlePageSelected = (page) => {
    const {
      search,
      order,
      archivedOnly,
      activeOnly,
    } = studioHomeCoursesParams;

    const customParams = {
      search,
      order,
      archivedOnly,
      activeOnly,
    };

    dispatch(fetchStudioHomeData(locationValue, false, { page, ...customParams }, true));
    dispatch(updateStudioHomeCoursesCustomParams({ currentPage: page, isFiltered: true }));
  };

  const handleCleanFilters = () => {
    const customParams = {
      currentPage: 1,
      search: undefined,
      order: 'display_name',
      isFiltered: true,
      cleanFilters: true,
      archivedOnly: undefined,
      activeOnly: undefined,
    };

    dispatch(fetchStudioHomeData(locationValue, false, { page: 1, order: 'display_name' }, true));
    dispatch(updateStudioHomeCoursesCustomParams(customParams));
  };

  const isNotFilteringCourses = !isFiltered && !isLoading;
  const hasCourses = coursesDataItems?.length > 0;

  if (isLoading && !isFiltered) {
    return (
      <Row className="m-0 mt-4 justify-content-center">
        <LoadingSpinner />
      </Row>
    );
  }

  return (
    isFailed && !isFiltered ? (
      <AlertMessage
        variant="danger"
        description={(
          <Row className="m-0 align-items-center">
            <Icon src={Error} className="text-danger-500 mr-1" />
            <span data-testid="error-failed-message">{intl.formatMessage(messages.courseTabErrorMessage)}</span>
          </Row>
        )}
      />
    ) : (
      <div className="courses-tab-container">
        {isShowProcessing && !isEnabledPagination && <ProcessingCourses />}
        {isEnabledPagination && (
          <div className="d-flex flex-row justify-content-between my-4">
            <CoursesFilters dispatch={dispatch} locationValue={locationValue} isLoading={isLoading} />
            <p data-testid="pagination-info">
              {intl.formatMessage(messages.coursesPaginationInfo, {
                length: coursesDataItems.length,
                total: coursesCount,
              })}
            </p>
          </div>
        )}
        {hasCourses ? (
          <div class="d-flex justify-content-start">
            {coursesDataItems.map(
              ({
                courseKey,
                displayName,
                lmsLink,
                org,
                rerunLink,
                number,
                run,
                url,
                cmsLink,
              }) => (
                <CardItem
                  key={courseKey}
                  courseKey={courseKey}
                  displayName={displayName}
                  lmsLink={lmsLink}
                  rerunLink={rerunLink}
                  org={org}
                  number={number}
                  run={run}
                  url={url}
                  cmsLink={cmsLink}
                  isPaginated={isEnabledPagination}
                />
              ),
            )}

            {numPages > 1 && isEnabledPagination && (
              <Pagination
                className="d-flex justify-content-center"
                paginationLabel="pagination navigation"
                pageCount={numPages}
                currentPage={currentPage}
                onPageSelect={handlePageSelected}
              />
            )}
          </div>
        ) : (!optimizationEnabled && isNotFilteringCourses && (
          <ContactAdministrator
            hasAbilityToCreateCourse={hasAbilityToCreateCourse}
            showNewCourseContainer={showNewCourseContainer}
            onClickNewCourse={onClickNewCourse}
          />
        )
        )}

        {isFiltered && !hasCourses && !isLoading && (
          <Alert className="mt-4 no-data">
            <Alert.Heading>
              {intl.formatMessage(messages.coursesTabCourseNotFoundAlertTitle)}
            </Alert.Heading>
            <p data-testid="courses-not-found-alert">
              {intl.formatMessage(messages.coursesTabCourseNotFoundAlertMessage)}
            </p>
            <Button variant="primary" onClick={handleCleanFilters}>
              {intl.formatMessage(messages.coursesTabCourseNotFoundAlertCleanFiltersButton)}
            </Button>
          </Alert>
        )}
        {showCollapsible && (
          <CollapsibleStateWithAction
            state={courseCreatorStatus}
            className="mt-3"
          />
        )}
      </div>
    )
  );
};

CoursesTab.defaultProps = {
  numPages: 0,
  coursesCount: 0,
  isEnabledPagination: false,
};

CoursesTab.propTypes = {
  coursesDataItems: PropTypes.arrayOf(
    PropTypes.shape({
      courseKey: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      lmsLink: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      org: PropTypes.string.isRequired,
      rerunLink: PropTypes.string.isRequired,
      run: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  showNewCourseContainer: PropTypes.bool.isRequired,
  onClickNewCourse: PropTypes.func.isRequired,
  isShowProcessing: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isFailed: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  numPages: PropTypes.number,
  coursesCount: PropTypes.number,
  isEnabledPagination: PropTypes.bool,
};

export default CoursesTab;
