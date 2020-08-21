import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body {
        margin: 0;
        height: 100%;
    }

    body {
        display: flex;
        flex-direction: column;
        background: #ff9ad2;
        font-family: 'Source Sans Pro', sans-serif;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
    }

    footer {
        margin: 100px auto;
    }

    header,
    main,
    footer {
        text-align: center;
    }

    h1 {
        color: red;
    }

    header,
    main {
        margin: 0 auto 20px;
        width: 90%;
        max-width: 500px;
    }

    form {
        display: grid;
        grid-gap: 10px;
        margin: 0 auto;
        max-width: 600px;
    }


    button {
        cursor: pointer;
    }

    .input {
        color: #000000;
        background: rgb(249 94 141);
        border: 0.5px solid #5a2f2f;
        height: 30px;
        margin: 5px auto;
        padding: 5px 10px;
        outline: 0;
    }

    .input::placeholder {
    color: #000000;
    }

    .btn {
    height: 30px;
    background: #60a9e8;
    border: 0;
    color: #fff;
    width: 200px;
    margin: 0 auto;
    outline: 0;
    }

    .form-inline {
    display: flex;
    align-items: center;
    }

    .form-inline select {
    height: 42px;
    }

    .form-inline button {
    height: 42px;
    }

    .container-list {
    max-width: 600px;
    margin: 0 auto;
    grid-gap: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    }

    .container-list div {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    background: #fd83c7;
    border-radius: 5px;
    padding: 10px;
    align-items: center;
    }

    .container-list div strong {
    color: crimson;
    font-size: 16px;
    }

    .container-list div ul {
    padding: 0;
    list-style: none;
    width: 80%;
    }

    .container-list div ul li {
    text-align: center;
    padding: 5px;
    }

    .result {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;
    background: #fd83c7;
    border-radius: 5px;
    padding: 10px;
    max-width: 580px;
    }

    .links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px auto;
    background: #fd83c7;
    border-radius: 5px;
    padding: 10px;
    max-width: 580px;
    }

    .links a {
    font-size: 16px;
    color: darkviolet;
    }

    .green {
    color: darkgreen;
    }

    .red {
    color: darkred;
    }

    .d-flex {
        display: flex;
    }

    .justify-content-between {
        justify-content: space-between;
    }

`;
