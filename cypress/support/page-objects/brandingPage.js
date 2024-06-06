export class BrandingPage {
  visit() {
    cy.visit("https://automationintesting.online/#/admin/branding");
  }

  fillBrandName(brandName) {
    cy.get("#name").clear().type(brandName);
  }

  fillBrandDescription(description) {
    cy.get("#description").clear().type(description);
  }

  fillAddress(address) {
    cy.get("#contactAddress").clear().type(address);
  }

  fillPhone(phone) {
    cy.get("#contactPhone").clear().type(phone);
  }

  fillEmail(email) {
    cy.get("#contactEmail").clear().type(email);
  }

  clearBrandName() {
    cy.get("#name").clear();
  }
  clearBrandDescription() {
    cy.get("#description").clear();
  }

  clearAddress() {
    cy.get("#contactAddress").clear();
  }

  clearPhone() {
    cy.get("#contactPhone").clear();
  }

  clearEmail() {
    cy.get("#contactEmail").clear();
  }

  submit() {
    cy.get("#updateBranding").click();
  }

  getSuccessMessage() {
    return cy
      .get(".form-row.text-center")
      .should("contain", "Branding updated!");
  }

  getErrorMessages() {
    return cy.get(".alert.alert-danger");
  }
}
