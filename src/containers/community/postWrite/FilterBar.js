/** FilterBar 글작성 페이지에 filter를 출력하는 컴테이너  */
import { Frame } from '../../../styles/community/PostWriteStyle';
import { MainCategoryButton } from './MainCategoryButton';
import { OpenModalButton } from '../../../components/community/PostWrite/openModalButton';

export const FilterBar = () => {
  return (
    <Frame>
      <MainCategoryButton />
      <OpenModalButton content="region" />
      <OpenModalButton content="field" />
      <OpenModalButton content="category" />
    </Frame>
  );
};
