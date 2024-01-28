import useModal from '../../Modal/modules/useModal';
import { Overlap, Img, Textwrapper } from '../styles/Header';

//각 요소에 대한 구현
const HeaderTypeConfig = (navigate, status, pageNameStatus, position) => {
  const { openModal } = useModal();
  // const openMenu = () => {
  //   openModal({
  //     type: 'MenuModal',
  //     contentType: '글',
  //     content: ['Copy', 'Update', 'Delete', 'Report'],
  //     position: position,
  //   });
  // };

  const Config = {
    Texts: <Textwrapper>{pageNameStatus}</Textwrapper>,
    Back: (
      <Overlap>
        <Img onClick={() => navigate(-1)} className="Back" />
      </Overlap>
    ),
    Menu: (
      <Overlap>
        <Img className="Menu" />
      </Overlap>
    ),
    Bell: (
      <Overlap>
        <Img className="Bell" />
      </Overlap>
    ),
    BellWMenu: (
      <Overlap>
        <Img className="BellWMenu" />
      </Overlap>
    ),
    Logo: (
      <Overlap>
        <Img className="Logo" />
      </Overlap>
    ),
    Post: (
      <Overlap>
        <button className="Post" type="submit" form={position}>
          완료
        </button>
      </Overlap>
    ),
  };

  return Config[status.status];
};

export default HeaderTypeConfig;
