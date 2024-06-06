export class AdminPanel {
  visit() {
    cy.visit("https://automationintesting.online/#/admin");
  }

  login(username, password) {
    cy.get("#username").type(username);
    cy.get("#password").type(password);
    cy.get("#doLogin").contains("Login").click();
  }

  addRoom(roomName, roomType, accessible, roomPrice, amenities = []) {
    cy.get("#roomName").type(roomName);
    cy.get("#type").select(roomType);
    cy.get("#accessible").select(accessible);
    cy.get("#roomPrice").type(roomPrice);
    amenities.forEach((amenity) => {
      cy.get(amenity).check();
    });
    cy.get("#createRoom").contains("Create").click();
  }

  clickCreateButton() {
    cy.get("#createRoom").contains("Create").click();
  }

  getErrorMessages() {
    return cy.get(".alert.alert-danger");
  }
}
