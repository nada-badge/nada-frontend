/** SelectButton  region, field, category 모달 내 개별요소에 대한 버튼 */
import SelectButtonBase from '../common/SelectButtonBase';
import { selectAllConfig } from '../common/AreaFieldCategoryData';
import { filterSelector } from '../../modules/filter';

export const SelectButton = ({ text }) => {
  return (
    <SelectButtonBase
      text={text}
      formKey="subButtonSelect"
      contentType={filterSelector('buttonSelect', 'filter')}
      selectAllConfig={selectAllConfig(
        filterSelector('buttonSelect', 'filter'),
      )}
    />
  );
};
