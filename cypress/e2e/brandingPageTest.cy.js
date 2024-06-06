import { AdminPanel } from "../support/page-objects/AdminPanel";
import { BrandingPage } from "../support/page-objects/BrandingPage";
import { faker } from "@faker-js/faker";

const email = faker.internet.email().toLowerCase();
const phone = faker.string.numeric({ length: 12 });
const address = faker.address.state();

describe("Branding Page - Update Information", () => {
  const adminPanel = new AdminPanel();
  const brandingPage = new BrandingPage();

  beforeEach(() => {
    adminPanel.visit();
    adminPanel.login("admin", "password");
    brandingPage.visit();
  });

  it("Should update branding information successfully", () => {
    brandingPage.fillBrandName("New Brand Name");
    brandingPage.fillBrandDescription("This is the new brand description.");
    brandingPage.fillAddress(address);
    brandingPage.fillPhone(phone);
    brandingPage.fillEmail(email);
    brandingPage.submit();
    brandingPage.getSuccessMessage().should("be.visible");
  });

  it("Should display error messages when required fields are missing", () => {
    brandingPage.clearBrandName();
    brandingPage.clearBrandDescription();
    brandingPage.clearAddress();
    brandingPage.clearPhone();
    brandingPage.clearEmail();
    brandingPage.submit();
    brandingPage
      .getErrorMessages()
      .should("contain", "Phone should not be blank")
      .and("contain", "Description should not be blank")
      .and("contain", "must be greater than or equal to 11")
      .and("contain", "size must be between 10 and 200")
      .and("contain", "size must be between 3 and 500")
      .and("contain", "Address should not be blank")
      .and("contain", "Email should not be blank");
  });
});
