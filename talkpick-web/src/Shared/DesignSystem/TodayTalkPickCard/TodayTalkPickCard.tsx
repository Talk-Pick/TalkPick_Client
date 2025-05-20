import Styled from "@emotion/styled";
import { CategoryType } from "../Category/Model/Category.type";
import { Category } from "../Category/Category";
import { Guide } from "..";
import { Text } from "../Text/Text";
import { Heading } from "../Heading/Heading";
import { TodayTalkPickCardIcons } from "./TodayTalkPickCardIcons/TodayTalkPickCardIcons";

const StyledCard = Styled.article`
display: flex;
flex-direction: column;
justify-content:center;
align-content: flex-start;
padding: 15px 14px;
width: 221px;
height: 178px;
background: #F9F9F9;
box-shadow: 0px 6px 7.2px rgba(182, 182, 182, 0.5);
border-radius: 20px;
`;

const StyledHeading = Styled.h1`
font-family: ${Guide.typography.fontFamily};
font-weight: ${Guide.typography.weight.bold};
font-size: 16px;
color: ${Guide.colors.text.dark};
white-space: pre-line;
line-height: 19px;
`;
const StyledSection = Styled.section`
display:flex;
justify-content:space-between;
`;
const StyledTimeSection = Styled.section`
display:flex;
flex-direction:column;
gap:5px;

`;
export const TodayTalkPickCard = ({ category }: { category: CategoryType }) => {
  return (
    <StyledCard>
      <Category category={category} />
      <StyledHeading>{`연애를 할때 가장 중요하게 
      생각하는 것은?`}</StyledHeading>
      <StyledSection>
        <StyledTimeSection>
          <Text>평균 대화 시간</Text>
          <Heading variant="heading2">25분</Heading>
          <Text>선택된 횟수</Text>
          <Heading variant="heading2">34개</Heading>
        </StyledTimeSection>
        <img src={TodayTalkPickCardIcons[category]} />
      </StyledSection>
    </StyledCard>
  );
};
