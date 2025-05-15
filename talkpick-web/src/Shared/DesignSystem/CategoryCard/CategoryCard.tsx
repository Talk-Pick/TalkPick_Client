import Styled from "@emotion/styled";
import { CategoryType } from "../Category/Model/Category.type";
import { Category } from "../Category/Category";
import { CategoryCardIcons } from "./CategoryCardIcons/CategoryCardIcons";
import { css } from "@emotion/react";

const categoryBackground = {
  blind_date: "#FFEEF1",
  group_meeting: "#FFFBE8",
  friend_meeting: "#FFEFE2",
  family: "#E9E6FF",
  roommate_first_meeting: "#E9FFD8",
  coworker: "#F1F6FF",
  icebreaking: "#ECFBFF",
  couple: "#FFEFFA",
};

// styled 컴포넌트 접근법
const StyleButton = Styled.button<{
  activeCategory: string;
  category: CategoryType;
}>`
      ${({ category, activeCategory }) => {
        const style = categoryBackground[category];
        return css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 158px;
          height: 129px;
          gap: 10px;
          border-radius: 20px;
          background: ${activeCategory === category ? style : "#f9f9f9"};
          border: none;
          cursor: pointer;
          box-shadow: 0px 6px 7.2px rgba(182, 182, 182, 0.5);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
        `;
      }}
    `;

interface CategoryCardProps {
  category: CategoryType;
  activeCategory: string;
  onClick: (category: CategoryType) => void;
}
export const CategoryCard = ({
  category,
  activeCategory,
  onClick,
}: CategoryCardProps) => {
  return (
    <StyleButton
      activeCategory={activeCategory}
      category={category}
      onClick={() => onClick(category)}
    >
      <Category category={category} />
      <img width={81} height={77} src={CategoryCardIcons[category]} />
    </StyleButton>
  );
};
