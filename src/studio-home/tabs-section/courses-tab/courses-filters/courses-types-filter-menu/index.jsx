import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';

import messages from './messages';

import CoursesFilterMenu from '../courses-filter-menu';

const CoursesTypesFilterMenu = ({ onItemMenuSelected }) => {
  const intl = useIntl();

  const courseTypes = useMemo(
    () => [
      {
        id: 'all-courses',
        name: '전체 강의',
        value: 'allCourses',
      },
      {
        id: 'active-courses',
        name: '진행중인 강의',
        value: 'activeCourses',
      },
      {
        id: 'archived-courses',
        name: '종료된 강의',
        value: 'archivedCourses',
      },
    ],
    [intl],
  );

  const handleCourseTypeSelected = (courseType) => {
    onItemMenuSelected(courseType);
  };

  return (
    <CoursesFilterMenu
      id="dropdown-toggle-course-type-menu"
      menuItems={courseTypes}
      onItemMenuSelected={handleCourseTypeSelected}
      defaultItemSelectedText='전체 강의'
    />
  );
};

CoursesTypesFilterMenu.propTypes = {
  onItemMenuSelected: PropTypes.func.isRequired,
};

export default CoursesTypesFilterMenu;
