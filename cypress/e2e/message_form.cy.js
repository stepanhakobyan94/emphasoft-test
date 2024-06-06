import { faker } from "@faker-js/faker";
import { MessageForm } from "../support/page-objects/MessageForm";

const name = faker.name.fullName();
const email = faker.internet.email().toLowerCase();
const phone = faker.string.numeric({ length: 12 });

describe("Message Form", () => {
  const messageForm = new MessageForm();

  beforeEach(() => {
    messageForm.visit();
  });

  it("Should submit the form successfully with valid data", () => {
    messageForm.fillName(name);
    messageForm.fillEmail(email);
    messageForm.fillPhone(phone);
    messageForm.fillSubject("Test Subject");
    messageForm.fillDescription("Test message description.");
    messageForm.submit();
    messageForm.getSuccessMessage().should("be.visible");
  });

  it("Should display error messages when required fields are missing", () => {
    messageForm.submit();
    messageForm
      .getErrorMessages()
      .should("contain", "Email may not be blank")
      .and("contain", "Subject must be between 5 and 100 characters.")
      .and("contain", "Message must be between 20 and 2000 characters.")
      .and("contain", "Subject may not be blank")
      .and("contain", "Name may not be blank")
      .and("contain", "Phone may not be blank")
      .and("contain", "Message may not be blank")
      .and("contain", "Phone must be between 11 and 21 characters.");
  });
});
