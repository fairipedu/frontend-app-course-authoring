import classNames from 'classnames';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Badge, Card } from '@openedx/paragon';
import PropTypes from 'prop-types';
import React from 'react';
import messages from '../messages';
import { useIsDesktop } from '../../utils';
import PageSettingButton from './PageSettingButton';
import './PageCard.scss';

const CoursePageShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
  legacyLink: PropTypes.string,
  allowedOperations: PropTypes.shape({
    enable: PropTypes.bool,
    configure: PropTypes.bool,
  }),
});

export { CoursePageShape };

const PageCard = ({
  page,
  settingButton,
}) => {
  const { formatMessage } = useIntl();
  const isDesktop = useIsDesktop();

  const SettingButton = settingButton || <PageSettingButton {...page} />;
  const koPageName = {"Progress":"진행율", "Discussion":"토론", "Notes":"노트", "Wiki":"위키", "Calculator":"계산기", "Live":"화상강의", "Textbooks":"교과서", "Custom pages":"페이지정의"}
  const koPageDescription = {
    "Keep learners engaged and on track throughout the course.":"강의를 진행하는 동안 학습자들의 참여와 학습목표의 달성을 도와주세요.", 
    "Encourage participation and engagement in your course with discussions.":"토론을 통해 강의에 대한 참여를 독려합니다.", 
    "Allow learners to highlight passages and make notes right in the course.":"학습자가 강의중에 바로 구절을 강조 표시하고 메모를 할 수 있도록 합니다.", 
    "Enable learners to access, and collaborate on course-related information.":"학습자가 강의관련 정보에 접근하고 협업할 수 있도록 합니다.", 
    "Provide an in-course calculator for simple and complex calculations.":"간단한 계산, 혹은 복잡한 계산을 위해 계산기를 강의 내에서 사용가능합니다.", 
    "Enable in-platform video conferencing by configuring live":"화상으로 강의를 진행할 수 있습니다.", 
    "Create and manage a library of course readings, textbooks, and chapters.":"교과서, 챕터, 학습 자료의 라이브러리를 만들고 관리합니다.", 
    "Provide additional course content and resources with custom pages":"사용자 정의 페이지로 추가 강의 콘텐츠 및 리소스 제공"
  }
  return (
    <Card
      className={classNames('justify-content-between', {
        'desktop-card': isDesktop,
        'mobile-card': !isDesktop,
      })}
    >
      <Card.Header
        title={koPageName[page.name]}
        subtitle={page.enabled && (
          <Badge variant="success" className="mt-1">
            {formatMessage(messages.enabled)}
          </Badge>
        )}
        actions={<div className="mt-1">{SettingButton}</div>}
        size="sm"
      />
      <Card.Body>
        <Card.Section>
          {koPageDescription[page.description]}
        </Card.Section>
      </Card.Body>
    </Card>
  );
};

PageCard.defaultProps = {
  settingButton: null,
};

PageCard.propTypes = {
  page: CoursePageShape.isRequired,
  settingButton: PropTypes.node,
};

export default PageCard;
