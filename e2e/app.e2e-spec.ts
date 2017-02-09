import { ProyectoAngularrPage } from './app.po';

describe('proyecto-angularr App', function() {
  let page: ProyectoAngularrPage;

  beforeEach(() => {
    page = new ProyectoAngularrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
