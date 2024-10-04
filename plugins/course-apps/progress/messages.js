import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'course-authoring.pages-resources.progress.heading',
    defaultMessage: '진행률 표시 설정',
  },
  enableProgressLabel: {
    id: 'course-authoring.pages-resources.progress.enable-progress.label',
    defaultMessage: '진행률',
  },
  enableProgressHelp: {
    id: 'course-authoring.pages-resources.progress.enable-progress.help',
    defaultMessage: `학생들이 채점된 과제를 진행하면서 점수가 진행탭 아래에 나타납니다. 진행탭에는 강의의 모든 채점된 과제 차트가 포함되어 있으며, 모든 과제와 점수 목록이 아래에 있습니다.`,
  },
  enableProgressLink: {
    id: 'course-authoring.pages-resources.progress.enable-progress.link',
    defaultMessage: '진행률에 대해 자세히 보기',
  },
  enableGraphLabel: {
    id: 'course-authoring.pages-resources.progress.enable-graph.label',
    defaultMessage: '진행율 그래프 활성화',
  },
  enableGraphHelp: {
    id: 'course-authoring.pages-resources.progress.enable-graph.help',
    defaultMessage: '학생들이 진행 상황을 그래프로 볼수 있도록 활성화 합니다.',
  },
});

export default messages;
