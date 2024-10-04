/* eslint-disable react/require-default-props */
import React from 'react';
import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { StudioHeader } from '@edx/frontend-component-header';
import { useToggle, AvatarButton, Badge, Dropdown } from '@openedx/paragon';
import { generatePath, useHref } from 'react-router-dom';

import { SearchModal } from '../search-modal';
import { getContentMenuItems, getSettingMenuItems, getToolsMenuItems } from './utils';
import messages from './messages';
import { useCourseOutline } from '../course-outline/hooks';

import AuthenticatedUserDropdown from './AuthenticatedUserDropdown';
import TabOverview from './TabOverview';
import TabGroup from './TabGroup';
import TabCheck from './TabCheck';

interface HeaderProps {
  tabName?: string,
  contextId?: string,
  number?: string,
  org?: string,
  title?: string,
  isHiddenMainMenu?: boolean,
  isLibrary?: boolean,
}

const Header = ({
  tabName = '',
  contextId = '',
  org = '',
  number = '',
  title = '',
  isHiddenMainMenu = false,
  isLibrary = false,
}: HeaderProps) => {
  const intl = useIntl();
  
  const libraryHref = useHref('/library/:libraryId');

  const [isShowSearchModalOpen, openSearchModal, closeSearchModal] = useToggle(false);

  const studioBaseUrl = getConfig().STUDIO_BASE_URL;
  const meiliSearchEnabled = [true, 'true'].includes(getConfig().MEILISEARCH_ENABLED);
  const mainMenuDropdowns = !isLibrary ? [
    {
      id: `${intl.formatMessage(messages['header.links.content'])}-dropdown-menu`,
      buttonTitle: intl.formatMessage(messages['header.links.content']),
      items: getContentMenuItems({ studioBaseUrl, courseId: contextId, intl }),
    },
    {
      id: `${intl.formatMessage(messages['header.links.settings'])}-dropdown-menu`,
      buttonTitle: intl.formatMessage(messages['header.links.settings']),
      items: getSettingMenuItems({ studioBaseUrl, courseId: contextId, intl }),
    },
    {
      id: `${intl.formatMessage(messages['header.links.tools'])}-dropdown-menu`,
      buttonTitle: intl.formatMessage(messages['header.links.tools']),
      items: getToolsMenuItems({ studioBaseUrl, courseId: contextId, intl }),
    },
  ] : [];
  const outlineLink = !isLibrary
    ? `${studioBaseUrl}/course/${contextId}`
    : generatePath(libraryHref, { libraryId: contextId });
  //const courseId = contextId;
  
  return (
    <>
      <AuthenticatedUserDropdown />
      
      <h1 className="h1-title">{ title }</h1>
      { tabName == "tab-overview" && (<TabOverview />) }
      { tabName == "tab-group" && (<TabGroup />) }
      { tabName == "tab-check" && (<TabCheck />) }
    </>
  );
};
/*
<StudioHeader
        org={org}
        number={number}
        title={title}
        isHiddenMainMenu={isHiddenMainMenu}
        mainMenuDropdowns={mainMenuDropdowns}
        outlineLink={outlineLink}
        searchButtonAction={meiliSearchEnabled ? openSearchModal : undefined}
      />
      { meiliSearchEnabled && (
        <SearchModal
          isOpen={isShowSearchModalOpen}
          courseId={isLibrary ? undefined : contextId}
          onClose={closeSearchModal}
        />
      )}
*/
export default Header;
