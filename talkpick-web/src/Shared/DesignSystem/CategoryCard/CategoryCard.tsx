import Styled from "@emotion/styled";
import { CategoryType } from "../Category/Model/Category.type";
import { Category } from "../Category/Category";
import { CategoryCardIcons } from "./CategoryCardIcons/CategoryCardIcons";
import { css } from "@emotion/react";

const categoryBackground = {
  blind_date: { background: "#FFEEF1", blur: "rgba(255, 134, 152, 0.5)" },
  group_meeting: { background: "#FFFBE8", blur: "rgba(221, 187, 39, 0.5)" },
  friend_meeting: { background: "#FFEFE2", blur: "rgba(255, 150, 64, 0.5)" },
  family: { background: "#E9E6FF", blur: "rgba(142, 123, 255, 0.5)" },
  roommate_first_meeting: {
    background: "#E9FFD8",
    blur: "rgba(123, 186, 69, 0.5)",
  },
  coworker: { background: "#F1F6FF", blur: "rgba(102, 161, 238, 0.5)" },
  icebreaking: { background: "#ECFBFF", blur: "rgba(102, 197, 212, 0.5)" },
  couple: { background: "#FFEFFA", blur: "rgba(247, 103, 199, 0.5)" },
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
          background: ${activeCategory === category
            ? style.background
            : "#f9f9f9"};
          border: none;
          cursor: pointer;
          box-shadow: 0px 6px 7.2px
            ${activeCategory === category
              ? style.blur
              : "rgba(182, 182, 182, 0.5)"};
          transition: transform 0.2s ease, box-shadow 0.2s ease;
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
