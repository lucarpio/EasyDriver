import { Given, Then, When } from '@cucumber/cucumber';
import bottomPage from '../../pages/mobile/bottom.page';
import languagePage from '../../pages/mobile/language.page';

Given(/^I access the app main page$/, async () => {
    await bottomPage.validate();
});

When(/^I click on settings$/, async () => {
    await bottomPage.settings();
    await languagePage.validate();
});

When(/^I select English language$/, async () => {
    await languagePage.selectEnglish();
});

When(/^I select Spanish language$/, async () => {
    await languagePage.selectSpanish();
});

Then(/^I validate the app is set to English$/, async () => {
    expect(await languagePage.getLanguageTitle()).toContain("Select Your Language");
});

Then(/^I validate the app is set to Spanish$/, async () => {
    expect(await languagePage.getLanguageTitle()).toContain("Elige tu idioma");
});
