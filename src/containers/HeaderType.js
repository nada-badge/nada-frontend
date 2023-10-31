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
    post: false,
  },
  {
    id: 'bellMenu',
    logo: false,
    back: false,
    text: true,
    bell: false, //원래는 true지만 menu에 딸려 bell을 출력할 것이기 때문에 false로 지정
    menu: true,
    post: false,
  },
  {
    id: 'logo',
    logo: true,
    back: false,
    text: false,
    bell: true,
    menu: false,
    post: false,
  },
  {
    id: 'back',
    logo: false,
    back: true,
    text: true,
    bell: false,
    menu: false,
    post: false,
  },
  {
    id: 'bell',
    logo: false,
    back: false,
    text: true,
    bell: true,
    menu: false,
    post: false,
  },
  {
    id: 'backPost',
    logo: false,
    back: true,
    text: true,
    bell: false,
    menu: false,
    post: true,
  },
];

//각 요소에 대한 구현
export function HeaderTypeConfig(navigate, status, pageNameStatus) {
  const Config = {
    Texts: <Textwrapper>{pageNameStatus}</Textwrapper>,
    Back: (
      <Overlap>
        <Img onClick={() => navigate(-1)} className="Back" />
      </Overlap>
    ),
    Menu: (
      <Overlap>
        <Img className="BellWMenu" />
        <Img className="Menu" />
      </Overlap>
    ),
    Bell: (
      <Overlap>
        <Img className="Bell" />
      </Overlap>
    ),
    Logo: (
      <Overlap>
        <Img className="Logo" />
      </Overlap>
    ),
    Post: (
      <Overlap>
        <div className="Post">완료</div>
      </Overlap>
    ),
  };

  return Config[status.status];
}
