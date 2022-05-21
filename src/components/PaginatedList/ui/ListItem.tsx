import React from 'react';
import { Todo } from '../../../models'
import style from '../styles/ListItem.module.scss';
import done from '../../../assets/images/done.png';
import undone from '../../../assets/images/close-button.svg';
interface IListItemProps {
  item: Todo;
};

const ListItem: React.FC<IListItemProps> = (props) => {
  const { item: { title, userId, completed } } = props;

  return (
    <>
      <div className={style['first-col-container']}>
        <div className={style['first-col']}>{userId}</div>
      </div>
      <div className={style['second-col-container']}>
        {title}
      </div>
      <div className={style['third-col-container']}>
        <div className={style['third-col']}><img src={completed ? done : undone} alt="Done"/></div>
      </div>
    </>
  )
};

export default ListItem;