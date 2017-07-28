import { DataInterfacePage } from './app.po';

describe('data-interface App', () => {
  let page: DataInterfacePage;

  beforeEach(() => {
    page = new DataInterfacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
