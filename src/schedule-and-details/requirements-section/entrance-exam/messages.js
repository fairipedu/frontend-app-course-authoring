import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  requirementsEntrance: {
    id: 'course-authoring.schedule-section.requirements.entrance.label',
    defaultMessage: '수강 전 시험',
  },
  requirementsEntranceCollapseTitle: {
    id: 'course-authoring.schedule-section.requirements.entrance.collapse.title',
    defaultMessage: '강의를 시작하기 전에 학생들에게 시험에 합격하도록 요구합니다.',
  },
  requirementsEntranceCollapseParagraph: {
    id: 'course-authoring.schedule-section.requirements.entrance.collapse.paragraph',
    defaultMessage: '이제 {hyperlink}에서 수강 전 시험을 볼수 있습니다.',
  },
  requirementsEntranceCollapseHyperlink: {
    id: 'course-authoring.schedule-section.requirements.entrance.collapse.hyperlink',
    defaultMessage: '강의 개요',
  },
});

export default messages;
