import { useState } from "react";
import "./App.css";
import { Button } from "./Shared/DesignSystem/Button/Button";
import { Category } from "./Shared/DesignSystem/Category/Category";
import { categories } from "./Shared/DesignSystem/Category/Model/CategoryMap";
import { CategoryCard } from "./Shared/DesignSystem/CategoryCard/CategoryCard";
import "./Shared/DesignSystem/font/font.css";
import { Heading } from "./Shared/DesignSystem/Heading/Heading";
import { NavigationBar } from "./Shared/DesignSystem/NavigationBar/NavigationBar";
import { Text } from "./Shared/DesignSystem/Text/Text";
import { CategoryType } from "./Shared/DesignSystem/Category/Model/Category.type";
import { PickTalkPickCard } from "./Shared/DesignSystem/PickTalkPickCard/PickTalkPickCard";
import { TodayTalkPickCard } from "./Shared/DesignSystem/TodayTalkPickCard/TodayTalkPickCard";
function App() {
  const [activeCategory, setActiveCategory] = useState("");
  const handleClickCategory = (category: CategoryType) => {
    setActiveCategory(category);
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "34px",
        width: "100%",
        height: "200%",
      }}
    >
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "34px",
        }}
      >
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

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {categories.map((category) => (
          <Category key={category} category={category} />
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {categories.map((category) => (
          <CategoryCard
            key={category}
            category={category}
            activeCategory={activeCategory}
            onClick={handleClickCategory}
          />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {categories.map((category) => (
          <PickTalkPickCard key={category} category={category} />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {categories.map((category) => (
          <TodayTalkPickCard key={category} category={category} />
        ))}
      </div>
      <NavigationBar />
    </main>
  );
}

export default App;
