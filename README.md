# designory-automation-assignment
Designory Automation Assignment

* We will need node JS to work with Nightwatch

    [Install Node JS](https://nodejs.org/en)

**After Installation validate ‘node JS’ installed properly**
*Open terminal and run command*

    node --version

**Create Nightwatch packages, ‘-y’ accept default settings**
*Run Command*

    npm init -y
**Add nightwatch dependencies**
*Run Command*

    npm install nightwatch --save-dev

*Run command, verify nightwatch version in package*

    npm nightwatch --version
**Install chrome driver**

    npm install chromedriver --save-dev

**Run command to create nightwacth.conf.js**

    npx nightwatch

*Define following items in config file*
- Test files source 
- page objects source
- Make sure webdriver exits
- Define test settings 
e.g. code

`src_folders': ['designory-tests'],
'page_objects_path': ['page-objects'],
'webdriver': {
'start_process': true,
'end_session_on_fail': true,
'server_path': require('chromedriver').path,
'port': 9515
},`

###Tests are defined in designory-tests directory
**To execute the test simply run test cases based on the tags for each functionality**
*Run below command to execute test, for all navigations available on ‘Designory’ website* 
>npm test -- --tag navAll

*Run below command to execute test, to validate current locations page* 
>npm test -- --tag location

*Run below command to execute test, to validate 'News' navigation on ‘Designory’ website*
>npm test -- --tag news

**After test run, execution results should be available at below directory**
>test_output/
>test_output/screenshots

*Use .gitignore to ignore files not want to check in to git*


