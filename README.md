# Solution for Distrowatch Automation Exercise

### <u>Website Details</u>
URL : https://distrowatch.com/

### <u>Test Framework : CodeceptJS</u>
- I have used Codeceptjs framework to write Automation tests. More info about codeceptjs here https://codecept.io/api/
- I have used Behaviour Driver Development (BDD) approach to writes test cases. More details here https://codecept.io/bdd/

### <u>Prerequsites</u>
- NodeJS (v17.3.0+)
- npm (v8.3.0+)

### <u>Installation</u>

1. Open terminal & execute command 

```npm run build```

This command will install all the dependencies listed in **package.json** file located in the root directory.

### <u>Execute Tests</u>

1. Post installation of all dependencies, execute command

```npm run test```

This command will execute codeceptjs tests/features in verbose mode.

### <u>Reporting (using Allure)</u>

Allure Reporter is enabled to create the final Test Report. 
Report artifacts are created under **report** folder within the root directory

1. In order to view the report in local browser, execute command

```npm run report```

[Test Report](allure-report/index.html)

2. In order to only generate report artifacts locally, execute below command.

```npm run report:generate```

Artifacts gets created in **allure-report** folder within the root directory

### <u> Code setup </u>

Root directory comprises of following important files & folders:
- **package.json** : This file contains the functional attributes that npm uses to install dependencies & run scripts.
- **codecept,conf.js** : JS file where Codeceptjs Framework configurations are defined including Feature & Step file locations, PageObject files, Plugins, Helpers like REST, Webdriver, etc.
- **features** : This folder contains BDD feature files. Ex. *features/pageHitRanking.feature*
- **steps** : This folder contains BDD step definition js files. Ex. *steps/pageHitRanking.steps.js*
- **pages** : This folder contains page object js files. Ex. *pages/pageHitRanking.page.js*
- **output** : This folder contains codeceptjs tests output xml files



