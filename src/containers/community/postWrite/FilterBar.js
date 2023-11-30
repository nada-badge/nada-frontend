import { Frame } from '../../../styles/Community/PostWriteStyle';
import { MainCategoryButton } from './MainCategoryButton';
import { OpenModalButton } from '../../../components/community/PostWrite/openModalButton';

export const FilterBar = () => {
  <Frame>
    <MainCategoryButton />
    <OpenModalButton content="region" />
    <OpenModalButton content="field" />
    <OpenModalButton content="category" />
  </Frame>;
};
