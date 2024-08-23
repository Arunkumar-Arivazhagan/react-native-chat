import { expect, browser, $ } from "@wdio/globals";

describe("Login flow", () => {
  it("should login with valid credentials", async () => {
    //await browser.url(`URL`)
    //

    await $('//XCUIElementTypeTextField[@value="Enter email"]').setValue(
      "arun4@gm.com"
    );
    await $(
      '//XCUIElementTypeSecureTextField[@value="Enter password"]'
    ).setValue("asdfgh");
    await $("").click();

    //assertion
    await expect($("#flash")).toBeExisting();
    await expect($("#flash")).toHaveText(
      expect.stringContaining("You logged into a secure area!")
    );
  });

  it("test for sending messages", async () => {
    await $("[locator]").setValue("[message]");
    await $("[locator]").click();

    //assertion
    await expect($("[locator]")).toBeExisting();
    await expect($("[locator]")).toHaveText(expect.stringContaining("[TEXT]"));
  });

  it("test for receiving messages", async () => {
    await $("[locator]").setValue("[message]");
    await $("[locator]").click();

    //assertion
    await expect($("[locator]")).toBeExisting();
    await expect($("[locator]")).toHaveText(expect.stringContaining("[TEXT]"));
  });
});
