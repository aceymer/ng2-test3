import { NgTest3Page } from './app.po';

describe('ng-test3 App', function() {
  let page: NgTest3Page;

  beforeEach(() => {
    page = new NgTest3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
