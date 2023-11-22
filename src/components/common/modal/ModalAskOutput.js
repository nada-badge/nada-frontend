/** ModalOutPut 되물어보는 MODAL 출력 컴포넌트 */
import ModalButtonDiv from './ModalButtonDiv';
import { Layout } from '../../../styles/Community/NoticeModalStyle';

export const ModalOutPut = ({ title, content, act, actText }) => {
  return (
    <Layout>
      <div className="title">{title}</div>
      <div className="border" />
      <p className="content">{content}</p>
      <div className="border-2" />
      {ModalButtonDiv({
        actText: actText,
        act: act,
        isRed: true,
      })}
    </Layout>
  );
};

export default ModalOutPut;
