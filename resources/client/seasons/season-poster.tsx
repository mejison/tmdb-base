import defaultImage from '../titles/title-poster/default-title-poster.jpg';
import {useTrans} from '@common/i18n/use-trans';
import {message} from '@common/i18n/message';
import clsx from 'clsx';
import {ImageSize, useImageSrc} from '@app/images/use-image-src';
import {Season} from '@app/titles/models/season';
import {SeasonLink} from '@app/seasons/season-link';
import {Title} from '@app/titles/models/title';
import {Link} from 'react-router-dom';

interface Props {
  title: Title;
  season: Season;
  className?: string;
  size?: string;
  lazy?: boolean;
  srcSize?: ImageSize;
  link?: string;
}
export function SeasonPoster({
  title,
  season,
  className,
  size = 'w-full',
  srcSize,
  lazy = true,
  link,
}: Props) {
  const {trans} = useTrans();
  const src = useImageSrc(getSeasonImage(season, title), {size: srcSize});

  const linkChildren = (
    <img
      className={clsx(
        className,
        size,
        'object-cover bg-fg-base/4 aspect-poster rounded'
      )}
      draggable={false}
      loading={lazy ? 'lazy' : 'eager'}
      src={src}
      alt={trans(
        message('Poster for season :number of :title', {
          values: {number: season.number, title: title.name},
        })
      )}
    />
  );

  return link ? (
    <Link to={link} className="flex-shrink-0">
      {linkChildren}
    </Link>
  ) : (
    <SeasonLink
      title={title}
      seasonNumber={season.number}
      className="flex-shrink-0"
    >
      {linkChildren}
    </SeasonLink>
  );
}

export function getSeasonImage(season: Season, title: Title): string {
  return season.poster || title.poster || defaultImage;
}
