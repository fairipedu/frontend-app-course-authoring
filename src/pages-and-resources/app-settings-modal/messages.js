import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  cancel: {
    id: 'course-authoring.pages-resources.app-settings-modal.button.cancel',
    defaultMessage: '취소',
  },
  save: {
    id: 'course-authoring.pages-resources.app-settings-modal.button.save',
    defaultMessage: '저장',
  },
  saving: {
    id: 'course-authoring.pages-resources.app-settings-modal.button.saving',
    defaultMessage: '저장중',
  },
  saved: {
    id: 'course-authoring.pages-resources.app-settings-modal.button.saved',
    defaultMessage: '저장완료',
  },
  retry: {
    id: 'course-authoring.pages-resources.app-settings-modal.button.retry',
    defaultMessage: '재시도',
  },
  enabled: {
    id: 'course-authoring.pages-resources.app-settings-modal.badge.enabled',
    defaultMessage: '활성화됨',
  },
  disabled: {
    id: 'course-authoring.pages-resources.app-settings-modal.badge.disabled',
    defaultMessage: '비활성화됨',
  },
  errorSavingTitle: {
    id: 'course-authoring.pages-resources.app-settings-modal.save-error.title',
    defaultMessage: '변경 사항을 적용할 수 없습니다.',
  },
  errorSavingMessage: {
    id: 'course-authoring.pages-resources.app-settings-modal.save-error.message',
    defaultMessage: '입력 내용을 확인하고 다시 시도해 주세요.',
  },
});

export default messages;
