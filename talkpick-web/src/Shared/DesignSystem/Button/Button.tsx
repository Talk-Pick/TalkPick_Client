import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Guide } from "..";
import { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "rest";
  children: ReactNode;
}

const buttonStyle = {
  primary: {
    color: Guide.colors.text.medium,
    background: "#FFFFFF",
    border: "1px solid #767676",
  },
  secondary: {
    color: "#FFFFFF",
    background: Guide.colors.text.dark,
    border: "none",
  },
  rest: {
    color: Guide.colors.text.medium,
    background: "#DADADA",
    border: "none",
  },
};

const StyleButton = styled.button<{
  variant: "primary" | "secondary" | "rest";
  color?: string;
}>`
  ${({ variant }) => {
    const style = buttonStyle[variant];
    return css`
      font-family: ${Guide.typography.fontFamily.pretendard};
      font-weight: ${Guide.typography.weight.bold};
      font-size: 18px;
      line-height: 21px;
      color: ${style.color};
      background: ${style.background};
      border-radius: 14px;
      width: 213px;
      border: ${style.border};
      height: 51px;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;

      /* 보더와 아웃라인 관련 추가 설정 */
      outline: none !important;
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;

      /* 포커스 상태에서도 보더 색상 유지 */
      &:focus {
        outline: none;
        border: ${style.border};
      }

      /* hover 상태에서도 보더 색상 유지 */
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border: ${style.border};
      }

      /* 액티브 상태에서도 보더 색상 유지 */
      &:active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border: ${style.border};
      }
    `;
  }}
`;

// 버튼 컴포넌트 입니다
export const Button = ({ variant = "primary", children }: ButtonProps) => {
  return <StyleButton variant={variant}>{children}</StyleButton>;
};
