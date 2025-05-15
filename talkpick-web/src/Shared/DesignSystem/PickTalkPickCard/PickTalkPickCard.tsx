import Styled from "@emotion/styled";
import { CategoryType } from "../Category/Model/Category.type";
import { Category } from "../Category/Category";
import { CategoryCardIcons } from "../CategoryCard/CategoryCardIcons/CategoryCardIcons";

import { Guide } from "..";

const StyledCard = Styled.article`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;

width: 221px;
height: 175px;
padding: 8px 0px;
background: #F9F9F9;
box-shadow: 0px 6px 7.2px rgba(182, 182, 182, 0.5);
border-radius: 20px;
`;

const StyledHeading = Styled.h1`
font-family: ${Guide.typography.fontFamily};
font-weight: ${Guide.typography.weight.bold};
font-size: 14px;
text-align: center;
color: ${Guide.colors.text.dark};
white-space: pre-line;
line-height: 17px;
`;

const categoryContent = {
  blind_date: `설레고 긴장되는 마음,
        어떻게 대화를 이끌어갈까요?`,
  group_meeting: `대화를 시작하기도 참 애매한 상황,
아이스 브레이킹을 한 번 해볼까요?`,
  friend_meeting: `여행? 술자리?
대화가 멈추면 안 돼!`,
  family: `가족들과 만나서 이야기한게
얼마만일까요?`,
  roommate_first_meeting: `설레고 긴장되는 마음,
어떻게 대화를 이끌어갈까요?`,
  coworker: `대화를 시작하기도 참 애매한 상황,
아이스 브레이킹을 한 번 해볼까요?`,
  icebreaking: `대화를 시작하기도 참 애매한 상황,
아이스 브레이킹을 한 번 해볼까요?`,
  couple: `설레고 긴장되는 마음,
어떻게 대화를 이끌어갈까요?`,
};

export const PickTalkPickCard = ({ category }: { category: CategoryType }) => {
  return (
    <StyledCard>
      <Category category={category} />
      <StyledHeading> {categoryContent[category]}</StyledHeading>
      <img width={87} height={83} src={CategoryCardIcons[category]} />
    </StyledCard>
  );
};
