import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  configurationErrorTitle: {
    id: 'course-authoring.course-outline.page-alerts.configurationErrorTitle',
    defaultMessage: '본 강의는 복제된 강의로 일부 구성 설정이 필요합니다.',
    description: 'Configuration error alert title in course outline.',
  },
  configurationErrorText: {
    id: 'course-authoring.course-outline.page-alerts.configurationErrorText',
    defaultMessage: '현재 강의 콘텐츠가 표시되지 않으며 등록된 학습자가 없습니다. 강의 시작 날짜를 포함한 모든 날짜를 검토하고 재설정하십시오.; 강의 팀을 구성합니다; 날짜가 지난 자료에 대한 강의 업데이트 및 기타 자산을 검토합니다.;토론과 위키를 사용할수 있습니다.',
    description: 'Configuration error alert body in course outline.',
  },
  discussionNotificationText: {
    id: 'course-authoring.course-outline.page-alerts.discussionNotificationText',
    defaultMessage: '이 강의는 {platformName} 토론 포럼의 업그레이드 버전을 사용하고 있습니다. 토론 사이드바를 표시하기 위해 토론 xBlock은 더 이상 학습자에게 표시되지 않습니다.',
    description: 'Alert text for informing users about upgraded version of discussions forum.',
  },
  discussionNotificationLearnMore: {
    id: 'course-authoring.course-outline.page-alerts.discussionNotificationLearnMore',
    defaultMessage: '자세히 알아보기',
    description: 'Learn more link in upgraded discussion notification alert',
  },
  discussionNotificationFeedback: {
    id: 'course-authoring.course-outline.page-alerts.discussionNotificationFeedback',
    defaultMessage: '피드백 공유',
    description: 'Share feedback link in upgraded discussion notification alert',
  },
  deprecationWarningTitle: {
    id: 'course-authoring.course-outline.page-alerts.deprecationWarningTitle',
    defaultMessage: '이 과정에서는 더 이상 지원되지 않는 기능을 사용합니다.',
    description: 'Alert title informing users about deprecated features being used in course that are not supported.',
  },
  deprecationWarningBlocksText: {
    id: 'course-authoring.course-outline.page-alerts.deprecationWarningBlocksText',
    defaultMessage: '다음 구성 요소를 삭제하거나 교체해야 합니다.',
    description: 'Alert body text informing users about deprecated components which needs to be removed or replaced.',
  },
  deprecationWarningDeprecatedBlockText: {
    id: 'course-authoring.course-outline.page-alerts.deprecationWarningDeprecatedBlockText',
    defaultMessage: '오류를 방지하려면 {platformName}에서는 과정 고급 설정에서 지원되지 않는 기능을 제거할 것을 적극 권장합니다. ',
    description: 'Alert body text informing users about how to remove deprecated components/modules.',
  },
  advancedSettingLinkText: {
    id: 'course-authoring.course-outline.page-alerts.advancedSettingLinkText',
    defaultMessage: '고급설정',
    description: 'Advanced settings page link text',
  },
  deprecatedComponentName: {
    id: 'course-authoring.course-outline.page-alerts.deprecatedComponentName',
    defaultMessage: '더 이상 사용되지 않는 구성요소',
    description: 'Default name for a deprecated component.',
  },
  proctoringErrorTitle: {
    id: 'course-authoring.course-outline.page-alerts.proctoringErrorTitle',
    defaultMessage: '이 강의에는 불완전하거나 유효하지 않은 감독관 시험 설정이 있습니다.',
    description: 'Proctoring settings errors alert title.',
  },
  proctoringErrorText: {
    id: 'course-authoring.course-outline.page-alerts.proctoringErrorText',
    defaultMessage: '이러한 설정을 변경하려면 {hyperlink}로 이동하세요.',
    description: 'Proctoring settings errors alert body text.',
  },
  proctoredSettingsLinkText: {
    id: 'course-authoring.course-outline.page-alerts.proctoredSettingsLinkText',
    defaultMessage: '감독관 시험 설정 페이지',
    description: 'Proctoring settings page link text.',
  },
  alertFailedGeneric: {
    id: 'course-authoring.course-outline.page-alert.generic-error.description',
    defaultMessage: '{actionName} {type}을(를) 수행할 수 없습니다. 다시 시도해 주세요.',
    description: 'Generic alert text.',
  },
  newFileAlertTitle: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.new-files.title',
    defaultMessage: '새로운 {newFilesLen, plural, one {file} other {files}} 파일에 추가되었습니다.',
    description: 'This title is displayed when new files are successfully imported into the course after pasting an unit.',
  },
  newFileAlertDesc: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.new-files.description',
    defaultMessage: '다음 필수 {newFilesLen, plural, one {file was} other {files were}}을(를) 이 과정으로 가져왔습니다: {newFilesStr}',
    description: 'This description is displayed when new files are successfully imported into the course after pasting an unit',
  },
  newFileAlertAction: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.new-files.action',
    defaultMessage: '파일 보기',
    description: 'This label is used as the text for a button that allows the user to view the imported files.',
  },
  errorFileAlertTitle: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.error-files.title',
    defaultMessage: '일부 오류가 발생했습니다.',
    description: 'This title is displayed when there are errors during the import of files while pasting an unit.',
  },
  errorFileAlertDesc: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.error-files.description',
    defaultMessage: '다음 필수 {errorFilesLen, plural, one {file} other {files}}을 과정에 추가할 수 없습니다: {errorFilesStr}',
    description: 'This description is displayed when there are errors during the import of files and lists the files that could not be imported.',
  },
  conflictingFileAlertTitle: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.conflicting-files.title',
    defaultMessage: '{conflictingFilesLen, plural, one {a file} other {files}}을(를) 수동으로 업데이트해야 할 수도 있습니다.',
    description: 'This alert title is displayed when files being imported conflict with existing files in the course.',
  },
  conflictingFileAlertDesc: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.new-conflicting.description',
    defaultMessage: '다음 {conflictingFilesLen, plural, one {file} other {files}}이(가) 이 강의에 이미 존재하지만 붙여넣은 구성 요소에서 사용하는 버전과 일치하지 않습니다: {conflictingFilesStr}',
    description: 'This alert description is displayed when files being imported conflict with existing files in the course and advises the user to update the conflicting files manually.',
  },
  serverErrorAlert: {
    id: 'course-authoring.course-outline.page-alert.server-error.title',
    defaultMessage: 'Studio 서버에 오류가 발생했습니다.',
    description: 'Generic server error alert title.',
  },
  serverErrorAlertBody: {
    id: 'course-authoring.course-outline.page-alert.server-error.body',
    defaultMessage: ' 강의관리서버에서 오류가 발생하여 페이지를 로드할 수 없습니다. 잠시 후에 다시 시도해주세요. 오류를 관리자에게 전달했으며 이 오류를 가능한 한 빨리 해결하기 위해 노력하고 있습니다.',
    description: 'Generic server error alert title.',
  },
  networkErrorAlert: {
    id: 'course-authoring.course-outline.page-alert.network-error.title',
    defaultMessage: '네트워크 에러',
    description: 'Generic network error alert.',
  },
});

export default messages;
