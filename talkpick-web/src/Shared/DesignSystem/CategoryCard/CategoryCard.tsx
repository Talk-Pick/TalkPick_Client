import Styled from "@emotion/styled";
import { CategoryType } from "../Category/Model/Category.type";
import { Category } from "../Category/Category";
import { CategoryCardIcons } from "./CategoryCardIcons/CategoryCardIcons";

// styled 컴포넌트 접근법
const StyleButton = Styled.button`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width: 158px;
height: 129px;
gap:10px;
border-radius:20px;
background:#F9F9F9;
border:none;
cursor:pointer;
box-shadow: 0px 6px 7.2px rgba(182, 182, 182, 0.5);
transition: transform 0.2s ease, box-shadow 0.2s ease;
 &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   
      }
`;

export const CategoryCard = ({ category }: { category: CategoryType }) => {
  return (
    <StyleButton>
      <Category category={category} />
      <img width={81} height={77} src={CategoryCardIcons[category]} />
    </StyleButton>
  );
};
