import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  introducingTitle: {
    id: 'course-authoring.schedule-section.introducing.title',
    defaultMessage: '강의 소개',
  },
  introducingDescription: {
    id: 'course-authoring.schedule-section.introducing.description',
    defaultMessage: '학습자 에게 보여질 강의 소개',
  },
  courseShortDescriptionLabel: {
    id: 'course-authoring.schedule-section.introducing.course-short-description.label',
    defaultMessage: '강의에 대한 간략 설명',
  },
  courseShortDescriptionAriaLabel: {
    id: 'course-authoring.schedule-section.introducing.course-short-description.aria-label',
    defaultMessage: '강의 간략 설명 보기',
  },
  courseShortDescriptionHelpText: {
    id: 'course-authoring.schedule-section.introducing.course-short-description.help-text',
    defaultMessage: '학생들이 코스 이름 위로 마우스를 가져갈 때 강의 리스트 페이지에 나타납니다. 최대 150자로 제한됩니다.',
  },
  courseOverviewLabel: {
    id: 'course-authoring.schedule-section.introducing.course-overview.label',
    defaultMessage: '강의 개요',
  },
  courseOverviewHelpText: {
    id: 'course-authoring.schedule-section.introducing.course-overview.help-text',
    defaultMessage: '{hyperlink}에 사용되는 소개, 선행학습, FAQ (HTML태그 형식 사용)',
  },
  courseAboutHyperlink: {
    id: 'course-authoring.schedule-section.introducing.course-about.hyperlink',
    defaultMessage: '귀하의 강의 요약 페이지',
  },
  courseAboutSidebarLabel: {
    id: 'course-authoring.schedule-section.introducing.course-about-sidebar.label',
    defaultMessage: '사이드바에 나타낼 강의 소개(HTML)',
  },
  courseAboutSidebarHelpText: {
    id: 'course-authoring.schedule-section.introducing.course-about-sidebar.help-text',
    defaultMessage: '{hyperlink}에 대한 사용자 정의 사이드바 콘텐츠 (HTML태그 형식 사용)',
  },
  courseCardImageLabel: {
    id: 'course-authoring.schedule-section.introducing.course-card-image.label',
    defaultMessage: '강의 리스트 이미지',
  },
  courseCardImageIdentifierText: {
    id: 'course-authoring.schedule-section.introducing.course-card-image.identifier-text',
    defaultMessage: '강의 이미지',
  },
  courseBannerImageLabel: {
    id: 'course-authoring.schedule-section.introducing.course-banner-image.label',
    defaultMessage: '강의 배너 이미지',
  },
  courseBannerImageInsertText: {
    id: 'course-authoring.schedule-section.introducing.course-banner-image.insert-banner',
    defaultMessage: '배너 이미지',
  },
  courseVideoThumbnailLabel: {
    id: 'course-authoring.schedule-section.introducing.video-thumbnail-image.label',
    defaultMessage: '강의 비디오 썸네일 이미지',
  },
  courseVideoThumbnailInsertText: {
    id: 'course-authoring.schedule-section.introducing.video-thumbnail-image.insert-card',
    defaultMessage: '비디오 썸네일 이미지',
  },
});

export default messages;
