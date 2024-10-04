import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'course-authoring.course-outline.highlights-modal.title',
    defaultMessage: '{title}의 공지사항',
  },
  description: {
    id: 'course-authoring.course-outline.highlights-modal.description',
    defaultMessage: '이 학습에 대해 학습자가 받는 이메일 메시지에 포함할 키워드 3-5개를 입력합니다(250자 이내). 자세한 내용과 이메일 템플릿의 예는 {documentation}(을)를 참조하세요.',
  },
  documentationLink: {
    id: 'course-authoring.course-outline.highlights-modal.documentation-link',
    defaultMessage: '문서',
  },
  highlight: {
    id: 'course-authoring.course-outline.highlights-modal.highlight',
    defaultMessage: '주요키워드 {index}',
  },
  cancelButton: {
    id: 'course-authoring.course-outline.highlights-modal.button.cancel',
    defaultMessage: '취소',
  },
  saveButton: {
    id: 'course-authoring.course-outline.highlights-modal.button.save',
    defaultMessage: '저장',
  },
});

export default messages;
