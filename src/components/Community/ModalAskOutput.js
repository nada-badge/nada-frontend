/** ModalOutPut 되물어보는 MODAL 출력 컴포넌트 */
import useModal from "../Modal/Community/useModal";
import ModalButtonDiv from "./ModalButtonDiv";
import { Layout } from "../../styles/Community/BarSecModalStyle";

export const ModalOutPut = ({ title, content, act, actText }) => {
  const { closeModal } = useModal();
  const Close = () => {
    closeModal();
  };

  return (
    <Layout>
      <div className="title">{title}</div>
      <div className="border" />
      <p className="content">{content}</p>
      <div className="border-2" />
      {ModalButtonDiv({
        cancelText: "취소",
        cancel: Close,
        actText: actText,
        act: act,
        isRed: true,
      })}
    </Layout>
  );
};

export default ModalOutPut;
