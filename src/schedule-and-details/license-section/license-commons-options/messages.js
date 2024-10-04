import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  licenseCreativeOptionsLabel: {
    id: 'course-authoring.schedule-section.license.creative-commons.options.label',
    defaultMessage: '창작물에 대한 옵션',
  },
  licenseCreativeOptionsHelpText: {
    id: 'course-authoring.schedule-section.license.creative-commons.options.help-text',
    defaultMessage: '창작물의 라이선스는 다음과 같은 옵션을 사용할 수 있습니다.',
  },
  licenseCreativeOptionBYLabel: {
    id: 'course-authoring.schedule-section.license.creative-commons.option.BY.label',
    defaultMessage: '권리',
  },
  licenseCreativeOptionBYDescription: {
    id: 'course-authoring.schedule-section.license.creative-commons.option.BY.description',
    defaultMessage: '다른 사람이 저작권이 있는 저작물을 복사, 배포, 표시 및 수행할 수 있도록 허용하되, 요청한 방식으로 저작권을 인정하는 경우에만 허용합니다. 현재 이 옵션은 필수 입니다.',
  },
  licenseCreativeOptionNCLabel: {
    id: 'course-authoring.schedule-section.license.creative-commons.option.NC.label',
    defaultMessage: '비상업적',
  },
  licenseCreativeOptionNCDescription: {
    id: 'course-authoring.schedule-section.license.creative-commons.option.NC.description',
    defaultMessage: '비상업적인 목적으로만 다른 사람들이 당신의 저작물과 그것을 기반으로 한 파생 저작물을 복사, 배포, 전시 및 수행할 수 있도록 허용합니다.',
  },
  licenseCreativeOptionNDLabel: {
    id: 'course-authoring.schedule-section.license.creative-commons.option.ND.label',
    defaultMessage: '재가공금지',
  },
  licenseCreativeOptionNDDescription: {
    id: 'course-authoring.schedule-section.license.creative-commons.option.ND.description',
    defaultMessage: '다른 사람들이 당신의 작품을 복사, 배포, 표시 및 수행할 수 있도록 허용하고, 그것을 기반으로 한 파생 작품은 허용하지 않습니다. 이 옵션은 "재배포"와 호환되지 않습니다.',
  },
  licenseCreativeOptionSALabel: {
    id: 'course-authoring.schedule-section.license.creative-commons.option.SA.label',
    defaultMessage: '재배포',
  },
  licenseCreativeOptionSADescription: {
    id: 'course-authoring.schedule-section.license.creative-commons.option.SA.description',
    defaultMessage: '다른 사람이 당신의 작업을 지배하는 라이센스와 동일한 라이센스 하에서만 파생 작업을 배포할 수 있도록 허용합니다. 이 옵션은 "재가공금지"와 호환되지 않습니다.',
  },
});

export default messages;
