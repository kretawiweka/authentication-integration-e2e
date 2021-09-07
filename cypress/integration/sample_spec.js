describe("Login Page authentication-integration app", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000/login");
  });
  it("wait for document network call", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("input[id='username']").type("admin");
    cy.wait(1000);
    cy.get("input[id='password']").type("admin");
    cy.wait(1000);
    cy.get("form").submit();
  });
});
