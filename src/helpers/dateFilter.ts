import { Item } from '../types/Item';

export const getCurrentMonth = () => {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  const [year, month] = date.split('-');

  return list.filter((item) => {
    return item.date.getFullYear() === +year && item.date.getMonth() === +month;
  });
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth()).padStart(2, '0');
  const day = String(date.getDay()).padStart(2, '0');

  return `${day}/${month}/${year}`;
};

export const formatCurrentMonth = (currentMonth: string): string => {
  const [year, month] = currentMonth.split('-');

  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  return `${months[+month - 1]} de ${year}`;
};

export const newDateAdjusted = (dateField: string) => {
  const [year, month, day] = dateField.split('-');
  return new Date(parseInt(year), parseInt(month), parseInt(day));
};
