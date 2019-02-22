import { css } from "lit-element";

export const styles = css`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    background: #f2f2f2;
    height: auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Roboto", sans-serif;
    background: white;
  }

  .todo {
    border: 1px solid #b0b0b0;
    width: 600px;
    border-radius: 1%;
    padding: 20px;
  }

  .tasks {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .task-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #f0f0f0;
    width: 600px;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 5px;
  }

  .task-delete {
    border: 1px solid #f0f0f0;
    background: transparent;
    border-radius: 10px;
    padding: 10px;
  }

  .add-task {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }

  .add-task-button {
    border: 1px solid #f0f0f0;
    background: transparent;
    border-radius: 10px;
    padding: 10px;
    width: 100px;
  }

  .add-task-input {
    border: 1px solid #f0f0f0;
    height: 30px;
    width: 400px;
    margin-right: 10px;
    padding: 10px;
    border-radius: 10px;
  }

  .add-task-input:focus {
    outline: none;
    border: 1px solid #008080;
  }

  h1 {
    text-align: center;
  }

  .input-task {
    border: 1px solid #b0b0b0;
  }
`;
