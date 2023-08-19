import { Item } from '../types/Item';

export const getCurrentMonth = () => {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  const [year, month] = date.split('-');

  const newList = list.filter((item) => {
    item.date.getFullYear() === +year && item.date.getMonth() + 1 === +month;
  });

  return newList;
};
