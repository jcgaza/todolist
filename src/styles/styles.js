import { css } from "lit-element";

export const styles = css`
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
  }

  .task-title {
    justify-content: flex-start;
  }

  .add-task {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }

  h1 {
    text-align: center;
  }

  .input-task {
    border: 1px solid #b0b0b0;
  }
`;
