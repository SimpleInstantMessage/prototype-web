export class PrototypeWebPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('prototype-web-app h1')).getText();
  }
}
