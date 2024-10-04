import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headingTitle: {
    id: 'course-authoring.course-updates.header.title',
    defaultMessage: '강의소개페이지 알림관리',
    description: 'Title for page',
  },
  headingSubtitle: {
    id: 'course-authoring.course-updates.header.subtitle',
    defaultMessage: '내용',
    description: 'Subtitle for page',
  },
  sectionInfo: {
    id: 'course-authoring.course-updates.section-info',
    defaultMessage: '강의소개페이지에 알림이 표시됩니다. 학생들에게 공지사항이나 시험일정 등을 공지하거나, 토론 및 질의 응답을 표시할 수 있습니다.',
    description: 'Message describing the use of course updates in a course',
  },
  newUpdateButton: {
    id: 'course-authoring.course-updates.actions.new-update',
    defaultMessage: '새 알림등록',
    description: 'Button label for header button to add a new course update',
  },
  firstUpdateButton: {
    id: 'course-authoring.course-updates.actions.first-update',
    defaultMessage: '새 알림등록',
    description: 'Button label for button to add first course update',
  },
  noCourseUpdates: {
    id: 'course-authoring.course-updates.actions.first-update-message',
    defaultMessage: '아직 이 강의에 알림을 등록하지 않았습니다.',
    description: 'Message to notify user that they do not have any existing course updates',
  },
  loadingUpdatesErrorTitle: {
    id: 'course-authoring.course-updates.error.loading-updates.title',
    defaultMessage: '강의 알림 수정에 실패하였습니다.',
    description: 'Alert title for loading updates error alert',
  },
  loadingUpdatesErrorDescription: {
    id: 'course-authoring.course-updates.error.loading-updates.description',
    defaultMessage: '{courseId}에 대한 강의 알림을 불러오는데 실패하였습니다. 나중에 다시 시도 해 주세요.',
    description: 'Alert body message for loading course update errors',
  },
  loadingHandoutsErrorTitle: {
    id: 'course-authoring.course-updates.error.loading-handouts.title',
    defaultMessage: '강의 ',
    description: 'Alert title for loading handouts error alert',
  },
  loadingHandoutsErrorDescription: {
    id: 'course-authoring.course-updates.error.loading-handouts.description',
    defaultMessage: 'Failed to load course updates for {courseId}. Please try again later.',
    description: 'Alert body message for loading course handout errors',
  },
  savingUpdatesErrorTitle: {
    id: 'course-authoring.course-updates.error.saving-updates.title',
    defaultMessage: 'Failed to save course update',
    description: 'Alert title for saving updates error alert',
  },
  savingUpdatesErrorDescription: {
    id: 'course-authoring.course-updates.error.saving-updates.description',
    defaultMessage: 'Failed to save recent changes to course update. Please try again later.',
    description: 'Alert body message for saving edits to course update errors',
  },
  savingNewUpdateErrorAlertDescription: {
    id: 'course-authoring.course-updates.error.saving-new-updates.description',
    defaultMessage: 'Failed to save new course update. Please try again later.',
    description: 'Alert body message for saving new course update errors',
  },
  savingHandoutsErrorTitle: {
    id: 'course-authoring.course-updates.error.saving-handouts.title',
    defaultMessage: 'Failed to save course handouts',
    description: 'Alert title for saving handouts error alert',
  },
  savingHandoutsErrorDescription: {
    id: 'course-authoring.course-updates.error.saving-handouts.description',
    defaultMessage: 'Failed to save recent changes to course handouts. Please try again later.',
    description: 'Alert body message for saving course handout errors',
  },
  deletingUpdatesErrorTitle: {
    id: 'course-authoring.course-updates.error.deleting-updates.title',
    defaultMessage: 'Failed to delete course update',
    description: 'Alert title for deleting update error alert',
  },
  deletingUpdatesErrorDescription: {
    id: 'course-authoring.course-updates.error.deleting-updates.description',
    defaultMessage: 'Failed to delete selected course update. Please try again later.',
    description: 'Alert body message for deleting course update errors',
  },
});

export default messages;
