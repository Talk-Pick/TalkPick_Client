const Text = {
  blind_date: "소개팅/과팅",
  group_meeting: "그룹 첫 모임",
  friend_meeting: "친구",
  family: "가족",
  roommate_first_meeting: "룸메 첫 만남",
  coworker: "동료",
  icebreaking: "기타/아이스브레이킹",
  couple: "연인",
};

type CategoryType =
  | "blind_date"
  | "group_meeting"
  | "friend_meeting"
  | "family"
  | "roommate_first_meeting"
  | "coworker"
  | "icebreaking"
  | "couple";
interface CategoryProps {
  category: CategoryType;
}

export const Category = ({ category }: CategoryProps) => {
  return <circle>{Text[category]}</circle>;
};
