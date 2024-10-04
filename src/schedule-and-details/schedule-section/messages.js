import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  scheduleTitle: {
    id: 'course-authoring.schedule.schedule-section.title',
    defaultMessage: '강의 일정',
  },
  scheduleDescription: {
    id: 'course-authoring.schedule.schedule-section.description',
    defaultMessage: '강의를 볼 수 있는 날짜를 설정합니다.',
  },
  scheduleCourseStartDateLabel: {
    id: 'course-authoring.schedule.schedule-section.course-start.date.label',
    defaultMessage: '강의 시작일',
  },
  scheduleCourseStartDateHelpText: {
    id: 'course-authoring.schedule.schedule-section.course-start.date.help-text',
    defaultMessage: '강의가 시작되는 첫째 날',
  },
  scheduleCourseStartTimeLabel: {
    id: 'course-authoring.schedule.schedule-section.course-start.time.label',
    defaultMessage: '강의 시작시간',
  },
  scheduleCourseEndDateLabel: {
    id: 'course-authoring.schedule.schedule-section.course-end.date.label',
    defaultMessage: '강의 종료일',
  },
  scheduleCourseEndDateHelpText: {
    id: 'course-authoring.schedule.schedule-section.course-end.date.help-text',
    defaultMessage: '강의가 종료되는 날짜',
  },
  scheduleCourseEndTimeLabel: {
    id: 'course-authoring.schedule.schedule-section.course-end.time.label',
    defaultMessage: '강의 종료시간',
  },
  scheduleEnrollmentStartDateLabel: {
    id: 'course-authoring.schedule.schedule-section.enrollment-start.date.label',
    defaultMessage: '등록 시작일',
  },
  scheduleEnrollmentStartDateHelpText: {
    id: 'course-authoring.schedule.schedule-section.enrollment-start.help-text',
    defaultMessage: '학생이 강의 등록할 수 있는 첫째 날',
  },
  scheduleEnrollmentStartTimeLabel: {
    id: 'course-authoring.schedule.schedule-section.enrollment-start.time.label',
    defaultMessage: '등록 시작시간',
  },
  scheduleEnrollmentEndDateLabel: {
    id: 'course-authoring.schedule.schedule-section.enrollment-end.date.label',
    defaultMessage: '등록 종료일',
  },
  scheduleEnrollmentEndDateHelpText: {
    id: 'course-authoring.schedule.schedule-section.enrollment-end.date.help-text',
    defaultMessage: '학생이 강의 등록할 수 있는 마지막 날',
  },
  scheduleEnrollmentEndDateRestrictedHelpText: {
    id: 'course-authoring.schedule.schedule-section.enrollment-end.date.restricted.help-text',
    defaultMessage: '이 설정을 업데이트하려면 {platformName} 관리자에게 문의하세요.',
  },
  scheduleEnrollmentEndTimeLabel: {
    id: 'course-authoring.schedule.schedule-section.enrollment-end.time.label',
    defaultMessage: '등록 마감시간',
  },
  scheduleUpgradeDeadlineDateLabel: {
    id: 'course-authoring.schedule.schedule-section.upgrade-deadline.date.label',
    defaultMessage: '마감일 수정',
  },
  scheduleUpgradeDeadlineDateHelpText: {
    id: 'course-authoring.schedule.schedule-section.upgrade-deadline.date.help-text',
    defaultMessage: '마지막날에 등록한 학생들은 자동 확인 처리 할 수 있습니다. 이 설정을 변경하려면 {platformName} 관리자에게 문의하세요..',
  },
  scheduleUpgradeDeadlineTimeLabel: {
    id: 'course-authoring.schedule.schedule-section.upgrade-deadline.time.label',
    defaultMessage: '마감시간 수정',
  },
});

export default messages;
