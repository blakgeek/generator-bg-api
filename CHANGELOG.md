<a name="v2.0.13"></a>
### v2.0.13 (2014-08-29)


#### Bug Fixes

* **gen:**
  * use bool for bootstrap filters ([a5decbc3](http://github.com/DaftMonk/generator-angular-fullstack/commit/a5decbc36e933f94c69d9e9bb58bd8e07148c34d), closes [#496](http://github.com/DaftMonk/generator-angular-fullstack/issues/496))
  * fix build when not selecting socket.io ([fdf063c6](http://github.com/DaftMonk/generator-angular-fullstack/commit/fdf063c6cc2ec4eeef252f13b2e0d301931fa83c))

<a name="v2.0.12"></a>
### v2.0.12 (2014-08-25)

#### Bug Fixes

* revert multiple strategies per account, which shouldn't go in a patch release

<a name="v2.0.11"></a>
### v2.0.11 (2014-08-25)


#### Bug Fixes

* **app:** Use parentheses to fix string concat in config ([c6a50ce7](http://github.com/DaftMonk/generator-angular-fullstack/commit/c6a50ce791ab633a17654ce9b0090007d7152463), closes [#466](http://github.com/DaftMonk/generator-angular-fullstack/issues/466))
  * improve jshint usage ([35fcf490](http://github.com/DaftMonk/generator-angular-fullstack/commit/35fcf4902dbbdab2ca6b394ab87ef8e3cc3d052b), closes [#463](http://github.com/DaftMonk/generator-angular-fullstack/issues/463), [#486](http://github.com/DaftMonk/generator-angular-fullstack/issues/486))
* **gen:** use more restrictive version range for ng-component ([19698973](http://github.com/DaftMonk/generator-angular-fullstack/commit/196989730c8922fa5e1dc9caa45eb85052535e30))


#### Features

* **socket.io:** build socket.io into vendor.js ([06f2e46e](http://github.com/DaftMonk/generator-angular-fullstack/commit/06f2e46ef382b5af1691f34b6cf504f1e5640b86))
* **docs:** Inform users/developers of the `canary` branch ([74693623](http://github.com/DaftMonk/generator-angular-fullstack/commit/74693623eb23c9399495a3baff7e3479a1d9f3ba))
* **gen:** make generator tests faster, and easier to run ([84acb744](http://github.com/DaftMonk/generator-angular-fullstack/commit/84acb7448ccc7c55b72bdd19bfae50c33d527296))
* **app:** add additional node version to travis.yml ([e4f00b08](http://github.com/DaftMonk/generator-angular-fullstack/commit/e4f00b083a880713ca563e3447b9fb3f56a54ebc))
* **uibootstrap:** add basic modal service and template when using uibootstrap ([7c14bed4](http://github.com/DaftMonk/generator-angular-fullstack/commit/7c14bed4873b92124bcbe422fed918836b8f5df5))

<a name="v2.0.10"></a>
### v2.0.10 (2014-08-16)


#### Bug Fixes

* **server:** undefined domain env variable causing issues ([cb683dde](http://github.com/DaftMonk/generator-angular-fullstack/commit/cb683dde6814959328a58267215ce477aa723e35))

<a name="v2.0.9"></a>
### v2.0.9 (2014-08-15)


#### Bug Fixes

* **app:**
  * add .idea folder to gitignore ([2e1f1182](http://github.com/DaftMonk/generator-angular-fullstack/commit/2e1f1182684594300ac5ca85ffab175bfcafd3ec))
  * Missing user response code ([c1766604](http://github.com/DaftMonk/generator-angular-fullstack/commit/c1766604d7ae7ab1eb8713f37285d13341dc8ae1))
  * use `''` instead `null` as URL to open ioSocket ([0f0d0fdc](http://github.com/DaftMonk/generator-angular-fullstack/commit/0f0d0fdce38d42f04f71d9e1174400adfb699061))
  * save the version of the generator that was used ([2b76b17b](http://github.com/DaftMonk/generator-angular-fullstack/commit/2b76b17bb5fa1980b449498beec87ab58ceee012))
* **gruntfile:** incorrect path to index.html for cdnify ([0ad646cb](http://github.com/DaftMonk/generator-angular-fullstack/commit/0ad646cbd48dbb2f65fc00b930a9f243174611be))
* **openshift:** fix issues with openshift deployment ([ace07238](http://github.com/DaftMonk/generator-angular-fullstack/commit/ace07238e3299d6002337ba12f7862ce84beafd8))


#### Features

* **gen:** add automatic demo releases with grunt task ([44852233](http://github.com/DaftMonk/generator-angular-fullstack/commit/44852233fcf28d5ff8681fcabc3bfb4130778a22))
* **gruntfile:** add grunt buildcontrol tasks to app, for easier deployment ([036478df](http://github.com/DaftMonk/generator-angular-fullstack/commit/036478dfd7067d38ab19ca86c0c5196678412799))
* **heroku:** provide prompt to set the deployment region ([13cd5e7d](http://github.com/DaftMonk/generator-angular-fullstack/commit/13cd5e7d42f2845268f38ba19e0d253ae675c594))
* **server:** add sample env config file that can be tracked by git ([c9f80bcd](http://github.com/DaftMonk/generator-angular-fullstack/commit/c9f80bcd67d6e3eef2c78ccbceff78f763ae88d1))

<a name="v2.0.8"></a>
### v2.0.8 (2014-07-31)


#### Bug Fixes

* **coffee:** update socket service to match javascript version ([c27cefe2](http://github.com/DaftMonk/generator-angular-fullstack/commit/c27cefe24d8ec64d905f908c66a56bf602303dce))
* **gen:** Fixed missing `oauth` property in `.yo-rc.json` after 2.0.5 update ([11d324b9](http://github.com/DaftMonk/generator-angular-fullstack/commit/11d324b95992b68bd19f402401e98f5936cdb343))
* **travis:** install sass gem if sass is enabled ([ceeac27b](http://github.com/DaftMonk/generator-angular-fullstack/commit/ceeac27b8f912aa6dec2caf3bf20dd7551f2d754))
* **twitter:** revert mongoose connection change ([8675a002](http://github.com/DaftMonk/generator-angular-fullstack/commit/8675a002e301957569374fdcad87aab0bff6b3b4))


#### Features

* **user-management:** use the User $resource to populate users for the admin page ([708f0729](http://github.com/DaftMonk/generator-angular-fullstack/commit/708f07290d98d6bd73723f9db49cce7758c3d12b))

<a name="v2.0.7"></a>
### v2.0.7 (2014-07-27)


#### Bug Fixes

* **gruntfile:** grunt tasks should run if no local config exists ([422d6bca](http://github.com/DaftMonk/generator-angular-fullstack/commit/422d6bca07283057b0fa275dba0de447c9f4f167))
* **server:** fix setting TTL index on collection : sessions error ([0581ed09](http://github.com/DaftMonk/generator-angular-fullstack/commit/0581ed094b2c6141ab9e0c016eda22aa49e1d075))

<a name="v2.0.6"></a>
### v2.0.6 (2014-07-27)


#### Bug Fixes

* **app:** 
  * `things` made a little bit more responsive ([58aa7a48](http://github.com/DaftMonk/generator-angular-fullstack/commit/58aa7a489ae28c22be59b3a61db027ccf2f1ae46))
* **dependencies:** change ngmin to ng-annotate ([dd023fa5](http://github.com/DaftMonk/generator-angular-fullstack/commit/dd023fa5fd90b8b541b8cc60c87186ee619e4844))
* **bootstrap:** removed styles breaking responsiveness for high-res screens ([053fedb8](http://github.com/DaftMonk/generator-angular-fullstack/commit/053fedb89f64294a55538ad9b806b2d7de4d1c7f))
* **socketio:** fallback for servers where `socket.handshake.address` is not provided ([f6a19348](http://github.com/DaftMonk/generator-angular-fullstack/commit/f6a19348ad404aa72c31eef8dc84aac8db0e904a))
* **stylus:** remove bootstrap css import in stylus when bootstrap is not selected ([f7c3d0ad](http://github.com/DaftMonk/generator-angular-fullstack/commit/f7c3d0ad41da5f0072c2cf64ff5c9a894052d194), closes [#368](http://github.com/DaftMonk/generator-angular-fullstack/issues/368))


#### Features

* **oauth:** remove code according to user prompts ([316bd9dd](http://github.com/DaftMonk/generator-angular-fullstack/commit/316bd9dd3632622b0fb434cacfc4150f01d18e4c))

<a name="v2.0.5"></a>
### v2.0.5 (2014-07-17)

#### Bug Fixes

* **account:** add authentication requirement for settings view ([9105c0fd](http://github.com/DaftMonk/generator-angular-fullstack/commit/9105c0fdbabdbde68fb6cf0fe0d6993ead6e7095), closes [#327](http://github.com/DaftMonk/generator-angular-fullstack/issues/327))
* **app:**
  * use correct path for font awesome and glyphicons ([1917ba31](http://github.com/DaftMonk/generator-angular-fullstack/commit/1917ba31264fc90bea0fce36b8d144f897e8bf08))
  * wait for currentUser to resolve before checking if logged in on route changes ([6d6090d9](http://github.com/DaftMonk/generator-angular-fullstack/commit/6d6090d9c4dcd5d8a1f6ecb2cf5dc0bb4c8598fe))
  * bootstrap glyphicons not correctly linked on grunt build ([53d193d0](http://github.com/DaftMonk/generator-angular-fullstack/commit/53d193d011c7c1ea8c9477e8f17ad56cc4214362))
* **dependencies:** include certain dependencies only when answering yes to their respective prompts ([040c57de](http://github.com/DaftMonk/generator-angular-fullstack/commit/040c57de8689f2e0fc35410d0b6935363aaa8458))
* **server:**
  * fix seeding of db in test mode causing tests to randomly fail ([05f7f433](http://github.com/DaftMonk/generator-angular-fullstack/commit/05f7f43372bc3bd54bead811952b775adeec1f05))
  * make user tests run more consistently ([addb5061](http://github.com/DaftMonk/generator-angular-fullstack/commit/addb5061f62696c7a0078a8d2c7443d428e69376))
  * warnings that express was using deprecated features ([8dc2f1e4](http://github.com/DaftMonk/generator-angular-fullstack/commit/8dc2f1e48503c27cbd2aac3c455adac7781a6539))
  * missing `res` param for handleError ([eb7d50c8](http://github.com/DaftMonk/generator-angular-fullstack/commit/eb7d50c8d27820a6b26caf2a1aaa0e4fa8eee367))

#### Features

* **app:** 
  * added oath buttons to signup page ([a408f58e](http://github.com/DaftMonk/generator-angular-fullstack/commit/a408f58edb923cd14bf7c7b3411b874dce5f0724))
  * upgrade socket.io to use v1.0.6
* **gen:**
  * add option for Stylus as a preprocessor ([1b90c448](http://github.com/DaftMonk/generator-angular-fullstack/commit/1b90c448fbf374287fe07f782f9788dfb9a23613))
  * make bootstrap and bootstrap ui optional ([f50d0942](http://github.com/DaftMonk/generator-angular-fullstack/commit/f50d094226fdbf6a7e65ba3783a26efc8544ba08))

<a name="v2.0.4"></a>
### v2.0.4 (2014-07-08)


#### Bug Fixes

* **app:** fix dependency injection minsafe problem in auth service coffeescript. ([03742a80](http://github.com/DaftMonk/generator-angular-fullstack/commit/03742a8000f19efdf14791ff1aae52a90e86c149))
* **gen:** heroku and openshift generators requiring .yo-rc file to work ([88ebfc8c](http://github.com/DaftMonk/generator-angular-fullstack/commit/88ebfc8c835ac6ec04b6d42fcf9357cfb0bcc47d))

<a name="v2.0.3"></a>
### v2.0.3 (2014-07-04)


#### Bug Fixes

* **server:** only enable sessions if twitter oauth was selected ([bcd00dc0](http://github.com/DaftMonk/generator-angular-fullstack/commit/bcd00dc02d270486adafe6dbf973a4ec25499a5e))

<a name="v2.0.2"></a>
### v2.0.2 (2014-07-02)

#### Bug Fixes

* **gen:endpoint**
    * fix endpoint spec not properly adjusting to users route url
    * fix some valid route urls causing failing tests
    
<a name="v2.0.0"></a>
## v2.0.0 (2014-07-02)

#### Features

* **app:**
    * Follow googles AngularJS project recommendations to make a very modular app structure.
    * New look for generated app
    * Add basic crud interface to app
    * Support for UI Router
    * Support for LESS
    * Built in support for protractor e2e tests
    * Add angular-bootstrap and lodash to default app
    * More consistent and understandable naming conventions for files
* **server:**
    * Modular project structure for express server
    * Support for social auths with facebook/twitter/google
    * Role based authentication
    * Replace session based authentication with JWT authentication
    * Optional integration with socket.io
    * Added config file, ignored by git, for setting local environment variables, api keys, secrets.. etc.
* **gruntfile:**
    * Optimizations to the gruntfile
    * Automate injection of new scripts into index file with grunt
    * Use ng-templates to concatenate all the html/jade views into the javascript payload
* **gen:**
    * Abstract client-side generators into generator-ng-component, use new composition feature of yeoman to keep them available in the generator.
    * Add useful tests to the generator, start using travis CI
    * use .yo-rc file to keep track of generated configurations
    * Add endpoint generator to angular-fullstack, generates model / route / controller / test / socket updates

#### Breaking Changes
 * New project structure
 * Deprecated value and constant sub generators 
 * Sub-generators generate components in a single directory and don't inject themselves into the index file (this is done by a grunt task now)

<a name="v1.4.3"></a>
### v1.4.3 (2014-05-25)


#### Bug Fixes

* **config:** fix issue where `config.ip` is undefined in non-production environments ([087f5bca](http://github.com/DaftMonk/generator-angular-fullstack/commit/087f5bca1610e8250de50ce11a16e879908e3177))
* **package:** update connect-mongo to correct version
* **app:** add require attribute to login.html inputs so it validates on client side
* **gen:** use lowercase filenames for scripts

<a name="v1.4.2"></a>
### v1.4.2 (2014-04-16)


#### Bug Fixes

* **gen:** typo in heroku generator was preventing it from working on unix based systems ([9d3b5738](http://github.com/DaftMonk/generator-angular-fullstack/commit/9d3b5738528497f74d37d22c304b0d46cd5007fa))

<a name="v1.4.1"></a>
### v1.4.1 (2014-04-15)


#### Bug Fixes

* **server:** 
  * grunt test was incorrectly using dev config, fixes #179 ([62d8492f](http://github.com/DaftMonk/generator-angular-fullstack/commit/62d8492fd9fcfde653bab0f65b46f9961b8016bc))
  * emails are no longer case sensitive ([dafd8db1](https://github.com/DaftMonk/generator-angular-fullstack/commit/dafd8db1f529b86322ef60f65897761cef92841a))

<a name="v1.4.0"></a>
## v1.4.0 (2014-04-13)

#### Features

* **server:** updated Express to v4.x
* **app:** matching angular dependencies to the latest verison, now that bower excludes pre-releases ([94c0c636](http://github.com/DaftMonk/generator-angular-fullstack/commit/94c0c63691976eaf7136c33365f611b465ba7f61))
* **gen:** 
  * Added `angular-fullstack:openshift` generator, for deploying your app to OpenShift
  * Added `angular-fullstack:heroku` generator, which improves upon the former `:deploy` generator for deploying to Heroku

#### Bug Fixes

* **server:** fixed possible DB flushing when mochaTest is called by watch, first call 'env:test' task before 'mochaTest'
([2f0320fe](http://github.com/DaftMonk/generator-angular-fullstack/commit/2f0320feb89f3a5f1757f8adcae4b8c0d5599c95))

#### Breaking Changes

* The `angular-fullstack:deploy` generator is deprecated. Instead use `angular-fullstack:heroku` or `angular-fullstack:openshift`.

<a name="v1.3.3"></a>
### v1.3.3 (2014-03-29)

#### Features

* **server:** enable response compression ([1547ac6f](http://github.com/DaftMonk/generator-angular-fullstack/commit/1547ac6f794ce06d2a9329531bec5dae73441f04))

#### Bug Fixes

* **config:** change default port in config to 9000 ([480515f6](http://github.com/DaftMonk/generator-angular-fullstack/commit/480515f6cc8d7600003a570f9b1f0530fd178ac5))
* **gruntfile:**
  * update gruntfile to use port from config ([c8aa2d5f](http://github.com/DaftMonk/generator-angular-fullstack/commit/c8aa2d5feda90a2c1e7528165b1bd22e9eab5e77))
  * workaround imagemin bug by disabling caching ([3e435fa7](http://github.com/DaftMonk/generator-angular-fullstack/commit/3e435fa74b1574223f129867621a9a800cea2af9))
* **package:** update required generator-karma dependency to the correct version ([0c0e8a52](http://github.com/DaftMonk/generator-angular-fullstack/commit/0c0e8a522ffa94ea0bd9c0df9994c23340a957f7))

<a name="v1.3.2"></a>
### v1.3.2 (2014-03-01)


#### Bug Fixes

* **package.json:** updated dependencies that were causing issues with npm install ([1874cdf1](http://github.com/DaftMonk/generator-angular-fullstack/commit/1874cdf16c9d1670d0492db8db1be77e43222de4))

<a name="v1.3.1"></a>
### v1.3.1 (2014-03-01)


#### Bug Fixes

* **gruntfile:** configured jshint for client tests ([4ee92b9a](http://github.com/DaftMonk/generator-angular-fullstack/commit/4ee92b9a4c466982b171bc777c3ba6ba5a477633))

<a name="v1.3.0"></a>
## v1.3.0 (2014-02-27)


#### Bug Fixes

* **grunt:**
  * fixed clean:dist task ([e390cac0](http://github.com/DaftMonk/generator-angular-fullstack/commit/e390cac015974f691ab51261128b4215e878b25f))
* **server:**
  * config all and env specific are now correctly deep merged ([31039872](http://github.com/DaftMonk/generator-angular-fullstack/commit/31039872caec541847cb80da8edf3c7ffd83ef48))
  * fix configuration so that (express) errorHandler works ([0116cb35](http://github.com/DaftMonk/generator-angular-fullstack/commit/0116cb35524afb2ee5b8a599f6bc76dbe04febc5))


#### Features

* **app:**
  * added `grunt serve:debug` task that launches the server with a node-inspector tab ([de3e7a8b](http://github.com/DaftMonk/generator-angular-fullstack/commit/de3e7a8b7e63c54090c8fbc2f51998965b2e274f))
  * update to bootstrap sass official ([3799c13c](http://github.com/DaftMonk/generator-angular-fullstack/commit/3799c13c3b65fcc2abfbacb5292b192543558d52))
* **server:**
  * added tests for user model ([4c894b65](http://github.com/DaftMonk/generator-angular-fullstack/commit/4c894b65ec6a6d8de2b7290521f25b134ac30f40))
  * added mocha test configuration ([458a2f6a](http://github.com/DaftMonk/generator-angular-fullstack/commit/458a2f6a28485a8791815f8795e726af3c308efe))

<a name="v1.2.7"></a>
### v1.2.7 (2014-02-15)


#### Features

* **server:** undefined api routes now return a 404 ([ec829fe2](http://github.com/DaftMonk/generator-angular-fullstack/commit/ec829fe2221dbe001c12983c95576c20f0e63a30))

<a name="v1.2.6"></a>
### v1.2.6 (2014-02-14)


#### Bug Fixes

* **app:**
  * redirect to login only on 401s ([64b7bace](http://github.com/DaftMonk/generator-angular-fullstack/commit/64b7bacea98e59cb72a44627b57ca331d9bf051d))
  * fixed incorrect css path for usemin in gruntfile ([46fca240](http://github.com/DaftMonk/generator-angular-fullstack/commit/46fca240009d2c61aa07b5cef2275e4095033a10))
* **grunt:** include partial sub-directories in htmlmin ([77564ba3](http://github.com/DaftMonk/generator-angular-fullstack/commit/77564ba3b59baa52546f3b1170ee9cad16b7d413))
* **server:**
  * fixed connect-mongo error ([c12db5b3](http://github.com/DaftMonk/generator-angular-fullstack/commit/c12db5b3e9b7475ba4581f23f9c20e4ce701b855))
  * livereload now waits for server to finish restarting ([71d63f0a](http://github.com/DaftMonk/generator-angular-fullstack/commit/71d63f0a704a2773cee368b1af24c188e04d0ae3))
  * exposed configured passport from passport module ([772133de](http://github.com/DaftMonk/generator-angular-fullstack/commit/772133de1f86c8a6a8c93179673deb4359e30c94))
  * only require models if they are coffescript or js files ([ce2ee236](http://github.com/DaftMonk/generator-angular-fullstack/commit/ce2ee2369ff0c4aedc1a13d04359d918ea1b3d8d))


#### Features

* **deps:** upgrade angular to 1.2.11, and jquery to 1.11.0 ([cd5c3030](http://github.com/DaftMonk/generator-angular-fullstack/commit/cd5c303023f57de423ca69067b1105db17d066e3))
* **app:** switched sass-bootstrap to offical bootstrap-sass ([024fee88](http://github.com/DaftMonk/generator-angular-fullstack/commit/024fee8831c4a32962283878b6b9dbd444874ec0))

<a name="v1.2.5"></a>
### v1.2.5 (2014-01-27)


#### Bug Fixes

* **app:**
  * fixed coffee service so it's min-safe ([c18c9da4](http://github.com/DaftMonk/generator-angular-fullstack/commit/c18c9da4475e8e48507746f441186edf9fde18b1))
  * fixed bootstrap css being imported rather than compass bootstrap ([f2739987](http://github.com/DaftMonk/generator-angular-fullstack/commit/f27399879e84daf7230d9cd953c19e93bcd22746))
* **server:** 
  * replaced deprecated bodyparser ([788fda04](http://github.com/DaftMonk/generator-angular-fullstack/commit/788fda04ebd1ed7d24190aacda44c252fd1ae002))  
  * updated node version dependency ([b19a0997](http://github.com/DaftMonk/generator-angular-fullstack/commit/b19a0997c6db08a47a56069621756129e07c5915))   
* **gen:** updated generator dependencies ([115008d3](http://github.com/DaftMonk/generator-angular-fullstack/commit/115008d378a9fd9cc47561f451cd9153f4f2c566)) 

<a name="v1.2.4"></a>
### v1.2.4 (2014-01-16)


#### Bug Fixes

* **grunt:** fixed incorrect templating expression ([2a59e070](http://github.com/DaftMonk/generator-angular-fullstack/commit/2a59e070bb89abb4ea83e165f8a29b8de94621f1))

<a name="v1.2.3"></a>
### v1.2.3 (2014-01-16)


#### Bug Fixes

* **app:** fixed jshint warning in user model ([f668fdc7](http://github.com/DaftMonk/generator-angular-fullstack/commit/f668fdc7f798e2656a9576f249836f7c91d27f1a))

<a name="v1.2.2"></a>
### v1.2.2 (2014-01-16)


#### Bug Fixes

* **app:**
  * replaced bcrypt with crypto for windows users ([af20c3ab](http://github.com/DaftMonk/generator-angular-fullstack/commit/af20c3ab6fd63e41475175e333810d09b3e9c3ea))
  * added karma dependencies directly to package template ([13ea60e7](http://github.com/DaftMonk/generator-angular-fullstack/commit/13ea60e7ec5763fb7f96900464df1bf26ee6912c))

<a name="v1.2.1"></a>
### v1.2.1 (2014-01-12)

<a name="v1.2.0"></a>
## v1.2.0 (2014-01-11)

#### Features

* **app:**
  * restructured project for easier configuration ([0a2bf2ab](http://github.com/DaftMonk/generator-angular-fullstack/commit/0a2bf2abe04de834c786402b8945d247b4f951aa))
  * grunt build now moves all files into dist folder ([e6eff5d5](http://github.com/DaftMonk/generator-angular-fullstack/commit/e6eff5d56bf2a784feb3de6218e74b5390df319f))
* **server:** added jshint error checking before livereload occurs ([7e001d31](http://github.com/DaftMonk/generator-angular-fullstack/commit/7e001d3156d778022e7b6847cc65934432fb9200))
* **gen:** added passport question for scaffolding out user account creation ([87841064](http://github.com/DaftMonk/generator-angular-fullstack/commit/8784106409e51cddf8fcdc6ab52b1e81137cda19))
   
#### Bug Fixes

* **app:** removed async dependency ([d5636d71](http://github.com/DaftMonk/generator-angular-fullstack/commit/d5636d712a984948fb92b82794681c07d43d830d))
* **gitignore:** fix app/views being ignored by git ([7fa82ff9](http://github.com/DaftMonk/generator-angular-fullstack/commit/7fa82ff953e9f1368b8f9d6c3dadb5fe83bec002))
* **server:**
  * config wasn't added to default project ([79c5e027](http://github.com/DaftMonk/generator-angular-fullstack/commit/79c5e027719507a74497c2f6be77375a513316c4))
  * removed typo and cleaned up extra whitespace ([1a132c28](http://github.com/DaftMonk/generator-angular-fullstack/commit/1a132c2822fd4973068b8beae075d0c8ec3efd42))
  * fixed style issues that were tripping up jshint

#### Breaking Changes

* `grunt heroku` is deprecated. Use `grunt build` instead.

<a name="v1.1.1"></a>
### v1.1.1 (2013-12-25)

#### Bug Fixes 

* **views:**
  * Replaced deprecated jade tags.

#### Features

* **app:**
  * Updgrade to AngularJS 1.2.6

<a name="v1.1.0"></a>
## v1.1.0 (2013-12-22)


#### Bug Fixes

* **app:**
  * only copy CSS if Compass is not installed ([7e586745](http://github.com/DaftMonk/generator-angular-fullstack/commit/7e58674585e138c0f2eb81f46ef2cc4f1b9a3bf8))
  * services use classified names ([56a71a83](http://github.com/DaftMonk/generator-angular-fullstack/commit/56a71a83cdf90f81bb37b422ba4d40e75d28e1fe), closes [#484](http://github.com/DaftMonk/generator-angular-fullstack/issues/484))
  * reload JS files in watch ([d20f5bd2](http://github.com/DaftMonk/generator-angular-fullstack/commit/d20f5bd20ba95d47447f8acceee491a0a0ba9724))
* **build:** deselecting ngRoute does remove route stuff ([a358c1ae](http://github.com/DaftMonk/generator-angular-fullstack/commit/a358c1ae69bff6a7708ea0a77248698f931f2e4d), closes [#486](http://github.com/DaftMonk/generator-angular-fullstack/issues/486))
* **gen:**
  * updated all conflicts, and fixed some bugs, from merging with upstream ([d07c829d](http://github.com/DaftMonk/generator-angular-fullstack/commit/d07c829db283eaa4986774f9664243b50b3b5171))
  * fix bower install prompt during project gen ([706f1336](http://github.com/DaftMonk/generator-angular-fullstack/commit/706f1336852923e409d669ae6fc6faeda7bbb017), closes [#505](http://github.com/DaftMonk/generator-angular-fullstack/issues/505))
* **package:** fix imagemin for windows users ([b3cec228](http://github.com/DaftMonk/generator-angular-fullstack/commit/b3cec228b4354343929ca07fd7225526cdab74d9))
* **views:**
  * fix ng includes ([598c69a5](http://github.com/DaftMonk/generator-angular-fullstack/commit/598c69a594e00f598e0cbd435444bc8abaa0d4ee))
  * add compiled views to gitignore ([087ede5f](http://github.com/DaftMonk/generator-angular-fullstack/commit/087ede5f8e2cef4c49f940ef922d71a51d110d51))
  * fix incorrect build path for vendor css ([0ed2a200](http://github.com/DaftMonk/generator-angular-fullstack/commit/0ed2a20018086fa514846ad2503841f6d5b23e16))


#### Features

* **app:**
  * add jasmine browser global to test jshintrc ([11b6ed42](http://github.com/DaftMonk/generator-angular-fullstack/commit/11b6ed42b5e941f25cc305eb5c4e8ba49586cf64))
  * use lowercase file names ([23e5d772](http://github.com/DaftMonk/generator-angular-fullstack/commit/23e5d7724e7e02e4b974f4e804f35eca33a53aea), closes [#463](http://github.com/DaftMonk/generator-angular-fullstack/issues/463))
  * use htmlmin for smaller HTML files ([2b85a52a](http://github.com/DaftMonk/generator-angular-fullstack/commit/2b85a52a054ac8cf1ab86ce1cd3de7819d30ea52), closes [#469](http://github.com/DaftMonk/generator-angular-fullstack/issues/469))
  * use grunt-bower-install for dep management ([ba7b5051](http://github.com/DaftMonk/generator-angular-fullstack/commit/ba7b505117307059a6d013d838c8aeff6db0e452), closes [#497](http://github.com/DaftMonk/generator-angular-fullstack/issues/497))
  * Enable Node debug mode ([83ae4a9e](http://github.com/DaftMonk/generator-angular-fullstack/commit/83ae4a9e328a388dd61414634ca5e10c8a0c819b))
* **gen:**
  * Added navbar to starting template ([b5e94749](http://github.com/DaftMonk/generator-angular-fullstack/commit/b5e94749384ab9a3305991df62d7ed9856bded83))
  * additional work for compass support ([11cb9943](http://github.com/DaftMonk/generator-angular-fullstack/commit/11cb99437271b6e8f6cdaee8fd5fc9cda7a20d1d))
  * add Compass support to the initialization process ([7fac1194](http://github.com/DaftMonk/generator-angular-fullstack/commit/7fac1194179df3181f52258b0aa7333799fec253))
  * add welcome message and dep notice for minsafe ([f0bb8da2](http://github.com/DaftMonk/generator-angular-fullstack/commit/f0bb8da2d67c3f627bf775e2d4f53340b5c980c4), closes [#452](http://github.com/DaftMonk/generator-angular-fullstack/issues/452))
* **server:** 
  * Added middleware for development mode that disables caching of script files ([c082c81c](http://github.com/DaftMonk/generator-angular-fullstack/commit/c082c81c21a9d8d6fd9fccd5001270759fb2a30f))
  * Moved express configuration code out of server.js and into config folder to make it a more high level bootstrap.


#### Breaking Changes

* Deselecting ngRoute adds controller and
ng-include to index.html
 ([a358c1ae](http://github.com/DaftMonk/generator-angular-fullstack/commit/a358c1ae69bff6a7708ea0a77248698f931f2e4d))
* `--minsafe` flag is now deprecated. 
* `grunt server` is now deprecated. Use `grunt serve` instead

<a name="v1.0.1"></a>
### v1.0.1 (2013-11-27)


#### Bug Fixes

* **coffee:** updated coffescript templates to point to partials ([f98e84ef](http://github.com/DaftMonk/generator-angular-fullstack/commit/f98e84efdd88243cff1ea449dc3a8e9dbebb7ccc))

<a name="v1.0.0"></a>
## v1.0.0 (2013-11-26)


#### Bug Fixes

* **build:**
  * use test-specifc jshintrc ([c00c091b](http://github.com/DaftMonk/generator-angular-fullstack/commit/c00c091bdca2b55685d81a2b84b002d73aacbdcc))
  * add webapp upstream features and better coffee ([c23acebb](http://github.com/DaftMonk/generator-angular-fullstack/commit/c23acebbd8fabd391bfeee0d424f26e59f756a03))
  * use grunt-newer for styles and jshint ([b1eeb68a](http://github.com/DaftMonk/generator-angular-fullstack/commit/b1eeb68a8290aee930887fc473034ee7f8e2ccc3))
  * standardize comments and comment out uglify:dist ([d5d3e458](http://github.com/DaftMonk/generator-angular-fullstack/commit/d5d3e458e70d054707c70d058454fdd3d94070fe), closes [#455](http://github.com/DaftMonk/generator-angular-fullstack/issues/455))
* **deps:** upgrade dependencies ([3a57216f](http://github.com/DaftMonk/generator-angular-fullstack/commit/3a57216ff9e3192db3804634f360253e9fcce69d))
* **gen:**
  * Fixed jshint errors that were breaking grunt task ([c6ae81c8](http://github.com/DaftMonk/generator-angular-fullstack/commit/c6ae81c8110ee59c9099740ea2f90b0d08b810d3))

#### Features

* **app:**
  * Separate client and server watchers ([0ff8ffb1](http://github.com/DaftMonk/generator-angular-fullstack/commit/0ff8ffb105a2eb1cd079fabafc5a6517d62e861d))
  * imagemin handles gifs ([9341eb9b](http://github.com/DaftMonk/generator-angular-fullstack/commit/9341eb9b710b95c95407dc54ed4af6aa4a496426))
* **gen:**
  * added support for jade templates ([24a13bfe](http://github.com/DaftMonk/generator-angular-fullstack/commit/24a13bfea0e4a9633f33e37df4a4710fecdea937))
  * Support for server rendering and Angular's HTML5 mode ([5ccdeb7a](http://github.com/DaftMonk/generator-angular-fullstack/commit/5ccdeb7a5543e35c000a54dfc15289004e406866), closes [#18](http://github.com/DaftMonk/generator-angular-fullstack/issues/18), [#17](http://github.com/DaftMonk/generator-angular-fullstack/issues/17))
  * add image file as example ([b161c298](http://github.com/DaftMonk/generator-angular-fullstack/commit/b161c2982d86df1bb3de44cd9fa8aee05fc66ff3))
* **build:**
  * compile only changed coffeescript files in watch task ([4196e379](http://github.com/DaftMonk/generator-angular-fullstack/commit/4196e37912993ae37812fa19d9378d8b8d2cc9da), closes [#425](http://github.com/DaftMonk/generator-angular-fullstack/issues/425))
  * deprecate server in favor of serve ([ef056319](http://github.com/DaftMonk/generator-angular-fullstack/commit/ef0563192a9e3fc834ae97e7ec68470bcfdf56eb))

#### Breaking Changes

* `angular-fullstack:route`
* `angular-fullstack:view`

Will now generate views and routes in the views/partials folder.

**For existing projects:**

For generating routes and views, install generator-angular and use     it's sub-generators. 

They are exactly the same as the generators that you have been using. Example usage: `yo angular:route helloworld`.

**For New projects:**

Continue to use angular-fullstack route and view sub-generators.

The reason for this change in folder structure was to support server page rendering.


Closes #18, #17
 ([5ccdeb7a](http://github.com/DaftMonk/generator-angular-fullstack/commit/5ccdeb7a5543e35c000a54dfc15289004e406866))

* `grunt server` is being deprecated
 ([ef056319](http://github.com/DaftMonk/generator-angular-fullstack/commit/ef0563192a9e3fc834ae97e7ec68470bcfdf56eb))

<a name="v0.2.0"></a>
## v0.2.0 (2013-11-13)


#### Bug Fixes

* **bootstrap:** some plugins have ordering dependencies ([3da4a130](http://github.com/DaftMonk/generator-angular-fullstack/commit/3da4a1301e0b744c7a6054fafff26fff16b6442b))
* **build:** only include sass if sass is selected ([597b8b5c](http://github.com/DaftMonk/generator-angular-fullstack/commit/597b8b5cfab77b78e7f6091140beda2eeee0ed54), closes [#449](http://github.com/DaftMonk/generator-angular-fullstack/issues/449))
* **css:** remove merge conflicts ([d558af35](http://github.com/DaftMonk/generator-angular-fullstack/commit/d558af351c8a531132ce064a461bc038e0710b25))
* **gen:**
  * script paths use forward slashes ([40aa61dc](http://github.com/DaftMonk/generator-angular-fullstack/commit/40aa61dcc1bf31918bea3d2ce9a84c93554aa64a), closes [#410](http://github.com/DaftMonk/generator-angular-fullstack/issues/410))
  * remove extra "App" from service spec files ([4053f11f](http://github.com/DaftMonk/generator-angular-fullstack/commit/4053f11f800280569f5b7396ad015f0a6bcc7b49))
  * options should have descriptions ([da001832](http://github.com/DaftMonk/generator-angular-fullstack/commit/da001832dbdb268b3bf38f359c72b40c401273e4))
* **styles:** update path to icon images ([8daad4f2](http://github.com/DaftMonk/generator-angular-fullstack/commit/8daad4f2de9dbde4fcc810527da7c9607e1db8d4))
* **template:** remove redundant closing tag ([d1e560e0](http://github.com/DaftMonk/generator-angular-fullstack/commit/d1e560e0675ecb70e6c4b59cf4de9df461434a31), closes [#441](http://github.com/DaftMonk/generator-angular-fullstack/issues/441))


#### Features

* **app:**
  * run unit tests when test scripts are changed ([94af0b51](http://github.com/DaftMonk/generator-angular-fullstack/commit/94af0b510982b05c5a1939966e96aeccce087500))
  * update to angular 1.2.0 ([77082c6b](http://github.com/DaftMonk/generator-angular-fullstack/commit/77082c6b8d1dda76579f1970a270dffc359f027f))
  * reload grunt server when gruntfile is updated ([50c6abb9](http://github.com/DaftMonk/generator-angular-fullstack/commit/50c6abb9cce09a149253ceb8496feca813a71136))
  * upgrade to Bootstrap 3.0.1 ([59f4b1ba](http://github.com/DaftMonk/generator-angular-fullstack/commit/59f4b1ba73842b758174ad44a7da60af4f4db63f))
* **gen:**
  * allow app names to have custom suffix ([09f0f7b3](http://github.com/DaftMonk/generator-angular-fullstack/commit/09f0f7b3a8c3264b7527bc9fed8c709becec99eb))


<a name="v0.1.0"></a>
## v0.1.0 (2013-11-12)

#### Features

* **gen:** include MongoDB as an option When selected, sets up database with Mongoose. Repl ([280cc84d](http://github.com/DaftMonk/generator-angular-fullstack/commit/280cc84d735c60b1c261540dceda34dd7f91c93c), closes [#2](http://github.com/DaftMonk/generator-angular-fullstack/issues/2))