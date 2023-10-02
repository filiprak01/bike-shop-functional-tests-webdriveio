# Bike Shoop functional tests 
project link [https://github.com/WUT-SE-2/bike-renting-shop-project]
## Overview
This is repository to run functional tests for bike shop project with WebdriverIO. 
WebdriverIO is a test automation framework that utilises Typescript to create tests cases. 
## Folder structure
1. Test configuration file can be found in the wdio.conf.ts file. 
2. List of packages is saved in the package.json file. 
3. Test cases are in test/specs file (.ts files(.
4. Pages can be found in test/pageobjects/application and /test/pageobjects/admin folders (.ts files).
5. Allure report data is stored in allure_report file
## Test configuration 
### Define test scope
Test suite is defined in the configuration file in specs. 
To select only tests that you would like to run simply comment out all the tests that you are not interested in runnning. 
### Define mode of running 
The tests will run in headless mode. To change it please change chromeoptions in the configuration file.
To run tests in paraller increase number of instances from 1 to the number of parallel tests that you want to have
## Test running 
To run tests simply paste the following commands into the terminal: 
``` console
npx wdio wdio.conf.ts
```
If all tests passed you will get information like this
  
![image](https://github.com/filiprak01/bike-shop-functional-tests-webdriveio/assets/87765656/6397bd68-0c2c-4698-85b0-47ca21452bc2)
  
## Allure reports
To generate allure reports enter the following command: 
``` console
allure generate ./allure_report
```
Then you can open your report using the following command: 
```console
allure open
```
