import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import style from './Pagination.module.scss';

const Pagination: React.FC<ReactPaginateProps> = (props) => {
  const renderOnZeroPageCount = () => null;

  return (
    <ReactPaginate
      breakClassName={style['space']}
      containerClassName={style['pagination']}
      pageClassName={style['page']}
      activeClassName={style['active']}
      pageLinkClassName={style['link']}
      renderOnZeroPageCount={renderOnZeroPageCount}
      {...props}
    />
  )
};

export default Pagination;
