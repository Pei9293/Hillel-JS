class Collection {
  #list = [];

  fetch() {
    return TodoApi.getList().then((list) => {
      this.setList(list);
    })
  }

  update(id, todo) {
    const oldTodo = todoListFind(id);

    Object.keys(todo).forEach(key => oldTodo[key] = todo[key]);
  }

  setList(list) {
    this.#list = list;
  }

  getList() {
    return this.#list;
  }

  add(todo) {
    this.#list.push(todo);
  }

  find(id) {
    return this.#list.find(c => c.id === id);
  }

  delete(id) {
    this.#list = this.#list.filter(item => item.id !== id);

    TodoApi.delete(id);

    return Promise.resolve();
  }

  toggleStatus(id) {
      const status = !(this.find(id).status);
      TodoApi.update(id, {status: status})
      
      return Promise.resolve();
  }
}
