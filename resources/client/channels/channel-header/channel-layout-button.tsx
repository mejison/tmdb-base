import {Channel} from '@common/channels/channel';
import {Trans} from '@common/i18n/trans';
import React from 'react';
import {
  Menu,
  MenuItem,
  MenuTrigger,
} from '@common/ui/navigation/menu/menu-trigger';
import {useChannelLayouts} from '@app/channels/channel-header/use-channel-layouts';
import {Button} from '@common/ui/buttons/button';
import {useIsMobileMediaQuery} from '@common/utils/hooks/is-mobile-media-query';
import {IconButton} from '@common/ui/buttons/icon-button';
import {GridViewIcon} from '@common/icons/material/GridView';

interface Props {
  channel: Channel;
}
export function ChannelLayoutButton({channel}: Props) {
  const isMobile = useIsMobileMediaQuery();
  const {selectedLayout, setSelectedLayout, availableLayouts} =
    useChannelLayouts(channel);

  if (availableLayouts?.length < 2) {
    return null;
  }

  const layoutConfig = availableLayouts?.find(
    method => method.key === selectedLayout
  );

  return (
    <MenuTrigger
      selectionMode="single"
      showCheckmark
      selectedValue={selectedLayout}
      onSelectionChange={newValue => setSelectedLayout(newValue as string)}
    >
      {isMobile ? (
        <IconButton>{layoutConfig?.icon || <GridViewIcon />}</IconButton>
      ) : (
        <Button startIcon={layoutConfig?.icon || <GridViewIcon />}>
          {layoutConfig?.label ? (
            <Trans {...layoutConfig.label} />
          ) : (
            <Trans message="Popularity" />
          )}
        </Button>
      )}
      <Menu>
        {availableLayouts?.map(method => (
          <MenuItem key={method.key} value={method.key}>
            <Trans {...method.label} />
          </MenuItem>
        ))}
      </Menu>
    </MenuTrigger>
  );
}
