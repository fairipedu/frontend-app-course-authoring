import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headingTitle: {
    id: 'course-authoring.studio-home.heading.title',
    defaultMessage: '{studioShortName}',
  },
  addNewCourseBtnText: {
    id: 'course-authoring.studio-home.add-new-course.btn.text',
    defaultMessage: '새강의생성',
  },
  addNewLibraryBtnText: {
    id: 'course-authoring.studio-home.add-new-library.btn.text',
    defaultMessage: '새 파일함 생성',
  },
  homePageLoadFailedMessage: {
    id: 'course-authoring.studio-home.page-load.failed.message',
    defaultMessage: '강의관리 대시보드를 로드하지 못했습니다. 나중에 다시 시도해 주세요.',
  },
  emailStaffBtnText: {
    id: 'course-authoring.studio-home.email-staff.btn.text',
    defaultMessage: '강의를 생성하려면 관리자에게 권한요청 이메일을 보내세요',
  },
  defaultSection_1_Title: {
    id: 'course-authoring.studio-home.default-section-1.title',
    defaultMessage: '{studioShortName} 과정의 관리자 이신가요?',
  },
  defaultSection_1_Description: {
    id: 'course-authoring.studio-home.default-section-1.description',
    defaultMessage: '강의에 대한 접근 권한이 없습니다. 강의관리자에게 권한을 요청하세요.',
  },
  defaultSection_2_Title: {
    id: 'course-authoring.studio-home.default-section-2.title',
    defaultMessage: '첫 번째 강의 만들기',
  },
  defaultSection_2_Description: {
    id: 'course-authoring.studio-home.default-section-2.description',
    defaultMessage: '클릭한번으로 강의를 이용할 수 있습니다.',
  },
  btnAddNewCourseText: {
    id: 'course-authoring.studio-home.btn.add-new-course.text',
    defaultMessage: '첫 번째 강의 만들기',
  },
  btnReRunText: {
    id: 'course-authoring.studio-home.btn.re-run.text',
    defaultMessage: '강의복사',
  },
  viewLiveBtnText: {
    id: 'course-authoring.studio-home.btn.view-live.text',
    defaultMessage: '강의미리보기',
  },
  organizationTitle: {
    id: 'course-authoring.studio-home.organization.title',
    defaultMessage: '학부(학과) 및 파일함 설정',
  },
  organizationLabel: {
    id: 'course-authoring.studio-home.organization.label',
    defaultMessage: '모든 강의 표시',
  },
  organizationSubmitBtnText: {
    id: 'course-authoring.studio-home.organization.btn.submit.text',
    defaultMessage: '전송',
  },
  organizationInputPlaceholder: {
    id: 'course-authoring.studio-home.organization.input.placeholder',
    defaultMessage: '예) 컴터공학부, MITx',
  },
  organizationInputNoOptions: {
    id: 'course-authoring.studio-home.organization.input.no-options',
    defaultMessage: '옵션없음',
  },
});

export default messages;
