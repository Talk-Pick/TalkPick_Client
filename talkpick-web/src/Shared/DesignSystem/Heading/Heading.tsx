import { ReactNode } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Guide } from "..";

type variantType = "heading1" | "heading2" | "heading3";

interface HeadingProps {
  variant: variantType;
  children: ReactNode;
  color?: string; // 선택적 색상 오버라이드
  className?: string; // 추가 클래스를 위한 prop
}

// styled 컴포넌트 접근법
const StyledHeading = styled.h1<{
  variant: "heading1" | "heading2" | "heading3";
  color?: string;
}>`
  ${({ variant, color }) => {
    const style = Guide.typography.style[variant];
    return css`
      font-family: ${style.fontFamily};
      font-weight: ${style.fontWeight};
      font-size: ${style.fontSize};
      line-height: ${style.lineHeight};
      color: ${color || style.color};
      margin: 0; // 추가적인 스타일 리셋
    `;
  }}
`;
// 제목 컴포넌트
export const Heading = ({
  variant,
  children,
  color,
  className,
}: HeadingProps) => {
  // 변형에 따라 적절한 HTML 태그 선택
  const Component = (() => {
    switch (variant) {
      case "heading1":
        return StyledHeading.withComponent("h1");
      case "heading2":
        return StyledHeading.withComponent("h2");
      case "heading3":
        return StyledHeading.withComponent("h3");
      default:
        return StyledHeading;
    }
  })();
  return (
    <Component variant={variant} color={color} className={className}>
      {children}
    </Component>
  );
};
