import { html, LitElement } from "lit-element";
import { database } from "./firebase";
import { styles } from "./styles/styles";
import "./ToDoTask";

export class ToDoList extends LitElement {
  static get properties() {
    return {
      list: {
        type: Array,
      },
      taskName: {
        type: String,
      },
      loading: {
        type: Boolean,
      },
    };
  }

  static get styles() {
    return [styles];
  }

  constructor() {
    super();
    this.taskName = "";
    this.list = [];
    this.loading = true;
  }

  async connectedCallback() {
    super.connectedCallback();
    const ref = database.ref("tasks");
    await ref.on("value", snapshot => {
      const tasks = Object.entries(snapshot.val() || {}).map(([id, task]) => ({
        id,
        title: task.title,
      }));

      this.list = tasks;
      super.requestUpdate();
      this.loading = false;
    });
  }

  async onClick(e) {
    e.preventDefault();
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
      <div class="container">
        <div class="todo">
          <h1>To-do List</h1>
          <div class="tasks">
            ${this.loading
              ? html`
                  <p>Loading...</p>
                `
              : this.list.length > 0
              ? this.list.map(
                  task =>
                    html`
                      <to-do-task
                        title=${task.title}
                        key=${task.id}
                      ></to-do-task>
                    `
                )
              : html`
                  <p>No tasks yet.</p>
                `}
          </div>
          <form class="add-task" @submit=${this.onClick}>
            <div>
              <input
                class="add-task-input"
                type="text"
                placeholder="Add new task here"
                .value=${this.taskName}
                @input=${this.onInputTask}
              />
            </div>
            <button type="submit" class="add-task-button">Add Task</button>
          </form>
        </div>
      </div>
    `;
  }
}

customElements.define("to-do-app", ToDoList);
