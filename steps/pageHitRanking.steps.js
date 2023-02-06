const { pageHitRankingPage } = inject();

Given('I am on Distrowatch Home page', () => {
    pageHitRankingPage.loadHomePage();
});

Then('I scroll to PageHitRanking section', () => {
    pageHitRankingPage.scrollToPageHitRanking();
});

Then('I select {string} option in Data Span', (span) => {
    pageHitRankingPage.selectDataSpanValue(span);
});

Then('I click on Data Span submit button', () => {
    pageHitRankingPage.clickSubmit();
});

Then('I validate top {int} PageHitRanking results', (num) => {
    pageHitRankingPage.validateTopResults(num);
});

Then('I compare HPD values with indicators of PageHitRanking results', async () => {
   await pageHitRankingPage.validateHPDvaluesAndIndicators();
});