import { YYYYdotMMdotDate } from '../../modules/common/formatDate';
import { Layout } from './NoticeContent';

export const ContactContent = ({ data }) => {
  return (
    <Layout>
      <div className="title">{data.title}</div>
      <div className="content">{data.content}</div>
      <div className="bottom">{YYYYdotMMdotDate(data.registeredAt)}</div>
    </Layout>
  );
};
