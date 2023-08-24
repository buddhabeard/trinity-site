export interface Category {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
  };
}

export default interface Categories {
  categories: {
    data: Category[];
  };
}
