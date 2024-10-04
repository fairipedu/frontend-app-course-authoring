import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'course-authoring.pages-resources.heading',
    defaultMessage: '강의개요관리',
  },
  settings: {
    id: 'course-authoring.pages-resources.resources.settings.button',
    defaultMessage: '설정',
  },
  viewLiveButton: {
    id: 'course-authoring.pages-resources.viewLive.button',
    defaultMessage: '강의개요 미리보기',
  },
  errorShowingConfiguration: {
    id: 'course-authoring.pages-resources.courseAppPlugin.errorMessage',
    defaultMessage: '해당 앱에 대한 UI를 불러오는 동안 오류가 발생했습니다.',
  },
  enabled: {
    id: 'course-authoring.badge.enabled',
    defaultMessage: '활성화됨',
  },
  contentPermissions: {
    id: 'course-authoring.pages-resources.content-permissions.heading',
    defaultMessage: '강의 접근 권한',
  },
});

export default messages;
