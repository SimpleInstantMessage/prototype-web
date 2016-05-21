import { PrototypeWebPage } from './app.po';

describe('prototype-web App', function() {
  let page: PrototypeWebPage;

  beforeEach(() => {
    page = new PrototypeWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('prototype-web works!');
  });
});
