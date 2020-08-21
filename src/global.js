import { createGlobalStyle } from 'styled-components';

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
