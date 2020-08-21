import React, { useState, useEffect } from "react";

import { Container, Form, Despesa, Receitas, Saldo, Links } from "./styles";
import List from "./List";

import { formatCurrency } from "./utils";

const Controle = ({ onSubmit, receitas, despesas }) => {
  const [totalReceitas, setTotalReceitas] = useState(0);
  const [totalDespesas, setTotalDespesas] = useState(0);
  const [saldo, setSaldo] = useState(0);

  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      type,
      description,
      amount,
    };
    setType("");
    setDescription("");
    setAmount("");

    onSubmit(data);
  }

  useEffect(() => {
    let total = 0;

    if (receitas.length) {
      receitas.map((item) => {
        let converted = parseFloat(item.amount);
        total += converted;
      });

      setTotalReceitas(total);
    }
  }, [receitas]);

  useEffect(() => {
    let total = 0;

    if (despesas.length) {
      despesas.map((item) => {
        let converted = parseFloat(item.amount);
        total += converted;
      });

      setTotalDespesas(total);
    }
  }, [despesas]);

  useEffect(() => {
    setSaldo(totalReceitas - totalDespesas);
  }, [totalDespesas, totalReceitas]);

  return (
    <Container>
      <Form>
        <select
          name="type"
          id=""
          className="input"
          onChange={(e) => setType(e.target.value)}
        >
          <option value="" selected={type === "" ? "selected" : ""}>
            SELECIONE
          </option>
          <option selected={type === "" ? "DESPESA" : ""} value="DESPESA">
            Despesa
          </option>
          <option selected={type === "" ? "RECEITA" : ""} value="RECEITA">
            Receita
          </option>
        </select>
        <input
          type="text"
          className="input"
          name="description"
          placeholder="Descrição"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <input
          type="number"
          className="input"
          name="amount"
          placeholder="Valor"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <button type="button" onClick={handleSubmit} className="btn">
          adicionar
        </button>
      </Form>

      <Receitas>
        <strong>Receitas</strong>
        <List list={receitas ?? []} />
        {totalReceitas > 0 && (
          <span>Total: {formatCurrency(totalReceitas)}</span>
        )}
      </Receitas>
      <Despesa>
        <strong>Despesas</strong>

        <List list={despesas ?? []} />
        {totalDespesas > 0 && (
          <span>Total: {formatCurrency(totalDespesas)}</span>
        )}
      </Despesa>

      <Saldo>
        <strong className={saldo > 0 ? "green" : "red"}>Saldo</strong>
        <span className={saldo > 0 ? "green" : "red"}>
          {formatCurrency(saldo)}
        </span>
      </Saldo>

      {saldo > 0 && (
        <Links>
          <p>
            Parabéns, você tem saldo positivo aproveite e aprenda a investir seu
            dinheiro segue abaixo alguns links para lhe ajudar
          </p>
          <a href="">Serasa</a>
          <a href="">Me Poupe</a>
          <a href="">Primo Rico</a>
          <a href="https://www.youtube.com/watch?v=dhMpPphp2RU">Serasa 1</a>
          <a href="https://www.youtube.com/watch?v=DkILvNSM4ZY">Serasa 2</a>
        </Links>
      )}
    </Container>
  );
};

export default Controle;
