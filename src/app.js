import { html, render } from "lit-html";
import "./ToDoList";

const mainApp = () =>
  html`
    <to-do-app />
  `;

const el = document.querySelector("#container");
render(mainApp(), el);
