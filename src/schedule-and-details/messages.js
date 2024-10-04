import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headingTitle: {
    id: 'course-authoring.schedule.heading.title',
    defaultMessage: ' 일정 및 상세',
  },
  headingSubtitle: {
    id: 'course-authoring.schedule.heading.subtitle',
    defaultMessage: 'Settings',
  },
  buttonSaveText: {
    id: 'course-authoring.schedule.alert.button.save',
    defaultMessage: '변경사항저장',
  },
  buttonSavingText: {
    id: 'course-authoring.schedule.alert.button.saving',
    defaultMessage: '저장',
  },
  buttonCancelText: {
    id: 'course-authoring.schedule.alert.button.cancel',
    defaultMessage: '취소',
  },
  alertWarningAriaLabelledby: {
    id: 'course-authoring.schedule.alert.warning.aria.labelledby',
    defaultMessage: 'notification-warning-title',
  },
  alertWarningAriaDescribedby: {
    id: 'course-authoring.schedule.alert.warning.aria.describedby',
    defaultMessage: 'notification-warning-description',
  },
  alertWarning: {
    id: 'course-authoring.schedule.alert.warning',
    defaultMessage: '변경 사항이 있습니다',
  },
  alertWarningOnSaveWithError: {
    id: 'course-authoring.schedule.alert.warning.save.error',
    defaultMessage: '변경 사항이 있지만 몇가지 오류가 있습니다.',
  },
  alertWarningDescriptions: {
    id: 'course-authoring.schedule.alert.warning.descriptions',
    defaultMessage: '진행 상황을 저장하기 전까지 변경 사항이 적용되지 않습니다.',
  },
  alertWarningDescriptionsOnSaveWithError: {
    id: 'course-authoring.schedule.alert.warning.save.descriptions.error',
    defaultMessage: '먼저 이 페이지의 오류를 해결한 다음 진행 상황을 저장하십시오.',
  },
  alertSuccessAriaLabelledby: {
    id: 'course-authoring.schedule.alert.success.aria.labelledby',
    defaultMessage: 'alert-confirmation-title',
  },
  alertSuccessAriaDescribedby: {
    id: 'course-authoring.schedule.alert.success.aria.describedby',
    defaultMessage: 'alert-confirmation-description',
  },
  alertSuccess: {
    id: 'course-authoring.schedule.alert.success',
    defaultMessage: '변경 사항이 저장되었습니다.',
  },
  alertLoadFailAriaLabelledby: {
    id: 'course-authoring.schedule.alert.load.fail.aria.labelledby',
    defaultMessage: 'alert-confirmation-title',
  },
  alertLoadFailAriaDescribedby: {
    id: 'course-authoring.schedule.alert.load.fail.aria.describedby',
    defaultMessage: 'alert-confirmation-description',
  },
  alertLoadFail: {
    id: 'course-authoring.schedule.alert.load.fail',
    defaultMessage: '설정을 로드하는 동안 오류가 발생했습니다.',
  },
  alertFailAriaLabelledby: {
    id: 'course-authoring.schedule.alert.fail.aria.labelledby',
    defaultMessage: 'alert-confirmation-title',
  },
  alertFailAriaDescribedby: {
    id: 'course-authoring.schedule.alert.fail.aria.describedby',
    defaultMessage: 'alert-confirmation-description',
  },
  alertFail: {
    id: 'course-authoring.schedule.alert.fail',
    defaultMessage: '변경 사항을 저장하는 동안 오류가 발생했습니다.',
  },
  errorMessage1: {
    id: 'course-authoring.schedule.schedule-section.error-message-1',
    defaultMessage: '인증서 사용 가능 날짜가 설정된 경우 인증서 표시 동작은 \'과정 종료 날짜 이후의 날짜\'여야 합니다.',
  },
  errorMessage2: {
    id: 'course-authoring.schedule.schedule-section.error-message-2',
    defaultMessage: '수강신청 종료일은 강의 종료일 이후일 수 없습니다.',
  },
  errorMessage3: {
    id: 'course-authoring.schedule.schedule-section.error-message-3',
    defaultMessage: '수강신청 시작일은 수강신청 종료일 이후일 수 없습니다.',
  },
  errorMessage4: {
    id: 'course-authoring.schedule.schedule-section.error-message-4',
    defaultMessage: '강의 시작 날짜는 등록 시작 날짜보다 나중이어야 합니다.',
  },
  errorMessage5: {
    id: 'course-authoring.schedule.schedule-section.error-message-5',
    defaultMessage: '강의 종료 날짜는 강의 시작 날짜보다 나중이어야 합니다.',
  },
  errorMessage6: {
    id: 'course-authoring.schedule.schedule-section.error-message-6',
    defaultMessage: '인증서 사용 가능 날짜는 강의 종료 날짜보다 나중이어야 합니다.',
  },
  errorMessage7: {
    id: 'course-authoring.schedule.schedule-section.error-message-7',
    defaultMessage: '강의에는 지정된 시작 날짜가 있어야 합니다.',
  },
  errorMessage8: {
    id: 'course-authoring.schedule.schedule-section.error-message-8',
    defaultMessage: '%(min)s ~ %(max)s 사이의 정수를 입력하세요.',
  },
});

export default messages;
