import todoPage from '../../pages/todoPage';
import { faker } from '@faker-js/faker';
import registerCypressGrep from '@cypress/grep'
registerCypressGrep()

describe('Todo App', {tags: ['@ui']}, () => {
    let todoTask = faker.lorem.sentence();
    const todo = new todoPage();

    beforeEach(() => {
        cy.visit('/');
    });

    it('ToDo task creation E2E', { tags: ['@e2e'] }, () => {
        todo.addTodo(todoTask);
        todo.completeTodo(todoTask);
        todo.deleteTodo(todoTask);
    });

    it('Add todo', { tags: ['@isolated'] }, () => {
        todo.addTodo(todoTask);
    });

    it('Complete todo', { tags: ['@isolated'] }, () => {
        todo.addTodo(todoTask);
        todo.completeTodo(todoTask);
    });

    it('Delete todo', { tags: ['@isolated'] }, () => {
        todo.addTodo(todoTask);
        todo.completeTodo(todoTask);
        todo.deleteTodo(todoTask);
    });

});