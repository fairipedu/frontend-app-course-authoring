import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  rerunCourseDescription: {
    id: 'course-authoring.course-rerun.form.description',
    defaultMessage: '강의복제를 위해 식별 정보를 제공하세요. 강의복제시 원본 강좌는 어떠한 영향도 받지 않습니다. {strong}',
  },
  rerunCourseDescriptionStrong: {
    id: 'course-authoring.course-rerun.form.description.strong',
    defaultMessage: '참고 : 학과, 강의 아이디, 강의분기로 강의를 식별합니다.',
  },
});

export default messages;
