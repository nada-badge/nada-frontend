/** ActWritePage 글 작성을 진행하는 페이지 */
import styled from 'styled-components';
import '../../styles/PageCommon.scss';
import { ThumbnailInput } from '../container/ThumbnailInput';
import { Title } from '../../containers/common/postInput/Title';
import { FilterBar } from '../../containers/common/postInput/FilterBar';
import { Image } from '../../containers/common/postInput/Image';
import { Content } from '../../containers/common/postInput/Content';
import { Insitute } from '../../containers/common/postInput/Institute';
import { Area } from '../../containers/common/postInput/Area';
import { TextInput } from '../../Community/styles/PostWriteStyle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import {
  initializeAll,
  postWriteSelector,
} from '../../Community/modules/redux/postWrite';
import useModal from '../../Modal/modules/useModal';
import usePostActivity from '../modules/queries/usePostActivity';
import usePatchActivity from '../modules/queries/usePatchActivity';
import getDateFormat from '../../modules/common/getDateFormat';

const InputInfo = styled.div`
  display: flex;
  padding: 10px 15px;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;

const ActWritePage = () => {
  const dispatch = useDispatch();
  const { openModal } = useModal();
  const [inputValue, setInputValue] = useState({});
  const [mainImageUrl, setMainImageUrl] = useState();
  const [extraImageUrl, setExtraImageUrl] = useState([]);
  const isSubmit = useSelector(postWriteSelector('method', 'isSubmit'));
  const postwrite = useSelector(({ postwrite }) => postwrite.postWriteSubmit);
  const { mutate } = usePostActivity();
  const updateMutate = usePatchActivity().mutate;
  const { startedAt, endedAt } = postwrite;

  console.log('ActWritePage start : ', startedAt, ' : ', endedAt);

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

  const openCalendar = () => {
    openModal({ type: 'CalendarModal' });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { activityName, content, institute, intstituteURL, area } = e.target;
    const { _id, category, field, region } = postwrite;
    //const groupName = localStorage.getItem('groupName');

    const data = {
      activityName: activityName.value,
      groupName: 'NADA',
      _id,
      category,
      field,
      region,
      institute: institute.value,
      intstituteURL: intstituteURL.value,
      area: area.value,
      content: content.value,
      mainImageUrl,
      extraImageUrl,
      startedAt,
      endedAt,
    };

    dispatch(initializeAll());
    //isSubmit ? mutate(data) : updateMutate(data);

    mutate(data);
  };

  return (
    <form onSubmit={onSubmit} className="pageContainer">
      <div>
        <ThumbnailInput
          thumbnail={mainImageUrl}
          setThumbnail={setMainImageUrl}
        />
      </div>
      <div>
        <Title
          name="activityName"
          onChange={onChange}
          inputValue={inputValue}
        />
        <FilterBar type={'activity'} />
      </div>
      {/* ▼ 접수기간 수정 필요 */}
      <>
        <InputInfo>
          <TextInput>
            <div className="duration box">
              접수 기간
              <div className="inputBox">
                <input
                  className="date"
                  placeholder="0000.00.00"
                  onClick={openCalendar}
                  value={getDateFormat({ preDate: startedAt, type: 'number' })}
                  readonly
                  required
                />
                부터
                <input
                  className="date"
                  placeholder="0000.00.00"
                  onClick={openCalendar}
                  value={getDateFormat({ preDate: endedAt, type: 'number' })}
                  readonly
                />
                까지
              </div>
            </div>
          </TextInput>
          <Insitute onChange={onChange} inputValue={inputValue} />
          <Area onChange={onChange} inputValue={inputValue} />
        </InputInfo>
      </>
      <Image
        section="activity"
        imgFiles={extraImageUrl}
        setImgFiles={setExtraImageUrl}
      />
      <Content onChange={onChange} inputValue={inputValue} />
      <button type="submit">테스트 Submit</button>
    </form>
  );
};

export default ActWritePage;
