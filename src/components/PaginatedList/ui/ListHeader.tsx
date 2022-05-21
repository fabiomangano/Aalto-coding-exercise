import React from 'react';
import useMediaQuery from '../../../hooks/useMediaQuery';
import style from '../styles/ListHeader.module.scss';


const ListHeader = () => {
  const isMobile = useMediaQuery('max-width: 440px');

  return (
    <>
      <div className={style['first-col-container']}>
        <div className={style['first-col']}>{isMobile ? 'USER' : 'USER ID'}</div>
      </div>

      <div className={style['second-col-container']}>
        <div className={style['second-col']}>TITLE</div>
      </div>

      <div className={style['third-col-container']}>
        <div className={style['third-col']}>COMPLETED</div>
      </div>
    </>
  )
}

export default React.memo(ListHeader);