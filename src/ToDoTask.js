import { html, LitElement } from "lit-element";
import { database } from "./firebase";
import { styles } from "./styles/styles";

export class ToDoTask extends LitElement {
  static get properties() {
    return {
      title: {
        type: String,
      },
      key: {
        type: String,
      },
      onDelete: {
        type: Function,
      },
    };
  }

  static get styles() {
    return [styles];
  }

  onDelete(e) {
    console.log(this.key);
    database.ref(`tasks/${this.key}`).set(null);
  }

  render() {
    return html`
      <div class="task-container">
        <div class="task-title">
          <p class="task-title">${this.title}</p>
        </div>
        <button class="task-delete" @click=${this.onDelete.bind(this)}>
          Done
        </button>
      </div>
    `;
  }
}

customElements.define("to-do-task", ToDoTask);
