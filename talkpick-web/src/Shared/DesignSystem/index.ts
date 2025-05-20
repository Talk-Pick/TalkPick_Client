const COLORS = {
  brand: {
    purple: "#816CFF",
    pink: "#FE97A7",
    yellow: "#FFF3B2",
    green: "#D5F9BA",
    orange: "#FF9640",
    skyBlue: "#D8F5FD",
  },
  subColor: {
    lightPurple: "#DDD3FF",
    lightPink: "#FFD7DD",
    gold: "#DDBB27",
    lime: "#7BBA45",
    peach: "#FFD3B0",
    teal: "#66C5D4",
  },
  surface: {
    light: "#FAF9F9",
    medium: "#B6B6B6",
  },
  text: {
    dark: "#111111",
    medium: "#767676",
    light: "#AEAEAE",
  },
};

export const Guide = {
  colors: COLORS,

  typography: {
    // 폰트 패밀리
    fontFamily: {
      pretendard:
        "'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
    },

    // 폰트 가중치
    weight: {
      thin: 100,
      extraLight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },

    // 텍스트 스타일 (용도별)
    style: {
      heading1: {
        fontFamily: "'Pretendard', sans-serif",
        fontWeight: 800,
        fontSize: "22px",
        lineHeight: "34px",
        color: COLORS.text.dark,
      },
      heading2: {
        fontFamily: "'Pretendard', sans-serif",
        fontWeight: 600,
        fontSize: "17px",
        lineHeight: "20px",
        color: COLORS.text.medium,
      },
      heading3: {
        fontFamily: "'Pretendard', sans-serif",
        fontWeight: 600,
        fontSize: "15px",
        lineHeight: "18px",
        color: COLORS.text.medium,
      },
      body: {
        fontFamily: "'Pretendard', sans-serif",
        fontWeight: 500,
        fontSize: "12px",
        lineHeight: "14px",
        color: COLORS.text.medium,
        letterSpacing: "-0.01em",
      },
    },
  },
};
