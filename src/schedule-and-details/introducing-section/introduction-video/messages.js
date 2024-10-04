import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  courseIntroductionVideoLabel: {
    id: 'course-authoring.schedule-section.introducing.introduction-video.label',
    defaultMessage: '강의 소개 영상',
  },
  courseIntroductionVideoDelete: {
    id: 'course-authoring.schedule-section.introducing.introduction-video.delete',
    defaultMessage: '등록된 비디오 삭제',
  },
  courseIntroductionVideoHelpText: {
    id: 'course-authoring.schedule-section.introducing.introduction-video.help-text',
    defaultMessage: 'YouTube 비디오 ID를 입력하세요(파라메터를 제외한 id 값만 입력하세요)',
  },
  courseIntroductionVideoPlaceholder: {
    id: 'course-authoring.schedule-section.introducing.introduction-video.placeholder',
    defaultMessage: 'YouTube 비디오 ID',
  },
});

export default messages;
