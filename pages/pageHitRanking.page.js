const { I } = inject();

// Test Data
const url = "https://distrowatch.com/index.php";
const distributionTestdata = ["Ubuntu", "Mandriva", "SUSE", "Fedora", "MEPIS" ];

 // Locators
 const logo = "(.//table/tbody/tr/td/a/img)[1]";
 const pageHitRankingHeading = ".//th[text()='Page Hit Ranking']";
 const dataSpanSelect = "form[name='Dataspan'] select";
 const dataSpanSubmitButton = "form[name='Dataspan'] input[type='submit']";
 const entry = "(.//table[@class='Logo']/tbody/tr/td[3]/table[2]//a)[INDEX]";
 const distributionNames = ".//table[@class='Logo']/tbody/tr/td[3]/table[2]//td[@class='phr2']/a";
 const hpdValues = ".//table[@class='Logo']/tbody/tr/td[3]/table[2]//td[@class='phr3']";
 const hpdIndicators = ".//table[@class='Logo']/tbody/tr/td[3]/table[2]//td[@class='phr3']/img";

module.exports = {

    // FUNCTIONS
    loadHomePage() {
        I.amOnPage(url);
        I.waitUrlEquals(url);
        I.seeInTitle("DistroWatch.com");
        I.waitForClickable(logo);
    },

    scrollToPageHitRanking() {
        I.see("Page Hit Ranking");
        I.seeElement(pageHitRankingHeading);
        I.scrollTo(pageHitRankingHeading);
    },

    selectDataSpanValue(span) {
        I.waitForClickable(dataSpanSelect);
        I.selectOption(dataSpanSelect, span);
        I.see(span, dataSpanSelect);
    },

    clickSubmit() {
        I.waitForClickable(dataSpanSubmitButton);
        I.click(dataSpanSubmitButton);
        I.waitForClickable(dataSpanSelect);
    },

    validateTopResults(num) {
        for (let i=0; i<distributionTestdata.length && i<num; i++){
            const expected = distributionTestdata[i];
            const actualLocator = entry.replace("INDEX",i+1);
            I.waitForText(expected, 5, actualLocator);
        }
    },

   async  validateHPDvaluesAndIndicators() {
       const distributions = await  I.grabTextFromAll(distributionNames);
       const currentValues = await  I.grabTextFromAll(hpdValues);
       const lastValues = await  I.grabAttributeFromAll(hpdValues, 'title');
       const indicators = await  I.grabAttributeFromAll(hpdIndicators, 'alt');

       let errorCount = 0;
       for(let i=0; i<=distributionNames.length; i++){
        const name = distributionNames[i];
        const curValue = parseInt(currentValues[i]);
        const lastValue = parseInt(lastValues[i].split(" ")[1]);
        const indicator = indicators[i];

        let error = false;
        if(curValue < lastValue){
            if(indicator != "<"){
                error = true;
            }
        }
        else if(curValue > lastValue){
            if(indicator != ">"){
                error = true;
            }
        }
        else {
            if(indicator != "="){
                error = true;
            }
        }
        if(error){
            errorCount++;
            I.say("Error for name: " + name + ", hbd current value: " + curValue + ", yesterday value: "+ lastValue + ", indicator: " + indicator);
        }
       }
       I.assertTrue(errorCount == 0, "Error in HPD Indicators, Count:"+errorCount);
    },
  };