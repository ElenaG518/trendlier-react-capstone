# Trendlier-react-capstone | Thinkful front-end part of the React Capstone
Trendlier allows the user to search for the top 10 trending items for several categories on Best Buy.   For each category, the client can then add notes to items before saving them to her wishlist, or purchase them by following a link.  Once an item is included in the wishlist, the client can also edit notes or delete each item.   

live version:   https://trendlier-client-capstone.herokuapp.com/

## Screenshots

Home Page View | Registration Page
:-------------------------:|:-------------------------:
![Home Page](https://github.com/ElenaG518/trendlier-react-capstone/blob/master/github-images/landing-page.png)  |  ![Registration Page](https://github.com/ElenaG518/trendlier-react-capstone/blob/master/github-images/registration-page.png)
Sign In | Search Page
![Sign In](https://github.com/ElenaG518/trendlier-react-capstone/blob/master/github-images/signin-page.png)  | ![Search Page](https://github.com/ElenaG518/trendlier-react-capstone/blob/master/github-images/search-page.png)
Results | Add Entry
![Results](https://github.com/ElenaG518/trendlier-react-capstone/blob/master/github-images/results-page.png) |  ![Add Item](https://github.com/ElenaG518/trendlier-react-capstone/blob/master/github-images/add-note-item-to-wishlist.png) 
Wish List | Edit Item
![Wishlist](https://github.com/ElenaG518/trendlier-react-capstone/blob/master/github-images/wishist%20item.png) |  ![Edit Item](https://github.com/ElenaG518/trendlier-react-capstone/blob/master/github-images/edit-item.png) 


### UI Flow
![UI Flow handwritten draft](https://github.com/ElenaG518/trendlier-server-capstone/blob/master/github-images/flow.jpg)

### Wireframe 
Homepage| Results Page
:-------------------------:|:-------------------------:
![Landing Page](https://github.com/ElenaG518/trendlier-server-capstone/blob/master/github-images/landingpage.jpg)| ![Results Page](https://github.com/ElenaG518/trendlier-server-capstone/blob/master/github-images/results.jpg)

Item View| Wishlist View
:-------------------------:|:-------------------------:
![Item View](https://github.com/ElenaG518/trendlier-server-capstone/blob/master/github-images/single.jpg)| ![Wishlist View](https://github.com/ElenaG518/trendlier-server-capstone/blob/master/github-images/wishlist.jpg)

Edit Wishlist Item
![Edit Wishlist Item](https://github.com/ElenaG518/trendlier-server-capstone/blob/master/github-images/edit.jpg)

## Working Prototype
You can access a working prototype of the node app here: https://trendlier-server-capstone.herokuapp.com/ and react app here: 
https://trendlier-client-capstone.herokuapp.com/



## Functionality
The app's functionality includes:
* User can search for the top ten trending items according to the Best Buy API
* Every User has the ability to create an account that stores information unique to them
* User can Add, Update, and Delete items to her wishlist 
* User can follow a link to purchase item directly from Best buy

## Technology
* Front-End: HTML5 | CSS3 | JavaScript ES6 | React | Redux | Enzyme
* Back-End: Node.js | Express.js | JWT Authentication | Bcrypt | Passport | Mocha | Chai | RESTful API Endpoints | MongoDB | MLab | Mongoose | Travis CI



## Responsive
App is strongly built to be usuable on mobile devices, as well as responsive across mobile, tablet, laptop, and desktop screen resolutions.

## Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
* Ability to compare different items in same category

#  The typical command lines for capstone projects

## Node command lines
* npm install ==> install all node modules
    * npm install --save bcryptjs body-parser cors express mongodb mongoose passport passport-http unirest
    * npm install --save-dev chai chai-http mocha faker
* nodemon server.js ==> run node server
* npm test ==> run the tests

## React command lines
* npm install ==> install all node modules
    * npm install --save bcryptjs body-parser cheerio chokidar-cli concurrently core-js cors cpr enzyme enzyme-react-16-adapter-setup express http-server jsonwebtoken moment mongodb mongoose morgan npm-run-all passport passport-http passport-jwt passport-jwt-strategy react react-addons-test-utils react-dom react-fontawesome react-redux redux redux-thunk rimraf unirest
    * npm install --save-dev acorn babel-cli babel-core babel-loader babel-plugin-transform-object-rest-spread babel-polyfill babel-preset-es2015 babel-preset-react chai chai-enzyme chai-http enzyme-adapter-react-15 enzyme-adapter-react-16 faker json-loader mkdirp mocha react-scripts react-test-renderer sinon sinon-chai webpack
* npm run build ==> build the react files in the "build" folder
* npm start ==> run react server on http://127.0.0.1:8080
* npm test ==> run the tests