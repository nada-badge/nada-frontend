import styled from "styled-components";
import { DropDown } from "./Dropdown";

const Filterlist = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 8px;
  position: relative;

  & > .view {
    flex: 0 0 auto !important;
  }
  & > .drop-down-instance {
    height: 6px !important;
    margin-right: unset !important;
    width: 12px !important;
  }
`;

const Filter = () => {
  return (
    <Filterlist>
      <DropDown
        className="view"
        text="지역"
        type="closed"
        vectorClassName="drop-down-instance"
      />
      <DropDown
        className="view"
        text="분야"
        type="closed"
        vectorClassName="drop-down-instance"
      />
      <DropDown
        className="view"
        text="종류"
        type="closed"
        vectorClassName="drop-down-instance"
      />
    </Filterlist>
  );
};

export default Filter;
