/*HeaderType 상단바의 유형을 관리함. 
유형에 대하여는 컴플루언스-개발-프론트엔드개발-상단하단바관련 문서를 참고해주세요.*/
import { Overlap, Img, Textwrapper } from '../styles/Header';

//상단 상태값에서 상단 요소의 존재여부 값
export const HeaderType = [
  {
    id: 'backBell',
    logo: false,
    back: true,
    text: true,
    bell: true,
    menu: false,
    BellWMenu: false,
    post: false,
  },
  {
    id: 'bellMenu',
    logo: false,
    back: false,
    text: true,
    bell: false,
    BellWMenu: true, // 해당 bell은 menu 옆에 있는 bell이기 때문에 bellWMenu가 true
    menu: true,
    post: false,
  },
  {
    id: 'backMenu',
    logo: false,
    back: true,
    text: true,
    bell: false,
    menu: true,
    BellWMenu: false,
    post: false,
  },
  {
    id: 'backBellMenu',
    logo: false,
    back: true,
    text: true,
    bell: false,
    menu: true,
    BellWMenu: true,
    post: false,
  },
  {
    id: 'logo',
    logo: true,
    back: false,
    text: false,
    bell: true,
    menu: false,
    BellWMenu: false,
    post: false,
  },
  {
    id: 'back',
    logo: false,
    back: true,
    text: true,
    bell: false,
    menu: false,
    BellWMenu: false,
    post: false,
  },
  {
    id: 'bell',
    logo: false,
    back: false,
    text: true,
    bell: true,
    menu: false,
    BellWMenu: false,
    post: false,
  },
  {
    id: 'backPost',
    logo: false,
    back: true,
    text: true,
    bell: false,
    menu: false,
    BellWMenu: false,
    post: true,
  },
];

//각 요소에 대한 구현
export const HeaderTypeConfig = (navigate, status, pageNameStatus) => {
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
        <button className="Post" type="submit" form="community">
          완료
        </button>
      </Overlap>
    ),
  };

  return Config[status.status];
};
