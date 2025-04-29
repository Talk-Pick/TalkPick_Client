import "./App.css";
import "./Shared/DesignSystem/font/font.css";
import { Heading } from "./Shared/DesignSystem/Heading/Heading";
import { Text } from "./Shared/DesignSystem/Text/Text";
function App() {
  return (
    <>
      <Heading variant="heading1">제목 22 ExtraBold </Heading>
      <Heading variant="heading2">부제목 17 SemiBold </Heading>
      <Heading variant="heading3">소제목 15 SemiBold</Heading>
      <Text>설명 텍스트 12 Medium</Text>
    </>
  );
}

export default App;
