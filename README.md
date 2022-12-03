# qa_auto_supervisor
---------------

## Getting Started

Before starting the installation, you must make sure you have [Java](https://www.java.com/en/download/manual.jsp) and [nodeJS](https://nodejs.org/en/download/) installed and configured on your machine.

`NB`: 
- If you are using windows it is better to use [GitBash](https://git-scm.com/download/win) as a cli terminal
- On windows, use `yarn` instead of `npm`

## Installation step by step

**Clone the project**
```
git clone ssh://git@bitbucket.babel.fr:7999/rfrqa/qa_auto_supervisor.git 
```

**Install the package and dependencies at the repository root**
```
npm ci
```

**Edit your own .env configuration**
```
BASE_URL=
WS_URL=
DRIVER=firefox or chrome or mobile
```

**Launch your selenium server locally**

Before lunch your server in the first time, you need to do the installation:
```
npm run selenium:server install
```
After you can run your selenium server :
```
npm run selenium:server start
```
By default, the selenium server will run on `http://localhost:4444/ui/index.html`.
Congratulations, selenium server is listening on port 4444, you can set that in your selenium webdriver client.

**Launch your tests locally**
for desktop tests run :
```
yarn test:web
```
for mobile tests run :
```
yarn test:mob
```

`NB` 
- You can find or customize anothers commands in the package.json file
- You can manage drivers versions in selenium-config.js file