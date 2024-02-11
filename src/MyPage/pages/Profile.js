import { useEffect } from 'react';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { useDispatch } from 'react-redux';
import { BadgeItem } from '../../Badge/components/BadgeItem';
import { LinkWrapper } from '../components/Content';
import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';
import { RightArrowSvg } from '../../icon/Login/RightArrowSvg';

const LinkContent = styled(LinkWrapper)`
  ${applyFontStyles({ font: 'subtitle-01' })}

  & >  .rightBox {
    display: flex;
    align-items: center;
    gap: 12px;
    ${applyFontStyles({ font: 'body-01', color: '#686868' })};
  }
`;

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'back',
        text: '프로필설정',
        isShowBottom: false,
      }),
    );
  }, []);

  const ContentWrapper = ({ text, version }) => {
    return (
      <LinkContent>
        <div>{text}</div>
        <div className="rightBox">
          <div className="info">{version}</div>
          <RightArrowSvg width={10} />
        </div>
      </LinkContent>
    );
  };

  return (
    <div className="pageContainer">
      <div style={{ width: '100%' }}>
        <div style={{ margin: '0 auto', width: 'fit-content' }}>
          <BadgeItem
            cards={{ img_src: '', badgeType: '개인회원', title: '김나다' }}
            $layout_style={{
              textAlign: 'center',
              width: '100px',
              heigth: '100px',
              borderRadius: '100px',
            }}
          />
        </div>
      </div>
      <div>
        <ContentWrapper text="이메일" version={'nada@gmail.com'} />
        <ContentWrapper text="닉네임" version={'김나다'} />
        <ContentWrapper text="휴대폰 번호" version={'010-1234-5678'} />
        <ContentWrapper text="비밀번호" version={'*******'} />
      </div>
    </div>
  );
};

export default Profile;
