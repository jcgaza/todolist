import { css } from "lit-element";

export const styles = css`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Roboto", sans-serif;
    background: white;
    border-radius: 10px;
  }

  .todo {
    width: 600px;
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
    border: 1px solid #dddddd;
    width: 600px;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 5px;
  }

  .task-delete {
    border: 1px solid #dddddd;
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
    border: 1px solid #dddddd;
    background: transparent;
    border-radius: 10px;
    padding: 10px;
    width: 100px;
  }

  .add-task-input {
    border: 1px solid #dddddd;
    height: 30px;
    width: 400px;
    margin-right: 10px;
    padding: 10px;
    border-radius: 10px;
  }

  .add-task-input:focus {
    outline: none;
    border: 1px solid #008080;
    height: 30px;
    width: 400px;
    margin-right: 10px;
    padding: 10px;
    border-radius: 10px;
  }

  h1 {
    text-align: center;
  }

  .input-task {
    border: 1px solid #dddddd;
  }
`;
