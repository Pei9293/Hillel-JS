class TodoListView {
  static TODO_ITEM_SELECTOR = '.todo-item';
  static DELETE_BTN_SELECTOR = '.delete-btn';
  static DONE_CLASS = 'done'

  #$listEl;
  #options;

  constructor(options) {
    this.#$listEl = $('<ul></ul>')
      .on('click', TodoListView.DELETE_BTN_SELECTOR, (e) => this.onDeleteBtnClick(e))
      .on('click', (e) => this.onListElClick(e))

    this.#options = options;
  }

  onDeleteBtnClick(e) {
    e.stopPropagation();

    const id = this.getTodoItemId(e.target);

    this.#options.onDelete(id);
  }

  onListElClick(e) {
      e.preventDefault()
      const id = this.getTodoItemId(e.target);
      $(e.target).toggleClass(TodoListView.DONE_CLASS)
      this.#options.onClick(id)
  }

  getTodoItemId(el) {
    return el.closest(TodoListView.TODO_ITEM_SELECTOR)?.dataset.id;
  }

  appendTo($el) {
    $el.append(this.#$listEl);
  }

  renderList(list) {
    const html = list.map(todo => this.generateTodoHTML(todo)).join('');

    this.#$listEl.html(html);
  }

  generateTodoHTML(todo) {
    const statusClass = todo.status ? 'done' : '';

    return `
      <li class="todo-item ${statusClass}" data-id="${todo.id}">
        ${todo.title}
        <span class="delete-btn">[Delete]</span>
      </li>
    `
  }
}