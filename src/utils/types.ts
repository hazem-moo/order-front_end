export type BrandProps = {
  w: number;
  h: number;
};

export type OpenProps = {
  open: boolean;
  toggle: () => void;
};

export type GetPropsStrapi = {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  category_img?: { url: string };
  img: { url: string };
};

export type PropsCategory = {
  params: {
    category: string;
  };
};

export type PropsId = {
  params: {
    id: string;
  };
};

export type SimilarProps = {
  data: GetPropsStrapi[];
};
