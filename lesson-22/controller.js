class Controller {
  #$container;

  constructor($container) {
    this.#$container = $container;

    this.collection = new Collection();
    this.todoListView = new TodoListView({
      onDelete: id => this.collection.delete(id).then(() => this.renderList()),
      onClick: id => this.collection.toggleStatus(id).then(this.collection.fetch()),
    });

    this.todoListView.appendTo(this.#$container);
    this.collection.fetch().then(() => this.renderList())
  }

  renderList() {
    this.todoListView.renderList(this.collection.getList());
  }
}