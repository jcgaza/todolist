import { html, LitElement } from "lit-element";
import { database } from "./firebase";

export class ToDoList extends LitElement {
  static get properties() {
    return {
      list: {
        type: Array,
      },
      taskName: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.taskName = "";
    this.list = [];
  }

  connectedCallback() {
    const ref = database.ref("tasks");
    ref.on("value", snapshot => {
      Object.values(snapshot.val()).map((task, id) => {
        this.list.push({ id, title: task.title });
      });
    });
  }

  async onClick(e) {
    const ref = database.ref("tasks");
    await ref.push({
      title: this.taskName,
    });

    this.taskName = "";
  }

  onInputTask(e) {
    this.taskName = e.target.value;
  }

  render() {
    return html`
      <div class="todo">
        <h1>To-do List</h1>
        <ul style="list-style: none">
          ${this.list.map(
            task =>
              html`
                <li>
                  <input id="task-${task.id}" type="checkbox" />
                  <label for="task-${task.id}">
                    ${task.title}
                  </label>
                </li>
              `
          )}
        </ul>
        <input
          type="text"
          placeholder="Add new task here"
          .value=${this.taskName}
          @input=${this.onInputTask}
        />
        <button @click=${this.onClick}>Add Task</button>
      </div>
    `;
  }
}

customElements.define("to-do-app", ToDoList);
