type ColorType = { color: string; image: string };
type ProductsPhonesTypes = {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice: number;
  colors: ColorType[];
  storage: string[];
  specs: {
    screen: string;
    cpu: string;
    cores: string;
    mainCamera: string;
    frontCamera: string;
    battery: string;
  };
};
