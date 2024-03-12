import { useEffect } from 'react';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { useDispatch } from 'react-redux';
import { BadgeItem } from '../../Badge/components/BadgeItem';
import { LinkWrapper } from '../components/Content';
import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';
import { RightArrowSvg } from '../../icon/Login/RightArrowSvg';
import CameraSvg from '../icon/CameraSvg';
import useGetUserInfo from '../modules/queries/useGetUserInfo';
import usePostImage from '../../modules/queries/usePostImage';
import { useState } from 'react';

const LinkContent = styled(LinkWrapper)`
  ${applyFontStyles({ font: 'subtitle-01' })}

  &:hover {
    cursor: ${({ isHover }) => (isHover ? 'pointer' : 'auto')};
  }

  & > .rightBox {
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
    // URL 텍스트 매핑 상수
    const URL_TEXT_MAPPING = {
      닉네임: 'userName',
      '휴대폰 번호': 'phoneNumber',
      비밀번호: 'password',
      단체이름: 'groupName',
      단체종류: 'teamType',
      대표자: 'represent',
    };

    // 링크 대상 URL 설정
    const linkTarget =
      text !== '이메일' ? `/myPage/profile/edit/${URL_TEXT_MAPPING[text]}` : '';

    return (
      <LinkContent to={linkTarget} isHover={text !== '이메일'}>
        <div>{text}</div>
        <div className="rightBox">
          <div className="info">{version}</div>
          {/* '이메일'인 경우 링크 화살표 표시하지 않음 */}
          {text !== '이메일' && <RightArrowSvg width={10} height={19} />}
        </div>
      </LinkContent>
    );
  };

  const { data: info } = useGetUserInfo();
  const { mutateAsync } = usePostImage();

  const [imgSrc, setImg] = useState('');

  const saveImgFile = async (e) => {
    const files = Array.from(e.target.files);
    const result = await mutateAsync({
      section: 'profileImageUrl',
      files: files,
    });
    setImg(result);
  };

  return (
    <div className="pageContainer">
      <div style={{ width: '100%' }}>
        <div style={{ margin: '0 auto', width: 'fit-content' }}>
          <div style={{ position: 'relative', top: '120px', left: '70px' }}>
            <label htmlFor="upload-photo">
              <CameraSvg />
            </label>
            <input
              style={{ display: 'none' }}
              multiple
              type="file"
              accept="image/*"
              id="upload-photo"
              name="img"
              onChange={saveImgFile}
            ></input>
          </div>
          <BadgeItem
            cards={{
              img_src: imgSrc,
              badgeType: '개인회원',
            }}
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
        {info && info.userType === 1 && (
          <>
            <ContentWrapper text="이메일" version={info.email} />
            <ContentWrapper text="닉네임" version={info.profile.userName} />
            <ContentWrapper
              text="휴대폰 번호"
              version={info.profile.phoneNumber}
            />
            <ContentWrapper text="비밀번호" version={'*******'} />
          </>
        )}

        {info && info.userType === 2 && (
          <>
            <ContentWrapper text="이메일" version={info.email} />
            <ContentWrapper text="단체이름" version={'myspec'} />
            <ContentWrapper text="단체종류" version={'교내동아리'} />
            <ContentWrapper text="대표자" version={'김나다'} />
            <ContentWrapper
              text="휴대폰 번호"
              version={info.profile.phoneNumber}
            />
            <ContentWrapper text="비밀번호" version={'*******'} />
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
