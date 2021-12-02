import styled from "styled-components";

const Mark = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  text-align: center;
  transform: translate3d(-50%, 0, 0) rotate(${props => props.rotation || "0deg"});
  transform-origin: center 130px;
`;

export default Mark;