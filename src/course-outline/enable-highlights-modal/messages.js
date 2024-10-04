import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'course-authoring.course-outline.status-bar.modal.title',
    defaultMessage: '강의의 키워드 메일 사용',
  },
  description_1: {
    id: 'course-authoring.course-outline.status-bar.modal.description-1',
    defaultMessage: '강의에 대한 키워드 메일을 활성화하면 학습자는 키워드가 있는 각 학습에 대한 전자 메일 메시지를 자동으로 받습니다. 주요 키워드를 보내기 시작한 후에는 비활성화 할 수 없습니다.',
  },
  description_2: {
    id: 'course-authoring.course-outline.status-bar.modal.description-2',
    defaultMessage: '키워드 메일을 활성화 하시겠습니까?',
  },
  link: {
    id: 'course-authoring.course-outline.status-bar.modal.link',
    defaultMessage: '자세히보기',
  },
  cancelButton: {
    id: 'course-authoring.course-outline.status-bar.modal.cancelButton',
    defaultMessage: '취소',
  },
  submitButton: {
    id: 'course-authoring.course-outline.status-bar.modal.submitButton',
    defaultMessage: '활성화',
  },
});

export default messages;
