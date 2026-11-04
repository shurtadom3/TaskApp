
describe('Validación de seguridad XSS', () => {

  it('Debe mostrar el HTML como texto plano', () => {

    cy.visit('http://localhost:3000');

    // Iniciar sesión
    cy.get('#email').type('admin@test.com');
    cy.get('#password').type('123');
    cy.contains('button', 'Ingresar').click();

    cy.get('#tasks').should('be.visible');

    // Crear tarea con HTML
    cy.get('#taskTitle')
      .type('<h1>TAREA MALICIOSA</h1>');

    cy.contains('button', 'Crear tarea').click();

    // Verificar que el HTML aparece como texto
    cy.get('#taskList li')
      .last()
      .should('have.text', '<h1>TAREA MALICIOSA</h1>');

    // Verificar que NO existe un H1 renderizado
    cy.get('#taskList h1').should('not.exist');

  });

});
