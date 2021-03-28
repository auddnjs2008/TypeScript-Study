type PageInfo = {
  title: string;
};

type Page = "home" | "about" | "contact";

const nav: Record<Page, PageInfo> = {
  home: { title: "Home" },
  about: { title: "About" },
  contact: { title: "Contact" },
};

//Page와 PageInfo를 묶어주는 일을 한다.
// 하나를 키로 쓰고 다른 하나를 묶고 싶을때

// 기타
type Product = "cat" | "dog";
type NewProduct = Capitalize<Product>; // "Cat" | "Dog" 를 사용할 수 있다.
