import React, { useState } from "react";
import cep from "cep-promise";

import Controle from "./Controle";

import GlobalStyle from "./global";

function App() {
  const [person, setPerson] = useState({
    despesas: [],
    receitas: [],
  });
  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);

  //formulario1
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [document, setDocument] = useState("");
  const [cepInput, setCEP] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  function submitForm1(e) {
    e.preventDefault();
    setShowForm2(true);

    setPerson({
      ...person,
      name,
      dateOfBirth,
      document,
      cep: cepInput,
      street,
      number,
      district,
      city,
      state,
      country,
    });
  }

  function handleSubmitForm2(form) {
    switch (form.type) {
      case "DESPESA":
        const { despesas } = person;

        setPerson({
          ...person,
          despesas: [...despesas, form],
        });
        break;

      default:
        const { receitas } = person;
        setPerson({
          ...person,
          receitas: [...receitas, form],
        });
        break;
    }
  }

  const getCep = (value) => {
    cep(value)
      .then(function (response) {
        setStreet(response.street ?? "");
        setDistrict(response.neighborhood ?? "");
        setCity(response.city ?? "");
        setState(response.state ?? "");
        setCountry("BR");
      })
      .catch(() => setCEP(value));
  };

  return (
    <>
      <GlobalStyle />
      <header>
        <h1>Precisa de ajuda Financeira?😔</h1>{" "}
        {/* eslint-disable jsx-a11y/accessible-emoji */}
        <h2>Sem problemas! A Serasa esta aqui para lhe auxiliar 💪😎</h2>
        {/* eslint-disable jsx-a11y/accessible-emoji */}
        <h1>DADOS DE 2019</h1>
        <p>
          A cada dia, cresce o numero de inadimplentes no Brasil. Sabemos que
          cerca de 40% da população brasileira maior de 18 anos tem ao menos uma
          divida em atraso.
        </p>
        <p>
          Cada um dos inadimplentes deixou de honrar, em média 3,5 contas em
          2019.
        </p>
        <h2>
          Por isso, a Serasa criou para voce uma plataforma para organizar as
          suas finanças.
        </h2>
        <h1>QUER AJUDA? CLIQUE NO BOTÃO ABAIXO:</h1>
        <button
          className="btn"
          id="quero_ajuda"
          type="button"
          onClick={() => {
            console.log("gasa");
            setShowForm1(true);
          }}
        >
          QUERO AJUDA
        </button>
      </header>

      {showForm1 && (
        <form action="/" id="form1" onSubmit={submitForm1}>
          <div class="d-flex">
            <input
              className="input"
              type="text"
              name="name"
              value={name}
              placeholder="Nome Completo"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="input"
              type="date"
              name="date_of_birth"
              placeholder="Data de nascimento"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
            <input
              className="input"
              type="text"
              name="document"
              placeholder="CPF"
              value={document}
              onChange={(e) => setDocument(e.target.value)}
            />
          </div>

          <div class="d-flex">
            <input
              className="input"
              type="text"
              name="cep"
              placeholder="CEP"
              value={cepInput}
              onChange={(e) => setCEP(e.target.value)}
              onBlur={(e) => getCep(e.target.value)}
            />
            <input
              className="input"
              type="text"
              name="street"
              placeholder="Rua"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <input
              className="input"
              type="number"
              name="number"
              placeholder="Numero"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          <div class="d-flex">
            <input
              className="input"
              type="text"
              name="district"
              placeholder="Bairro"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
            <input
              className="input"
              type="text"
              name="city"
              value={city}
              placeholder="Cidade"
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              className="input"
              type="text"
              name="state"
              value={state}
              placeholder="Estado"
              onChange={(e) => setState(e.target.value)}
            />
          </div>

          <div className="d-flex">
            <input
              type="text"
              className="input"
              name="country"
              value={country}
              placeholder="Pais"
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>

          <button className="btn" id="btn_continuar">
            Continuar
          </button>
        </form>
      )}

      {showForm2 && (
        <Controle
          onSubmit={handleSubmitForm2}
          despesas={person.despesas}
          receitas={person.receitas}
        />
      )}

      <footer>Com ❤️ SERASA!</footer>
      {/* eslint-disable jsx-a11y/accessible-emoji */}
    </>
  );
}

export default App;
