import { Pagination, Stack, PaginationItem } from '@mui/material';
import { useHistory, useLocation } from 'react-router-dom';

import styles from './FilmPagination.module.scss';

export default function FilmPagination({ pageTotal, page = 1, setPage }) {
  const locate = useLocation();
  const history = useHistory();

  const hendlerSubmit = (e, value) => {
    setPage(value);
    const searchText = new URLSearchParams(locate.search).get('query');
    let searchQuery = searchText ? `query=${searchText}` : '';
    const searchPage = value ? `page=${value}` : '';
    searchQuery = searchQuery
      ? searchPage && `${searchQuery}&${searchPage}`
      : searchPage && `${searchPage}`;
    history.push({ ...locate, search: `${searchQuery}` });
  };

  return (
    <>
      <Stack spacing={2}>
        <Pagination
          className={styles.pagination}
          count={pageTotal}
          page={Number(page)}
          color={'primary'}
          onChange={hendlerSubmit}
        >
          <PaginationItem selected={true} /> ;
        </Pagination>
      </Stack>
      ;
    </>
  );
}
