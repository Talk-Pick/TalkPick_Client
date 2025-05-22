import Styled from "@emotion/styled";
import { Heading } from "../../../../shared/DesignSystem/Heading/Heading";
import { secondText } from "../../../../entities/LandingPage/Model/constant";

export default function SecondMascot() {
  return (
    <StyledMain>
      <Heading variant="heading1">{secondText}</Heading>
    </StyledMain>
  );
}

const StyledMain = Styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: inherit;
  white-space: pre-line;
  gap: 30px;
  border: 1px solid black;
`;
