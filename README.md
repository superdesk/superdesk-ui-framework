# Superdesk UI Framework

### Status
[![Build Status](https://travis-ci.com/superdesk/superdesk-ui-framework.svg?branch=master)](https://travis-ci.org/superdesk/superdesk-ui-framework)
[![Netlify Status](https://api.netlify.com/api/v1/badges/baf374b3-b994-4563-b4f0-f61e83c4e33a/deploy-status)](https://app.netlify.com/sites/inspiring-pasteur-fc7efb/deploys)

### Documentation
Documentation page can be accessed via this link: https://ui-framework.superdesk.org/

### Install and connect
To install the package via npm use

```
npm install --save superdesk-ui-framework
```

After installation, the ui-framework distributive files will be available as

```
import 'superdesk-ui-framework'
```

To use it in your angular-app you should add the module (modules)

```
angular.module('application', ['superdesk-ui'])
```

### React modules
To import react modules in your application, just use
```
import {LineInput} from 'superdesk-ui-framework'
```

### Contributing
1. Fork repo https://github.com/superdesk/superdesk-ui-framework
2. Clone `git clone https://github.com/superdesk/superdesk-ui-framework`
3. `npm install` to install dependencies
4. `npm start` to run server locally
5. Files are served on `localhost:9100`

### Creating playgrounds
1. Create new `your-playground.html` file in `examples/playgrounds`
2. Define new settings for your playground in `examples/index.js`:
```
.when('/playground/your-playground', {
    title: 'My Playground',
    playground: 'main', // can be publisher or react also
    template: require('../examples/playgrounds/your-playground.html')
})
```
3. Open your playground in browser

### Continuous Development
If you want to develop new components and see live changes on your project, you need to link `superdesk-ui-framework` with your project.
1. In `superdesk-ui-framework` project folder run `npm link`
2. In your project folder run `npm link superdesk-ui-framework`
3. Start `superdesk-ui-framework` with `npm run server` command.
3. All changes on superdesk-ui-framework project are now automatically updated in your project

### Testing
Runing `e2e&unit` tests
```
npm run lint
```
