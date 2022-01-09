export const rootMenu = [
  {
    key: "/community",
    label: "커뮤니티",
    level: 1,
    subMenu: [
      {
        label: "사진",
        key: "/community/all",
        path: "/community/all",
      },
      {
        label: "팔로잉",
        key: "/community/follwing",
        path: "/community/follwing",
      },
      {
        label: "맞춤",
        key: "/community/personal",
        path: "/community/personal",
      },
    ],
  },
  {
    key: "/store",
    label: "스토어",
    level: 1,
    subMenu: [
      {
        label: "상품",
        key: "/store/all",
        path: "/store/all",
      },
      {
        label: "카테고리",
        key: "/store/category",
        path: "/store/category",
      },
      {
        label: "최근 본 상품",
        key: "/store/recent",
        path: "/store/recent",
      },
    ],
  },
];
