describe("Data-driven automation test", () => {
  before(() => {
    cy.fixture("dataTest").then(function (data) {
      this.data = data;
    });
  });
  it("Data test", function () {
    cy.visit("http://automationpractice.com/");
    cy.get(".login").click();
    cy.get("#email").type(this.data.user);
    cy.get("#passwd").type(this.data.password);
    cy.get("#SubmitLogin").click();
  });
});
