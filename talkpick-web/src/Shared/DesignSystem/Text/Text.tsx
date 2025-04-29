import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Guide } from "..";
import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  color?: string; // 선택적 색상 오버라이드
  className?: string; // 추가 클래스를 위한 prop
}
// 텍스트 컴포넌트 입니다.
export const Text = ({ children, color, className }: TextProps) => {
  const StyledText = styled.p<{ color?: string }>`
    ${({ color }) => {
      const style = Guide.typography.style.body;
      return css`
        font-family: ${style.fontFamily};
        font-weight: ${style.fontWeight};
        font-size: ${style.fontSize};
        line-height: ${style.lineHeight};
        letter-spacing: ${style.letterSpacing};
        color: ${color || style.color};
        margin: 0;
      `;
    }}
  `;
  return (
    <StyledText color={color} className={className}>
      {children}
    </StyledText>
  );
};
