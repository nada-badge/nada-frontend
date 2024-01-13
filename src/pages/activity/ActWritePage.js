/** ActWritePage 글 작성을 진행하는 페이지 */
import styled, { css } from 'styled-components';
import '../../styles/PageCommon.scss';
import { ImgAddSvg } from '../../icon/Activity/ImgAddSvg';
import { Title } from '../../containers/community/postWrite/Title';
import { FilterBar } from '../../containers/community/postWrite/FilterBar';
import { Content } from '../../containers/community/postWrite/Content';
import { applyFontStyles } from '../../styles/fontStyle';
import { LinkSvg } from '../../icon/LinkSvg';
import CardList from '../../components/cardList/CardList';
import ImgAdd from '../../icon/Activity/ImgAdd.png';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeBarStatus } from '../../modules/redux/bar';

const inputStyles = css`
  width: 100%;
  box-sizing: border-box;
  border: none;
  padding: 6px 8px;
  border-radius: 6px;
  background: var(--myspec-gray-scalegray-100);
  &::placeholder {
    ${applyFontStyles({
      font: 'caption-02',
      color: 'var(--myspec-gray-scalegray-400)',
    })};
  }
  &:focus {
    outline-width: 0;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 230px;
  background-image: ${(props) =>
    `url(
      ${props.$imgsrc})`};
  background-size: contain;
`;

const NullImage = styled.div`
  display: flex;
  width: 375px;
  height: 230px;
  background: var(--myspec-gray-scalegray-200, #f2f2f2);
  & > svg {
    padding: 97px 160px 88px 170px;
    justify-content: flex-end;
    align-items: center;
    flex-shrink: 0;
  }
`;

const NullImages = styled.div`
  background-image: url(${ImgAdd});
  width: 72px;
  height: 72px;
  flex-shrink: 0;
`;

const InputInfo = styled.div`
  display: flex;
  padding: 10px 15px;
  flex-direction: column;
  justify-content: center;
  gap: 12px;

  .box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    ${applyFontStyles({
      font: 'subtitle-03',
      color: 'var(--myspec-gray-scalegray-600)',
    })};

    .inputBox {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 8px;
      ${applyFontStyles({
        font: 'caption-02',
        color: 'var(--myspec-gray-scalegray-600)',
      })};

      &.flex {
        flex-direction: column;
      }

      input {
        ${inputStyles}
      }

      .urlBox {
        display: flex;
        align-items: center;
        ${inputStyles}
        gap: 4px;

        input {
          padding: 0;
          background-color: inherit;
        }
      }
    }
  }
`;

const ActWritePage = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({});

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'backPost',
        text: '활동 공고 등록',
        isShowBottom: false,
      }),
    );
  }, []);

  const onChange = (event) => {
    const { value, name } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  return (
    <form className="pageContainer">
      {/* ▼ 대표 이미지 등록하기 */}
      <div>
        {/* {imgsrc && <ImgContainer $imgsrc={''} />} */}
        <NullImage>
          <ImgAddSvg />
        </NullImage>
      </div>

      {/* ▼ 제목 + 필터 */}
      <div>
        <Title onChange={onChange} inputValue={inputValue} />
        <FilterBar type={'activity'} />
      </div>

      {/* ▼ 접수기간 + 기관 + 장소 */}
      <div>
        <InputInfo>
          <div className="duration box">
            접수 기간
            <div className="inputBox">
              <input className="startedAt" placeholder="0000.00.00" /> 부터
              <input className="endedAt" placeholder="0000.00.00" /> 까지
            </div>
          </div>
          <div className="group box">
            기관
            <div className="inputBox flex">
              <input
                className="groupName"
                placeholder="주최 기관명을 작성해주세요."
              />
              <div className="urlBox">
                <LinkSvg size={14} />
                <input
                  className="intstituteURL"
                  placeholder="주최 기관 홈페이지를 입력하세요. "
                />
              </div>
            </div>
          </div>
          <div className="area box">
            장소
            <div className="inputBox flex">
              <input className="area" placeholder="활동 장소를 입력하세요." />
            </div>
          </div>
        </InputInfo>
      </div>

      {/* ▼ 이미지 리스트 */}
      <div className="image box">
        <CardList>
          <NullImages />
        </CardList>
      </div>

      {/* ▼ 내용 입력하기 */}
      <Content onChange={onChange} inputValue={inputValue} />
    </form>
  );
};

export default ActWritePage;
