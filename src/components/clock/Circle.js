import styled from "styled-components";

const Circle = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
`;

export default Circle