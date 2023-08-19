import { useEffect, useState } from 'react';

import { Item } from './types/Item';

import { items } from './data/items';
import { categories } from './data/categories';

import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';

import * as C from './App.style';

import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';

export const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  useEffect(() => {
    let incomeSum = 0;
    let expenseSum = 0;

    filteredList.forEach((item) => {
      if (categories[item.category].expense) {
        expenseSum += item.value;
      } else {
        incomeSum += item.value;
      }
    });

    setIncome(incomeSum);
    setExpense(expenseSum);
  }, [filteredList]);

  const handleAddItem = (newItem: Item) => {
    setList((prev) => {
      return [...prev, newItem];
    });
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>

      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <TableArea list={filteredList} />
        <InputArea onAdd={handleAddItem} />
      </C.Body>
    </C.Container>
  );
};
