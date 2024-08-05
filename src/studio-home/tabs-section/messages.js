import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  coursesTabTitle: {
    id: 'course-authoring.studio-home.courses.tab.title',
    defaultMessage: '강의',
  },
  courseTabErrorMessage: {
    id: 'course-authoring.studio-home.courses.tab.error.message',
    defaultMessage: '강의를 가져오지 못했습니다. 나중에 다시 시도 해주십시오.',
  },
  coursesPaginationInfo: {
    id: 'course-authoring.studio-home.courses.pagination.info',
    defaultMessage: '{length}/{total} ',
  },
  librariesTabErrorMessage: {
    id: 'course-authoring.studio-home.libraries.tab.error.message',
    defaultMessage: '파일함을 가져오지 못했습니다. 나중에 다시 시도 해주십시오.',
  },
  librariesTabTitle: {
    id: 'course-authoring.studio-home.libraries.tab.title',
    defaultMessage: '파일함',
  },
  legacyLibrariesTabTitle: {
    id: 'course-authoring.studio-home.legacy.libraries.tab.title',
    defaultMessage: '이전파일함',
  },
  archivedTabTitle: {
    id: 'course-authoring.studio-home.archived.tab.title',
    defaultMessage: '강의 보관함',
  },
  archiveTabErrorMessage: {
    id: 'course-authoring.studio-home.archived.tab.error.message',
    defaultMessage: '보관된 강의를 가져오지 못했습니다. 나중에 다시 시도 해주십시오.',
  },
  coursesTabCourseNotFoundAlertTitle: {
    id: 'course-authoring.studio-home.courses.tab.course.not.found.alert.title',
    defaultMessage: '결과를 찾을 수 없습니다.',
  },
  coursesTabCourseNotFoundAlertMessage: {
    id: 'course-authoring.studio-home.courses.tab.course.not.found.alert.message',
    defaultMessage: '검색된 강의가 없습니다.',
  },
  coursesTabCourseNotFoundAlertCleanFiltersButton: {
    id: 'course-authoring.studio-home.courses.tab.course.not.found.alert.clean.filters.button',
    defaultMessage: '초기화',
  },
  taxonomiesTabTitle: {
    id: 'course-authoring.studio-home.taxonomies.tab.title',
    defaultMessage: '분류',
    description: 'Title of Taxonomies tab on the home page',
  },
  libraryV2PlaceholderTitle: {
    id: 'course-authoring.studio-home.libraries.placeholder.title',
    defaultMessage: '파일함 V2(임시)',
  },
  libraryV2PlaceholderBody: {
    id: 'course-authoring.studio-home.libraries.placeholder.body',
    defaultMessage: '파일함 관리 MFE가 활성화되지 않았으므로 이는 임시페이지 입니다',
  },
  librariesV2TabLibrarySearchPlaceholder: {
    id: 'course-authoring.studio-home.libraries.tab.library.search-placeholder',
    defaultMessage: '검색',
  },
  librariesV2TabLibraryNotFoundAlertTitle: {
    id: 'course-authoring.studio-home.libraries.tab.library.not.found.alert.title',
    defaultMessage: '결과를 찾을 수 없습니다.',
  },
  librariesV2TabLibraryNotFoundAlertMessage: {
    id: 'course-authoring.studio-home.libraries.tab.library.not.found.alert.message',
    defaultMessage: '검색된 파일함이 없습니다.',
  },
});

export default messages;
