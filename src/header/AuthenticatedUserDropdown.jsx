import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import { AvatarButton, Badge, Dropdown } from '@openedx/paragon';


export const AuthenticatedUserDropdown = () => {
  const { formatMessage } = useIntl();
  const { authenticatedUser } = React.useContext(AppContext);
  

  return (
    authenticatedUser && (
      <Dropdown className="user-dropdown pr4">
        <Dropdown.Toggle
          as={AvatarButton}
          src={authenticatedUser.profileImage}
          id="user"
          variant="light"
        >
          <span data-hj-suppress className="d-md-inline">
            {authenticatedUser.username}
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-right">          
          <Dropdown.Item href={getConfig().STUDIO_BASE_URL}>
            강의관리 대시보드
          </Dropdown.Item>
          <Dropdown.Item href={`${getConfig().ACCOUNT_PROFILE_URL}/u/${authenticatedUser.username}`}>
            프로필설정
          </Dropdown.Item>
          <Dropdown.Item href={getConfig().ACCOUNT_SETTINGS_URL}>
            개인정보수정
          </Dropdown.Item>
          
          <Dropdown.Divider />
          <Dropdown.Item href={getConfig().LOGOUT_URL}>
            로그아웃
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  );
};

AuthenticatedUserDropdown.propTypes = {};

export default AuthenticatedUserDropdown;
