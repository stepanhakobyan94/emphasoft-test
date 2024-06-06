export class MessageForm {
  visit() {
    cy.visit("https://automationintesting.online/");
  }

  fillName(name) {
    cy.get("#name").type(name);
  }

  fillEmail(email) {
    cy.get("#email").type(email);
  }

  fillPhone(phone) {
    cy.get("#phone").type(phone);
  }

  fillSubject(subject) {
    cy.get("#subject").type(subject);
  }

  fillDescription(description) {
    cy.get("#description").type(description);
  }

  submit() {
    cy.get("#submitContact").click();
  }

  getSuccessMessage() {
    return cy.contains("Thanks for getting in touch");
  }

  getErrorMessages() {
    return cy.get(".alert.alert-danger");
  }
}
