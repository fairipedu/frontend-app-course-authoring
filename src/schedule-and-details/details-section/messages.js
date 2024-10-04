import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  detailsTitle: {
    id: 'course-authoring.schedule-section.details.title',
    defaultMessage: '강의 상세정보',
  },
  detailsDescription: {
    id: 'course-authoring.schedule-section.details.description',
    defaultMessage: '귀하의 강의에 대한 유용한 정보를 제공하세요.',
  },
  dropdownLabel: {
    id: 'course-authoring.schedule-section.details.dropdown.label',
    defaultMessage: '강의 언어',
  },
  dropdownHelpText: {
    id: 'course-authoring.schedule-section.details.dropdown.help-text',
    defaultMessage: '여기서 강의 언어를 식별합니다. 이는 사용자가 특정 언어로 가르치는 강의를 찾는 데 도움이 됩니다. 또한 대량 이메일에서 \'보낸사람:\'항목을 지역화 하는 데에도 사용됩니다.',
  },
  dropdownEmpty: {
    id: 'course-authoring.schedule-section.details.dropdown.empty',
    defaultMessage: '언어 선택',
  },
});

export default messages;
