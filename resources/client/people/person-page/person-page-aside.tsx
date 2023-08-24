import {
  DetailItem,
  TitlePageAsideLayout,
} from '@app/titles/pages/title-page/title-page-aside-layout';
import {PersonPoster} from '@app/people/person-poster/person-poster';
import {Trans} from '@common/i18n/trans';
import {FormattedDate} from '@common/i18n/formatted-date';
import React from 'react';
import {PersonAge} from '@app/people/person-age';
import {GetPersonResponse} from '@app/people/requests/use-person';
import {ShareMenuTrigger} from '@app/sharing/share-menu-trigger';
import {Button} from '@common/ui/buttons/button';
import {ShareIcon} from '@common/icons/material/Share';
import {Person} from '@app/titles/models/person';
import {getPersonLink} from '@app/people/person-link';

interface Props {
  data: GetPersonResponse;
}
export function PersonPageAside({data: {person, total_credits_count}}: Props) {
  const age = (
    <Trans
      message=":count years old"
      values={{count: <PersonAge person={person} />}}
    />
  );

  return (
    <TitlePageAsideLayout
      poster={
        <div>
          <PersonPoster person={person} size="w-140 md:w-full" srcSize="lg" />
          <ShareButton person={person} />
        </div>
      }
    >
      <dl className="mt-12 md:mt-24">
        {person.known_for && (
          <DetailItem label={<Trans message="Known for" />}>
            {person.known_for}
          </DetailItem>
        )}
        {person.gender && (
          <DetailItem label={<Trans message="Gender" />}>
            <span className="capitalize">{person.gender}</span>
          </DetailItem>
        )}
        {total_credits_count ? (
          <DetailItem label={<Trans message="Known credits" />}>
            {total_credits_count}
          </DetailItem>
        ) : null}
        {person.birth_date ? (
          <DetailItem label={<Trans message="Born" />}>
            <FormattedDate date={person.birth_date} />{' '}
            {!person.death_date && age}
          </DetailItem>
        ) : null}
        {person.birth_place ? (
          <DetailItem label={<Trans message="Birthplace" />}>
            {person.birth_place}
          </DetailItem>
        ) : null}
        {person.death_date ? (
          <DetailItem label={<Trans message="Died" />}>
            <FormattedDate date={person.death_date} /> ({age})
          </DetailItem>
        ) : null}
      </dl>
    </TitlePageAsideLayout>
  );
}

interface ShareButtonProps {
  person: Person;
}
function ShareButton({person}: ShareButtonProps) {
  const link = getPersonLink(person, {absolute: true});
  return (
    <ShareMenuTrigger link={link}>
      <Button
        variant="outline"
        color="primary"
        startIcon={<ShareIcon />}
        className="mt-14 md:min-h-40 md:w-full"
      >
        <Trans message="Share" />
      </Button>
    </ShareMenuTrigger>
  );
}
