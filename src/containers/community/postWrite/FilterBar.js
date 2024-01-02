/** FilterBar 글작성 페이지에 filter를 출력하는 컴테이너  */
import { Frame } from '../../../styles/community/PostWriteStyle';
import { MainCategoryButton } from './MainCategoryButton';
import { OpenModalButton } from '../../../components/community/PostWrite/openModalButton';
import { postWriteSelector } from '../../../modules/community/postWrite';
import { useSelector } from 'react-redux';

export const FilterBar = () => {
  const mainCategory = useSelector(
    postWriteSelector('postWriteSubmit', 'mainCategory'),
  );

  //mainCategory가 "자유"일 시 OpenModalButton 버튼을 출럭하지 않음
  return (
    <Frame>
      <MainCategoryButton />
      {mainCategory !== '자유' && (
        <>
          <OpenModalButton content="region" />
          <OpenModalButton content="field" />
          <OpenModalButton content="category" />
        </>
      )}
    </Frame>
  );
};
