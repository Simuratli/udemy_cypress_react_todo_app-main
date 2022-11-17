describe('test all todos using api', () => {
  let id;
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('should get todo correctly', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:8080/todos',
      body: {
        name: 'Todo 1',
        isComplete: false,
      },
    }).then((response) => {
      id = response.body.id;
      expect(response.status).to.eq(201);
      expect(response.body.name === 'Todo 1');
    });
  });

  it('should get spesific todo correctly', () => {
    cy.request('GET', 'http://localhost:8080/todos/' + id).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eql('Todo 1');
    });
  });

  it('should get update status of todo correctly', () => {
    cy.request({
      method: 'PUT',
      url: 'http://localhost:8080/todos/' + id,
      body: {
        name: 'Todo 1',
        isComplete: true,
      },
    }).then((response) => {
      expect(response.body.isComplete).to.eql(true);
    });
  });

  it('should delete  todo correctly', () => {
    cy.request('DELETE', 'http://localhost:8080/todos/' + id).then(
      (response) => {
        expect(response.status).to.eql(200);
      }
    );
  });
});
