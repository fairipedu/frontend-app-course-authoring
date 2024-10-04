import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headingTitle: {
    id: 'course-authoring.course-outline.headingTitle',
    defaultMessage: '강의 개요',
  },
  headingSubtitle: {
    id: 'course-authoring.course-outline.subTitle',
    defaultMessage: 'Content',
  },
  alertSuccessTitle: {
    id: 'course-authoring.course-outline.reindex.alert.success.title',
    defaultMessage: '강의색인',
  },
  alertSuccessDescription: {
    id: 'course-authoring.course-outline.reindex.alert.success.description',
    defaultMessage: '강의 색인 재생성이 완료되었습니다.',
  },
  alertSuccessAriaLabelledby: {
    id: 'course-authoring.course-outline.reindex.alert.success.aria.labelledby',
    defaultMessage: 'alert-confirmation-title',
  },
  alertSuccessAriaDescribedby: {
    id: 'course-authoring.course-outline.reindex.alert.success.aria.describedby',
    defaultMessage: 'alert-confirmation-description',
  },
  newSectionButton: {
    id: 'course-authoring.course-outline.section-list.button.new-section',
    defaultMessage: '새 학습활동',
  },
  exportTagsCreatingToastMessage: {
    id: 'course-authoring.course-outline.export-tags.toast.creating.message',
    defaultMessage: '잠시만 기다려주세요. 강의 태그 내보내기 파일 생성 중입니다.',
    description: 'In progress message in toast when exporting tags of a course',
  },
  exportTagsSuccessToastMessage: {
    id: 'course-authoring.course-outline.export-tags.toast.success.message',
    defaultMessage: '강의 태그를 성공적으로 내보냈습니다',
    description: 'Success message in toast when exporting tags of a course',
  },
  exportTagsErrorToastMessage: {
    id: 'course-authoring.course-outline.export-tags.toast.error.message',
    defaultMessage: '파일을 생성하는 중 오류가 발생했습니다.',
    description: 'Error message in toast when exporting tags of a course',
  },
});

export default messages;
