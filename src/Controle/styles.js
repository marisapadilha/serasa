import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  border-radius: 5px;
  max-width: 650px;
  margin: 15px auto;
  display: grid;
  grid-template-areas: 'form form' 'despesas receitas' 'saldo saldo' 'links links';
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

export const Form = styled.div`
  grid-area: form;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fd83c7;
  padding: 10px;
  border-radius: 5px;
`;

export const Despesa = styled.div`
  grid-area: despesas;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fd83c7;
  padding: 10px;
  border-radius: 5px;
  justify-content: space-between;
`;

export const Receitas = styled.div`
  grid-area: receitas;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #fd83c7;
  padding: 10px;
  border-radius: 5px;
`;

export const Saldo = styled.div`
  grid-area: saldo;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fd83c7;
  padding: 10px;
  border-radius: 5px;
`;

export const Links = styled.div`
  grid-area: links;
  background: #fd83c7;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  p {
    font-size: 15px;
    background: #539653;
    color: white;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 5px;
  }
`;
