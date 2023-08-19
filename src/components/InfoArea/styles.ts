import { styled } from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
  padding: 20px;
  border-radius: 10px;
  margin-top: -40px;
  display: flex;
  align-items: center;
`;

export const MonthArea = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const MonthArrow = styled.div`
  width: 40px;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
`;

export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
`;

export const ResumeArea = styled.div`
  display: flex;
  flex: 2;
`;
