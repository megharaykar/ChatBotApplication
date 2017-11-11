import { FundsFlowDashboardPage } from './app.po';

describe('funds-flow-dashboard App', () => {
  let page: FundsFlowDashboardPage;

  beforeEach(() => {
    page = new FundsFlowDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
