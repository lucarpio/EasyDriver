import Page from './page';

class BottomPage extends Page {

    get btnHome() { return $('//android.view.ViewGroup[2]/android.view.View/android.view.View[1]') }
    get btnSettings() { return $('//android.view.ViewGroup[2]/android.view.View/android.view.View[2]') }

    async validate(): Promise<void> {
        await expect(this.btnHome).toBePresent();
        await expect(this.btnSettings).toBePresent();
    }

    async home(): Promise<void> {
        await (await this.btnHome).click();
    }

    async settings(): Promise<void> {
        await (await this.btnSettings).click();
    }
}

export default new BottomPage();
