/// <reference types='codeceptjs' />
type pageHitRankingPage = typeof import('./pages/pageHitRanking.page.js');
type ChaiWrapper = import('codeceptjs-chai');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, pageHitRankingPage: pageHitRankingPage }
  interface Methods extends WebDriver, ChaiWrapper {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
