# BG Api Server

> Yeoman generator for creating a restful api server using MongoDB, Express and Node.

## Usage

Install `generator-bg-api`:
```
npm install -g generator-bg-api
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo bg-api`, optionally passing an app name:
```
yo bg-api [app-name]
```

Run `grunt` for building, `grunt serve` for preview, and `grunt serve:dist` for a preview of the built app.

## Prerequisites

* MongoDB - Download and Install [MongoDB](http://www.mongodb.org/downloads) - If you plan on scaffolding your project with mongoose, you'll need mongoDB to be installed and have the `mongod` process running.

## Supported Configurations

**Server**

* Database: `None`, `MongoDB`
* Authentication boilerplate: `Yes`, `No`
* oAuth integrations: `Facebook` `Twitter` `Google`
* Socket.io integration: `Yes`, `No`


### Endpoint
Generates a new API endpoint.


Example:
```bash
yo bg-api:endpoint message
[?] What will the url of your endpoint to be? /api/messages
```

Produces:

    server/api/message/index.js
    server/api/message/message.controller.js
    server/models/message.model.js
    server/api/message/message.socket.js (optional)


#### Pushing Updates

    grunt

## Bower Components

None.  This is all backend baby.

## Configuration
Yeoman generated projects can be further tweaked according to your needs by modifying project files appropriately.

A `.yo-rc` file is generated for helping you copy configuration across projects, and to allow you to keep track of your settings. You can change this as you see fit.



Use `grunt test:e2e` to have protractor go through tests located in the `e2e` folder.

## Environment Variables

Keeping your app secrets and other sensitive information in source control isn't a good idea. To have grunt launch your app with specific environment variables, add them to the git ignored environment config file: `server/config/local.env.js`.

## Project Structure

Overview

    └── server
        ├── api                 - Our apps server api
        ├── models               - For handling authentication with different auth strategies
        ├── auth                - For handling authentication with different auth strategies
        ├── components          - Our reusable or app-wide components
        └── config              - Where we do the bulk of our apps configuration
            └── local.env.js    - Keep our environment variables out of source control
            └── environment     - Configuration specific to the node environment



## License

[BSD license](http://opensource.org/licenses/bsd-license.php)


## Special Thanks
This generator is based off of the 2.x version of AngularJS Full-Stack generator [![Build Status](https://travis-ci.org/DaftMonk/generator-angular-fullstack.svg?branch=master)](http://travis-ci.org/DaftMonk/generator-angular-fullstack).  
After that it got too Gulpy and fancy for me.
