import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import Header from '../containers/Header';
import { useGetContactList } from '../modules/queries/useGetContact';
import { LayoutStyle } from './HomePage.';
import { ContactContent } from '../components/ContactContent';
const ContactManagePage = () => {
  const dispatch = useDispatch();
  const { data } = useGetContactList();

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: '',
        text: '',
        isShowBottom: false,
      }),
    );
  }, []);
  return (
    <LayoutStyle>
      <Header text={'문의사항 게시글'} url={'/manage/contact'} />
      {data &&
        data.contacts.map((card) => (
          <div key={card._id}>
            <ContactContent data={card} />
          </div>
        ))}
    </LayoutStyle>
  );
};

export default ContactManagePage;
