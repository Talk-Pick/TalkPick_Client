import "./App.css";
import { Button } from "./Shared/DesignSystem/Button/Button";
import "./Shared/DesignSystem/font/font.css";
import { Heading } from "./Shared/DesignSystem/Heading/Heading";
import { Text } from "./Shared/DesignSystem/Text/Text";
function App() {
  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "34px" }}>
      <section>
        <Heading variant="heading1">제목 22 ExtraBold </Heading>
        <Heading variant="heading2">부제목 17 SemiBold </Heading>
        <Heading variant="heading3">소제목 15 SemiBold</Heading>
        <Text>설명 텍스트 12 Medium</Text>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Button variant="primary">시작하기</Button>
          <Button variant="secondary">시작하기</Button>
          <Button variant="rest">시작하기</Button>
        </div>
      </section>
    </main>
  );
}

export default App;
