import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  connectionError: {
    id: 'authoring.alert.error.connection',
    defaultMessage: '이 페이지를 로드하는 동안 기술적인 오류가 발생했습니다. 일시적인 문제일 수 있으니 잠시 후 다시 시도해 주세요. 문제가 지속되면 {supportLink}로 이동하여 도움을 받으세요',
    description: 'Error message shown to users when there is a connectivity issue with the server.',
  },
  supportText: {
    id: 'authoring.alert.support.text',
    defaultMessage: '고객지원',
  },
});

export default messages;
