// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addNewToDo', (todo) => {
  cy.get('.todo-input').type(`${todo}{enter}`, { delay: 200 });
  if (todo) {
    cy.get('.success').should('be.visible');
  } else {
    cy.get('.error').should('contain.text', 'Please supply a todo item!');
  }
});

Cypress.Commands.add('addDummyTodos', () => {
  const todos = [
    {
      name: 'Todo 1',
      isComplete: true,
    },
    {
      name: 'Todo 2',
      isComplete: false,
    },
    {
      name: 'Todo 3',
      isComplete: false,
    },
    {
      name: 'Todo 4',
      isComplete: false,
    },
    {
      name: 'Todo 5',
      isComplete: true,
    },
  ];

  todos.map((todo) => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:8080/todos',
      body: todo,
    });
  });
});
