import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  courseDisplayNameLabel: {
    id: 'course-authoring.create-or-rerun-course.display-name.label',
    defaultMessage: '강의명',
  },
  courseDisplayNamePlaceholder: {
    id: 'course-authoring.create-or-rerun-course.display-name.placeholder',
    defaultMessage: '예) 알고리즘 및 실습',
  },
  courseDisplayNameCreateHelpText: {
    id: 'course-authoring.create-or-rerun-course.create.display-name.help-text',
    defaultMessage: '강의명은 페이지에 노출됩니다. 강의명은 변경되지 않습니다.',
  },
  courseDisplayNameRerunHelpText: {
    id: 'course-authoring.create-or-rerun-course.rerun.display-name.help-text',
    defaultMessage: '강의명',
  },
  courseOrgLabel: {
    id: 'course-authoring.create-or-rerun-course.org.label',
    defaultMessage: '단체아이디',
  },
  courseOrgPlaceholder: {
    id: 'course-authoring.create-or-rerun-course.org.placeholder',
    defaultMessage: '예) 페어립대학교',
  },
  courseOrgNoOptions: {
    id: 'course-authoring.create-or-rerun-course.org.no-options',
    defaultMessage: '옵션없음',
  },
  courseOrgCreateHelpText: {
    id: 'course-authoring.create-or-rerun-course.create.org.help-text',
    defaultMessage: '강의가 속할 단체아이디 {strong} 단체아이디는 변경할 수 없지만 고급설정에서 표시될 이름을 설정할 수 있습니다.',
  },
  courseOrgRerunHelpText: {
    id: 'course-authoring.create-or-rerun-course.rerun.org.help-text',
    defaultMessage: '새 강의가 속하는 단체아이디입니다. {strong}',
  },
  courseNoteNoSpaceAllowedStrong: {
    id: 'course-authoring.create-or-rerun-course.no-space-allowed.strong',
    defaultMessage: '참고 : 공백이나 특수 문자는 허용되지 않습니다.',
  },
  courseNoteOrgNameIsPartStrong: {
    id: 'course-authoring.create-or-rerun-course.org.help-text.strong',
    defaultMessage: '참고 : 단체아이디는 강의 URL의 일부로 사용됩니다.',
  },
  courseNumberLabel: {
    id: 'course-authoring.create-or-rerun-course.number.label',
    defaultMessage: '강의아이디',
  },
  courseNumberPlaceholder: {
    id: 'course-authoring.create-or-rerun-course.number.placeholder',
    defaultMessage: '예) CS101',
  },
  courseNumberCreateHelpText: {
    id: 'course-authoring.create-or-rerun-course.create.number.help-text',
    defaultMessage: '단체에서 강의를 식별하는 고유한 아이디입니다. {strong}',
  },
  courseNumberRerunHelpText: {
    id: 'course-authoring.create-or-rerun-course.rerun.number.help-text',
    defaultMessage: '단체에서 새 강의를 식별하는 고유한 아이디 입니다. (이 아이디는 원래 강의아이디와 동일하며 변경 할 수 없습니다.)',
  },
  courseNotePartCourseURLRequireStrong: {
    id: 'course-authoring.create-or-rerun-course.number.help-text.strong',
    defaultMessage: '참고 : 강의 URL의 일부이므로 공백이나 특수 문자가 허용되지 않으며 변경할 수 없습니다.',
  },
  courseRunLabel: {
    id: 'course-authoring.create-or-rerun-course.run.label',
    defaultMessage: '강의기간',
  },
  courseRunPlaceholder: {
    id: 'course-authoring.create-or-rerun-course.run.placeholder',
    defaultMessage: '예) 2024_T1',
  },
  courseRunCreateHelpText: {
    id: 'course-authoring.create-or-rerun-course.create.run.help-text',
    defaultMessage: '강의가 진행될 기간. {strong}',
  },
  courseRunRerunHelpText: {
    id: 'course-authoring.create-or-rerun-course.create.rerun.help-text',
    defaultMessage: '새 강의가 진행되는 기간입니다. (이 값은 원래 강의기간과 다른경우가 많습니다.){strong}',
  },
  defaultPlaceholder: {
    id: 'course-authoring.create-or-rerun-course.default-placeholder',
    defaultMessage: '표시명',
  },
  createButton: {
    id: 'course-authoring.create-or-rerun-course.create.button.create',
    defaultMessage: '생성',
  },
  rerunCreateButton: {
    id: 'course-authoring.create-or-rerun-course.rerun.button.create',
    defaultMessage: '복제',
  },
  creatingButton: {
    id: 'course-authoring.create-or-rerun-course.button.creating',
    defaultMessage: '생성중',
  },
  rerunningCreateButton: {
    id: 'course-authoring.create-or-rerun-course.rerun.button.rerunning',
    defaultMessage: '복제 처리 중',
  },
  cancelButton: {
    id: 'course-authoring.create-or-rerun-course.button.cancel',
    defaultMessage: '취소',
  },
  requiredFieldError: {
    id: 'course-authoring.create-or-rerun-course.required.error',
    defaultMessage: '필수 입력값입니다.',
  },
  disallowedCharsError: {
    id: 'course-authoring.create-or-rerun-course.disallowed-chars.error',
    defaultMessage: '공백이나 특수 문자를 사용 할 수 없습니다.',
  },
  noSpaceError: {
    id: 'course-authoring.create-or-rerun-course.no-space.error',
    defaultMessage: '공백을 사용할 수 없습니다.',
  },
  alertErrorExistsAriaLabelledBy: {
    id: 'course-authoring.create-or-rerun-course.error.already-exists.labelledBy',
    defaultMessage: 'alert-already-exists-title',
  },
  alertErrorExistsAriaDescribedBy: {
    id: 'course-authoring.create-or-rerun-course.error.already-exists.aria.describedBy',
    defaultMessage: 'alert-confirmation-description',
  },
});

export default messages;
