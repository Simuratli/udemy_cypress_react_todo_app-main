/// <reference types="cypress" />

describe('Todo UI testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should add new todo correctly', () => {
    cy.intercept('POST', 'http://localhost:8080/todos/', 'hello');
    cy.addNewToDo('First todo');
    cy.get('.todo-ite').last().should('contain.text', 'First todo');
  });

  it('should be able to toggle status of todo', () => {
    cy.addNewToDo('Second todo');
    cy.get('.todo-checkbox').check().should('be.checked');
    cy.get('.todo-checkbox').uncheck().should('not.be.checked');
  });

  it('should delete todo correct', () => {
    cy.addNewToDo('Third todo');
    cy.get('.delete-item').click();
  });

  it('should not add empty todo', () => {
    cy.addNewToDo('');
  });

  afterEach(() => {
    cy.get('body').then(($el) => {
      if ($el.find('.delete-item').length > 0) {
        cy.get('.delete-item').click({ multiple: true });
      }
    });
  });
});
