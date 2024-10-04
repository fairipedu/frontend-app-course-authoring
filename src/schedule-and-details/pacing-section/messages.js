import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  pacingTitle: {
    id: 'course-authoring.schedule.pacing.title',
    defaultMessage: '코스형태',
  },
  pacingDescription: {
    id: 'course-authoring.schedule.pacing.description',
    defaultMessage: '강의 형태를 설정하세요.',
  },
  pacingRestriction: {
    id: 'course-authoring.schedule.pacing.restriction',
    defaultMessage: '강의가 시작된 후에는 강좌 진행 속도를 변경할 수 없습니다.',
  },
  pacingTypeInstructorLabel: {
    id: 'course-authoring.schedule.pacing.radio.instructor.label',
    defaultMessage: '교수자주도학습',
  },
  pacingTypeInstructorDescription: {
    id: 'course-authoring.schedule.pacing.radio.instructor.description',
    defaultMessage:
      '교수자주도학습은 강의 작성자가 설정한 진도에 따라 진행됩니다. 코스 콘텐츠의 공개 날짜와 과제 마감일을 구성 할 수 있습니다.',
  },
  pacingTypeSelfLabel: {
    id: 'course-authoring.schedule.pacing.radio.self-paced.label',
    defaultMessage: '자기주도학습',
  },
  pacingTypeSelfDescription: {
    id: 'course-authoring.schedule.pacing.radio.self-paced.description',
    defaultMessage: '자기주도학습은 학습자의 등록 날짜와 학습자가 설정한 예상 강의 기간을 기준으로 제안된 과제 또는 시험 마감일을 제공합니다. 이 강의에서는 학습자가 필요에 따라 과제 날짜를 유연하게 수정할 수 있습니다.',
  },
});

export default messages;
