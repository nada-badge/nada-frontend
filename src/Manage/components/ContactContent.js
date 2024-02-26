import { YYYYdotMMdotDate } from '../../modules/common/formatDate';
import { Layout } from './NoticeContent';
import { Link } from 'react-router-dom';

export const ContactContent = ({ data }) => {
  return (
    <Link to={`/manage/contact/Detail/${data._id}`} key={data._id}>
      <Layout>
        <div className="title">{data.title}</div>
        <div className="content">{data.content}</div>
        <div className="bottom">
          {data.isRead ? '읽음' : '안읽음'}
          {YYYYdotMMdotDate(data.registeredAt)}
        </div>
      </Layout>
    </Link>
  );
};
