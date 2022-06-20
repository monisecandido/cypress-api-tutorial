describe('Given the Users api', () => {
  let fakerUser: object;
  beforeEach(() => {
    cy.task("freshUser").then((user) => fakerUser = user as object)
  });

  context('When I send POST /usuarios', () => {
    it('Then it should create a new user', () => {
      cy.log("vamos ver o usuario => ", JSON.stringify(fakerUser))
      cy.request({
        method: 'POST',
        url: '/usuarios',
        body: fakerUser
      })
        .should((response) => {
          expect(response.status).eq(201)
          expect(response.body.message).eq("Cadastro realizado com sucesso")
          expect(response.body._id).to.not.be.null
        });
    });
  });
});
