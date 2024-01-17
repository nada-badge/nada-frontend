/** ActWritePage 글 작성을 진행하는 페이지 */
import styled, { css } from 'styled-components';
import '../../styles/PageCommon.scss';
import { ThumbnailInput } from '../../containers/activity/ThumbnailInput';
import { Title } from '../../containers/common/Title';
import { FilterBar } from '../../containers/common/FilterBar';
import { Image } from '../../containers/common/Image';
import { Content } from '../../containers/common/Content';
import { Insitute } from '../../containers/common/Institute';
import { Area } from '../../containers/common/Area';
import { TextInput } from '../../styles/community/PostWriteStyle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBarStatus } from '../../modules/redux/bar';
import {
  initializeAll,
  postWriteSelector,
} from '../../modules/redux/community/postWrite';
import useModal from '../../components/common/usedInModal/useModal';
import usePostActivity from '../../modules/queries/activity/usePostActivity';
import usePatchActivity from '../../modules/queries/activity/usePatchActivity';

const InputInfo = styled.div`
  display: flex;
  padding: 10px 15px;
  flex-direction: column;
  justify-content: center;
  gap: 12px;

  }
`;

const ActWritePage = () => {
  const dispatch = useDispatch();
  const { openModal } = useModal();
  const [inputValue, setInputValue] = useState({});
  const [thumbnail, setThumbnail] = useState();
  const [imgFiles, setImgFiles] = useState([]);
  const isSubmit = useSelector(postWriteSelector('method', 'isSubmit'));
  const postwrite = useSelector(({ postwrite }) => postwrite.postWriteSubmit);
  const { mutate } = usePostActivity();
  const updateMutate = usePatchActivity().mutate;

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
    const groupName = localStorage.getItem('groupName');
    const _id = postwrite._id;
    const category = postwrite.category;
    const field = postwrite.field;
    const region = postwrite.region;
    const startedAt = postwrite.startedAt;
    const endedAt = postwrite.endedAt;
    const activityName = e.target.activityName.value;
    const content = e.target.content.value;
    const institute = e.target.institute.value;
    const intstituteURL = e.target.intstituteURL.value;
    const area = e.target.area.value;
    const imageUrl = imgFiles;

    dispatch(initializeAll());
    if (isSubmit) {
      mutate({
        activityName,
        groupName,
        field,
        category,
        region,
        institute,
        intstituteURL,
        area,
        content,
        imageUrl,
        startedAt,
        endedAt,
      });
    } else {
      updateMutate({
        _id,
        activityName,
        groupName,
        field,
        category,
        region,
        institute,
        intstituteURL,
        area,
        content,
        imageUrl,
        startedAt,
        endedAt,
      });
    }
  };
  return (
    <form onSubmit={onSubmit} className="pageContainer">
      {/* ▼ 대표 이미지 등록하기 */}
      <div>
        <ThumbnailInput thumbnail={thumbnail} setThumbnail={setThumbnail} />
      </div>

      {/* ▼ 제목 + 필터 */}
      <div>
        <Title onChange={onChange} inputValue={inputValue} />
        <FilterBar type={'activity'} />
      </div>

      {/* ▼ 접수기간 + 기관 + 장소 */}
      <>
        <InputInfo>
          <TextInput>
            <div className="duration box">
              접수 기간
              <div className="inputBox">
                <input
                  className="startedAt"
                  placeholder="0000.00.00"
                  onClick={openCalendar}
                />{' '}
                부터
                <input className="endedAt" placeholder="0000.00.00" /> 까지
              </div>
            </div>
          </TextInput>
          <Insitute onChange={onChange} inputValue={inputValue} />
          <Area onChange={onChange} inputValue={inputValue} />
        </InputInfo>
      </>

      {/* ▼ 이미지 리스트 */}
      <Image section="activity" imgFiles={imgFiles} setImgFiles={setImgFiles} />

      {/* ▼ 내용 입력하기 */}
      <Content onChange={onChange} inputValue={inputValue} />
    </form>
  );
};

export default ActWritePage;
