# DBMSTools
### [Github Repo](https://github.com/zhangxy9999/DBMSTools)

* To set up the development environment, please make sure that you have the latest version of [npm](https://www.npmjs.com/) and [node](https://nodejs.org/en/) installed.
* Please make sure that you are OUTSIDE OF RBC FIREWALL with a computer that has non-corporate/normal internet settings. npm and node are not able to connect and download external packages from npm repository with corporate internet settings.

If you are running this app locally for the first time, go to the command line and run
```
npm install
```
to install all dependencies.

After installing all dependencies, run
```
npm start
```
and the app will be running at http://localhost:3000/

To get a production build for this application, enter
```
npm build
```
on your command line and you can find index.html and build.js in the build folder.

This app is created upon [create-react-app](https://github.com/facebookincubator/create-react-app), [antd](https://ant.design/), [react](https://facebook.github.io/react/), [expressjs](http://expressjs.com/)