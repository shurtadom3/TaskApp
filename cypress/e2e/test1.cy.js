
it('Debe mostrar la tarea creada', () => {
  cy.visit('http://localhost:3000');

  // Iniciar sesión
  cy.get('#email').type('admin@test.com');
  cy.get('#password').type('123');
  cy.contains('Ingresar').click();

  // Esperar a que aparezca el formulario
  cy.get('#tasks').should('be.visible');

  // Crear la tarea
  cy.get('#taskTitle')
    .should('be.visible')
    .type('Comprar pan');

  cy.contains('Crear tarea').click();

  // Verificación incorrecta para provocar el fallo
  cy.get('#taskList')
    .should('contain.text', 'Comprar leche');
});
