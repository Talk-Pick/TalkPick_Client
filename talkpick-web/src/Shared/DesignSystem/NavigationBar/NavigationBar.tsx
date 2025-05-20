import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Guide } from "..";
import { useState } from "react";

// 네비게이션 아이콘 타입
type NavIconType = "home" | "collection" | "search" | "mypage";

// 네비게이션 아이템 속성
interface NavItemProps {
  variant: NavIconType;
  isActive: boolean;
  label: string;
  onClick: () => void;
}

// 아이콘 이미지 임포트
import home_unactive from "../../../assets/NavigationIcon/home_unactive.svg";
import home_active from "../../../assets/NavigationIcon/home_active.svg";
import collection_unactive from "../../../assets/NavigationIcon/collection_unactive.svg";
import collection_active from "../../../assets/NavigationIcon/collection_active.svg";
import search_unactive from "../../../assets/NavigationIcon/search_unactive.svg";
import search_active from "../../../assets/NavigationIcon/search_active.svg";
import mypage_unactive from "../../../assets/NavigationIcon/User_unactive.svg";
import mypage_active from "../../../assets/NavigationIcon/User_active.svg";

// 아이콘 매핑 객체
const navIcons = {
  home: { active: home_active, inactive: home_unactive },
  collection: { active: collection_active, inactive: collection_unactive },
  search: { active: search_active, inactive: search_unactive },
  mypage: { active: mypage_active, inactive: mypage_unactive },
};

// 네비게이션 아이템 컴포넌트
const NavItem = ({ variant, isActive, label, onClick }: NavItemProps) => {
  const iconSrc = isActive
    ? navIcons[variant].active
    : navIcons[variant].inactive;

  return (
    <NavItemButton isActive={isActive} onClick={onClick}>
      <img src={iconSrc} alt={`${label} 아이콘`} />
      <span>{label}</span>
    </NavItemButton>
  );
};

// 스타일링된 네비게이션 아이템 버튼
const NavItemButton = styled.button<{ isActive: boolean }>`
  ${({ isActive }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    color: ${isActive ? Guide.colors.text.dark : Guide.colors.text.light};

    img {
      width: 24px;
      height: 24px;
      margin-bottom: 10px;
    }

    span {
      font-size: 12px;
      font-weight: ${isActive
        ? Guide.typography.weight.medium
        : Guide.typography.weight.regular};
    }

    &:hover {
      color: ${Guide.colors.text.dark};
    }
  `}
`;

// 네비게이션바 컴포넌트
export const NavigationBar = () => {
  const [activeTab, setActiveTab] = useState<NavIconType>("home");

  const handleTabChange = (tab: NavIconType) => {
    setActiveTab(tab);
  };

  return (
    <StyledNav>
      <NavItem
        variant="home"
        isActive={activeTab === "home"}
        label="홈"
        onClick={() => handleTabChange("home")}
      />
      <NavItem
        variant="collection"
        isActive={activeTab === "collection"}
        label="컬렉션"
        onClick={() => handleTabChange("collection")}
      />
      <NavItem
        variant="search"
        isActive={activeTab === "search"}
        label="검색"
        onClick={() => handleTabChange("search")}
      />
      <NavItem
        variant="mypage"
        isActive={activeTab === "mypage"}
        label="마이페이지"
        onClick={() => handleTabChange("mypage")}
      />
    </StyledNav>
  );
};

// 스타일링된 네비게이션바
const StyledNav = styled.nav`
  width: 100%;
  height: 78px;
  background: ${Guide.colors.surface.light};
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
`;
