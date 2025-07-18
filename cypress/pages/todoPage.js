class todoPage {

    elements = {
        todoInput: () => cy.get('input[class="new-todo"]'),
        todoList: () => cy.get('ul.todo-list li'),
        todoItem: () => cy.get('[data-testid="todo-item"]'),
        todoText: (todo) => cy.get('[data-testid="todo-title"]'),
        clearCompletedButton: () => cy.get('button[class="clear-completed"]'),
    }

    addTodo(todo) {
        //Add new todo
        this.elements.todoInput().type(todo).type('{enter}');

        //Validate Todo is added to the list
        this.elements.todoList().should('have.length.greaterThan', 0);
        this.elements.todoItem(todo).should('exist');

        //Log for todo added
        cy.log("Added Todo: " + todo);

    }

    completeTodo(todo) {
        //Complete todo by clicking on the checkbox
        this.elements.todoItem(todo).find('.toggle').click();

        //Validate Todo is checked
        this.elements.todoItem(todo).should('have.class', 'completed');

        //Log for todo completed
        cy.log("Completed Todo: " + todo);

    }

    deleteTodo(todo) {

        //Delete todo 
        this.elements.clearCompletedButton().should('be.visible').click();

        //Validate Todo is deleted
        this.elements.todoItem(todo).should('not.exist');

        //Log for todo deleted
        cy.log("Deleted Todo: " + todo);

    }

    

}

export default todoPage;