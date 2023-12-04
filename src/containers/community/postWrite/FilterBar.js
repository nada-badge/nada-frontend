import { Frame } from '../../../styles/mommunity/PostWriteStyle';
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
