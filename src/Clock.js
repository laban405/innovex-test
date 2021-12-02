import styled from "styled-components";
import useClock from './components/clock/useClock'
import Circle from './components/clock/Circle'
import Mark from './components/clock/Mark'

import Hands from './components/clock/Hands'

const Clock = ({ className, size,initialTime }) => {
    const time = useClock(initialTime);
  
    return (
      <Circle size={size} className={className}>
        {Array(12).fill().map((_, i) => {
          return (
            <Mark
              key={i}
              size={size}
              rotation={i * 30 + "deg"}
            >
              i
            </Mark>
          );
        })}
        <Hands time={time} borderWidth={10} />
      </Circle>
    );
  };
  
  const StyledClock = styled(Clock)`
    position: relative;
    border: 10px solid black;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    z-index: 1;
  `;
  
  export default StyledClock;