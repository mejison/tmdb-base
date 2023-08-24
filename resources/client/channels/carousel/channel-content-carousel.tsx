import React, {Fragment} from 'react';
import {ChannelContentProps} from '@app/channels/channel-content';
import {ChannelHeader} from '@app/channels/channel-header/channel-header';
import {ChannelContentGridItem} from '@app/channels/content-grid/channel-content-grid-item';
import {useCarousel} from '@app/channels/carousel/use-carousel';
import clsx from 'clsx';
import {ContentGridProps} from '@app/channels/content-grid/content-grid-layout';
import {IconButton} from '@common/ui/buttons/icon-button';
import {KeyboardArrowLeftIcon} from '@common/icons/material/KeyboardArrowLeft';
import {KeyboardArrowRightIcon} from '@common/icons/material/KeyboardArrowRight';
import {useIsMobileMediaQuery} from '@common/utils/hooks/is-mobile-media-query';

interface Props extends ChannelContentProps {
  variant?: ContentGridProps['variant'];
}
export function ChannelContentCarousel(props: Props) {
  const isMobile = useIsMobileMediaQuery();
  const {channel, variant} = props;
  const {
    scrollContainerRef,
    canScrollForward,
    canScrollBackward,
    scrollToPreviousPage,
    scrollToNextPage,
    containerClassName,
    itemClassName,
  } = useCarousel();

  let gridClassName =
    variant === 'landscape'
      ? 'content-grid-landscape'
      : 'content-grid-portrait';

  if (isMobile && channel.content?.data[0].model_type === 'newsArticle') {
    gridClassName = '';
  }

  return (
    <div>
      <ChannelHeader
        {...props}
        actions={
          <Fragment>
            <IconButton
              disabled={!canScrollBackward}
              onClick={() => scrollToPreviousPage()}
            >
              <KeyboardArrowLeftIcon />
            </IconButton>
            <IconButton
              disabled={!canScrollForward}
              onClick={() => scrollToNextPage()}
            >
              <KeyboardArrowRightIcon />
            </IconButton>
          </Fragment>
        }
      />
      <div
        ref={scrollContainerRef}
        className={clsx(containerClassName, gridClassName)}
      >
        {channel.content?.data.map(item => (
          <div className={itemClassName} key={`${item.id}-${item.model_type}`}>
            <ChannelContentGridItem item={item} variant={variant} />
          </div>
        ))}
      </div>
    </div>
  );
}
