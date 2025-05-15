import Styled from "@emotion/styled";
import { CategoryType } from "../Category/Model/Category.type";
import { css } from "@emotion/react";
import { Category } from "../Category/Category";

// styled 컴포넌트 접근법
const StyleCircle = Styled.circle`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width: 158px;
height: 129px;
border-radius:20px;
background:#F9F9F9;
box-shadow: 0px 6px 7.2px rgba(182, 182, 182, 0.5);
`;

export const CategoryCard = ({ category }: { category: CategoryType }) => {
  return (
    <StyleCircle>
      <Category category={category} />
      <span>hello</span>
    </StyleCircle>
  );
};
