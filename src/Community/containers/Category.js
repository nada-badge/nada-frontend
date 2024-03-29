/** Category 메인페이지에서 메인카테고리를 관리하는 컨테이너 */
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import {
  filterSelector,
  changeField,
  initializeForm,
  initializeSub,
} from '../../modules/redux/filter';
import { Categorylist, Wrapper } from '../styles/CategoryStyle';

const Category = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(filterSelector('buttonSelect', 'maincategory'));

  const onClick = (text) => {
    if (!(isOpen === text)) {
      dispatch(
        changeField({ form: 'buttonSelect', key: 'maincategory', value: text }),
      );
      dispatch(initializeSub());
      dispatch(initializeForm({ form: 'buttonSelect', key: 'filter' }));
    }
  };

  const categoryButton = (text) => {
    const isActive = text === isOpen;
    return (
      <Wrapper
        className={classNames({ isActive })}
        onClick={() => onClick(text)}
      >
        <div className={classNames('Text', { isActive })}>{text}</div>
      </Wrapper>
    );
  };

  return (
    <div>
      <Categorylist>
        {categoryButton('모집')}
        {categoryButton('홍보')}
        {categoryButton('자유')}
      </Categorylist>
    </div>
  );
};

export default Category;
