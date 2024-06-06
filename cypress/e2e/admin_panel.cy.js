import { MessageForm } from "../support/page-objects/MessageForm";
import { AdminPanel } from "../support/page-objects/AdminPanel";

describe("Admin Panel - Positive and Negative Tests", () => {
  const messageForm = new MessageForm();
  const adminPanel = new AdminPanel();

  beforeEach(() => {
    adminPanel.visit();
  });

  it("Should add a room successfully and display it on the main page", () => {
    adminPanel.login("admin", "password");
    adminPanel.addRoom("Deluxe Room", "Double", "true", "150", [
      "#wifiCheckbox",
      "#tvCheckbox",
      "#radioCheckbox",
    ]);
    messageForm.visit();
    cy.contains(/Double.*WiFi.*TV.*Radio/).should("be.visible");
  });

  it("Should display error messages when required fields are missing while adding a room", () => {
    adminPanel.login("admin", "password");
    adminPanel.clickCreateButton();
    adminPanel
      .getErrorMessages()
      .should("contain", "Room name must be set")
      .and("contain", "must be greater than or equal to 1");
  });
});
