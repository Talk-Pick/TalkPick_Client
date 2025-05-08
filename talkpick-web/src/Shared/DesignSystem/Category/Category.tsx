import { css } from "@emotion/react";
import Styled from "@emotion/styled";
import { Guide } from "..";
import { Text } from "./Model/CategoryMap";
import { badgeStyle } from "./UI/badgeStyle";
import { CategoryType } from "./Model/Category.type";

interface CategoryProps {
  category: CategoryType;
}

// styled 컴포넌트 접근법
const StyleCircle = Styled.circle<{
  category: CategoryType;
}>`
    ${({ category }) => {
      const style = badgeStyle[category];
      return css`
        font-family: ${Guide.typography.fontFamily};
        font-weight: ${Guide.typography.weight.semiBold};
        font-size: 12px;
        line-height: 14px;
        color: ${style.color};
        background: ${style.background};
        width: ${style.width};
        height: 31px;
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
      `;
    }}
  `;

export const Category = ({ category }: CategoryProps) => {
  return <StyleCircle category={category}>{Text[category]}</StyleCircle>;
};
