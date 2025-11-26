const users = [...Array(10).keys()].map((val) => {
  return {
    id: val + 1,
    name: `山田 太郎 ${val + 1}`,
    image: "/src/images/image.png",
    email: "example@test.com",
    tel: "000-9999-8888",
    company: {
      name: "テスト株式会社",
      web: "https://www.google.com/",
    },
  };
});

export default users;
