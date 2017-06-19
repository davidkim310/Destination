import { DestinationPage } from './app.po';

describe('destination App', () => {
  let page: DestinationPage;

  beforeEach(() => {
    page = new DestinationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
