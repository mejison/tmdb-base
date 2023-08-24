import {Navbar} from '@common/ui/navigation/navbar/navbar';
import {SearchAutocomplete} from '@app/search/search-autocomplete';
import clsx from 'clsx';
import {useIsMobileMediaQuery} from '@common/utils/hooks/is-mobile-media-query';
import {IconButton} from '@common/ui/buttons/icon-button';
import {SearchIcon} from '@common/icons/material/Search';
import {Link} from 'react-router-dom';

interface Props {
  position?: 'fixed' | 'relative';
}
export function MainNavbar({position = 'relative'}: Props) {
  const isMobile = useIsMobileMediaQuery();
  return (
    <Navbar
      size="md"
      menuPosition="primary"
      className={clsx(position, 'z-40 w-full flex-shrink-0')}
      border="border-none"
      alwaysDarkMode
    >
      {isMobile ? (
        <IconButton elementType={Link} to="/search">
          <SearchIcon />
        </IconButton>
      ) : (
        <SearchAutocomplete />
      )}
    </Navbar>
  );
}
