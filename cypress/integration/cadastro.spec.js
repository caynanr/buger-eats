describe("Cadastro", () => {
  it("User deve se tornar um entregador", () => {
    cy.viewport(1440, 900);
    cy.visit("https://buger-eats.vercel.app");
    cy.get('a[href="/deliver"]').click();
    cy.get("#page-deliver form h1").should(
      "have.text",
      "Cadastre-se para  fazer entregas"
    );

    const entregador = {
      nome: "Caynan Alves",
      cpf: "00000012312",
      email: "email@email.com",
      whatsapp: "11888888888",
      endereco: {
        cep: "68901130",
        estado: "AP",
        cidade: "Macapá",
        rua: "Rua Leopoldo Machado",
        bairro: "Trem",
        numero: "10",
      },
    };

    cy.get('input[name="name"]').type(entregador.nome);
    cy.get('input[name="cpf"]').type(entregador.cpf);
    cy.get('input[name="email"]').type(entregador.email);
    cy.get('input[name="whatsapp"]').type(entregador.whatsapp);
    cy.get('input[name="postalcode"]').type(entregador.endereco.cep);
  });
});
