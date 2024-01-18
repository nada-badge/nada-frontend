/** ActWritePage 글 작성을 진행하는 페이지 */
import styled from 'styled-components';
import '../../styles/PageCommon.scss';
import { ThumbnailInput } from '../../containers/activity/ThumbnailInput';
import { Title } from '../../containers/common/postInput/Title';
import { FilterBar } from '../../containers/common/postInput/FilterBar';
import { Image } from '../../containers/common/postInput/Image';
import { Content } from '../../containers/common/postInput/Content';
import { Insitute } from '../../containers/common/postInput/Institute';
import { Area } from '../../containers/common/postInput/Area';
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
    const { activityName, content, institute, intstituteURL, area } = e.target;
    //const groupName = localStorage.getItem('groupName');
    const { _id, category, field, region, startedAt, endedAt } = postwrite;
    const imageUrl = imgFiles;

    const data = {
      activityName: activityName.value,
      //groupName,
      _id,
      category,
      field,
      region,
      institute,
      intstituteURL: intstituteURL.value,
      area: area.value,
      content: content.value,
      imageUrl,
      startedAt,
      endedAt,
    };

    dispatch(initializeAll());
    isSubmit ? mutate(data) : updateMutate(data);
  };

  return (
    <form onSubmit={onSubmit} className="pageContainer">
      <div>
        <ThumbnailInput thumbnail={thumbnail} setThumbnail={setThumbnail} />
      </div>
      <div>
        <Title onChange={onChange} inputValue={inputValue} />
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
                  className="startedAt"
                  placeholder="0000.00.00"
                  onClick={openCalendar}
                />
                부터
                <input className="endedAt" placeholder="0000.00.00" /> 까지
              </div>
            </div>
          </TextInput>
          <Insitute onChange={onChange} inputValue={inputValue} />
          <Area onChange={onChange} inputValue={inputValue} />
        </InputInfo>
      </>
      <Image section="activity" imgFiles={imgFiles} setImgFiles={setImgFiles} />
      <Content onChange={onChange} inputValue={inputValue} />
    </form>
  );
};

export default ActWritePage;
