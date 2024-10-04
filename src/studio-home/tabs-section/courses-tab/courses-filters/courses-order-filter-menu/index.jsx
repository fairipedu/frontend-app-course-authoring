import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';

import messages from './messages';

import CoursesFilterMenu from '../courses-filter-menu';

const CoursesOrderFilterMenu = ({ onItemMenuSelected }) => {
  const intl = useIntl();

  const courseOrders = useMemo(
    () => [
      {
        id: 'az-courses',
        name: '강의명 오름차순(ㄱ-ㅎ)',
        value: 'azCourses',
      },
      {
        id: 'za-courses',
        name: '강의명 내림차순(ㅎ-ㄱ)',
        value: 'zaCourses',
      },
      {
        id: 'newest-courses',
        name: '강의명 최근등록순',
        value: 'newestCourses',
      },
      {
        id: 'oldest-courses',
        name: '강의명 오래된순',
        value: 'oldestCourses',
      },
    ],
    [intl],
  );

  const handleCourseTypeSelected = (courseOrder) => {
    onItemMenuSelected(courseOrder);
  };

  return (
    <CoursesFilterMenu
      id="dropdown-toggle-courses-order-menu"
      menuItems={courseOrders}
      onItemMenuSelected={handleCourseTypeSelected}
      defaultItemSelectedText="강의명 오름차순(ㄱ-ㅎ)"
    />
  );
};

CoursesOrderFilterMenu.propTypes = {
  onItemMenuSelected: PropTypes.func.isRequired,
};

export default CoursesOrderFilterMenu;
