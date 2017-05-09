import { KaoBorKeawElderlyHomeCareAppPage } from './app.po';

describe('kao-bor-keaw-elderly-home-care-app App', () => {
  let page: KaoBorKeawElderlyHomeCareAppPage;

  beforeEach(() => {
    page = new KaoBorKeawElderlyHomeCareAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
