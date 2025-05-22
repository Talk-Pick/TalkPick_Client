import Styled from "@emotion/styled";
import { useState } from "react";
import FirstMascot from "../../feature/LandingPage/ui/FirstMascot/FirstMascot";

export default function LandingPage() {
  // 슬라이드 상태
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <StyledMain>
      <FirstMascot />
    </StyledMain>
  );
}

const StyledMain = Styled.main`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:inherit;
height:inherit;
`;
