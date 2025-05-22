import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Heading } from "../../../../shared/DesignSystem/Heading/Heading";
import { Guide } from "../../../../shared/DesignSystem";
import {
  firstMascotMessages,
  firstText,
  MESSAGE_DEALY,
} from "../../../../entities/LandingPage/Model/constant";

export default function FirstMascot() {
  // 메시지 표시 상태
  const [visibleMessages, setVisibleMessages] = useState<string[]>([]);

  // 컴포넌트 마운트시 비동기 처리 애니메이션 8초
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleMessages((prev) => {
        if (prev.length < firstMascotMessages.length) {
          return [...prev, firstMascotMessages[prev.length]];
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, MESSAGE_DEALY);

    return () => clearInterval(timer);
  }, []);

  return (
    <StyledMain>
      <Heading variant="heading1">{firstText}</Heading>
      <MessageContainer>
        {visibleMessages.map((message, index) => (
          <React.Fragment key={index}>
            {index % 2 === 0 ? (
              <LeftBubbleWrapper>
                <BubbleContent index={index}>{message}</BubbleContent>
                <LeftTail index={index} />
              </LeftBubbleWrapper>
            ) : (
              <RightBubbleWrapper>
                <BubbleContent index={index}>{message}</BubbleContent>
                <RightTail index={index} />
              </RightBubbleWrapper>
            )}
          </React.Fragment>
        ))}
      </MessageContainer>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: inherit;
  white-space: pre-line;
  gap: 30px;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  gap: 16px;
  margin-top: 40px;
  height: 60%;
`;

interface ColorProps {
  index: number;
}

const LeftBubbleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  animation: slideUp 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);

  @keyframes slideUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const RightBubbleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  animation: slideUp 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);

  @keyframes slideUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const BubbleContent = styled.div<ColorProps>`
  padding: 10px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  font-size: 15px;
  line-height: 18px;
  font-family: ${Guide.typography.fontFamily};
  font-weight: ${Guide.typography.weight.semiBold};
  max-width: 80%;
  background-color: ${(props) => {
    const colors = ["#E3E3E3", "#eeeeee", "#BFBEBE", "#d8d8d8", "#ECECEC"];
    return colors[props.index];
  }};
  color: ${(props) => {
    const textColors = ["#79797B", "#AEAEAE", "#767676", "#767676", "#9A9A9A"];
    return textColors[props.index];
  }};
  position: relative;
  animation-delay: ${(props) => props.index * 0.2}s;
`;

const LeftTail = styled.div<ColorProps>`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 12px solid
    ${(props) => {
      const colors = ["#E3E3E3", "#eeeeee", "#BFBEBE", "#d8d8d8", "#ECECEC"];
      return colors[props.index];
    }};

  position: relative;
  left: 30px;
  top: -2.2px;
  transform: translateY(2px);
`;

const RightTail = styled.div<ColorProps>`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 12px solid
    ${(props) => {
      const colors = ["#E3E3E3", "#eeeeee", "#BFBEBE", "#d8d8d8", "#ECECEC"];
      return colors[props.index];
    }};

  position: relative;
  right: 30px;
  top: -2.2px;
  transform: translateY(2px);
`;
