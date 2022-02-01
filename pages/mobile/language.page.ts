import Page from './page';

class LanguagePage extends Page {

    get btnSpanish() { return $('//android.widget.TextView[@text="Spanish"]') }
    get btnEnglish() { return $('//android.widget.TextView[@text="English"]') }
    get lblLanguageTitle() { return $('//android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView') }

    async validate(): Promise<void> {
        await expect(this.btnSpanish).toBePresent();
        await expect(this.btnEnglish).toBePresent();
        await expect(this.lblLanguageTitle).toBePresent();
    }

    async selectSpanish(): Promise<void> {
        await (await this.btnSpanish).click();
    }

    async selectEnglish(): Promise<void> {
        await (await this.btnEnglish).click();
    }

    async getLanguageTitle(): Promise<string> {
        return (await this.lblLanguageTitle).getText();
    }
}

export default new LanguagePage();