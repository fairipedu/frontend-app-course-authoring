import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  requirementsTitle: {
    id: 'course-authoring.schedule-section.requirements.title',
    defaultMessage: '요구사항',
  },
  requirementsDescription: {
    id: 'course-authoring.schedule-section.requirements.description',
    defaultMessage: '이 강의를 수료하기 위한 요구사항',
  },
  timepickerLabel: {
    id: 'course-authoring.schedule-section.requirements.timepicker.label',
    defaultMessage: '주별 수강 시간',
  },
  timepickerHelpText: {
    id: 'course-authoring.schedule-section.requirements.timepicker.help-text',
    defaultMessage: '한주동안 강의를 수강해야 하는 시간',
  },
  dropdownLabel: {
    id: 'course-authoring.schedule-section.requirements.dropdown.label',
    defaultMessage: '선행학습',
  },
  dropdownHelpText: {
    id: 'course-authoring.schedule-section.requirements.dropdown.help-text',
    defaultMessage: '이 강의를 수강하기 전에 선행학습되어야 하는 강의',
  },
  dropdownEmptyText: {
    id: 'course-authoring.schedule-section.requirements.dropdown.empty-text',
    defaultMessage: '없음',
  },
});

export default messages;
