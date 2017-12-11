# Geoponics Horticulture site

## Overview

### What is this site for?
 
This is a horticulture workshope website, it allows users to view and book workshops and projects based around plants.
 
### What does it do?
 
This site will allow users to view previous projects, a gallery or projects photos, see what workshops are available at different times of the year and then make a booking.
 
### How does it work
 
The site will be made using an Angular framework as well as bootstrap and jquery libraries. Styling will be done with Bootstrap/Flex/Grid
 
## Features
 
### Existing Features
- Home page with broad information about the project and its aims.
- A gallery page with an infinite scrolling image feature, which uses a limited selection of images at the moment.
- A Workshops page which includes lots of information on the different activites available with the organisation.
- A booking page whre users can leave a message with the site with contact details and other info. 
 
## Tech Used

### Some the tech used includes:
- [AngularJS](https://angularjs.org/)
    - We use **AngularJS** to handle page routing, we also use it to make calls to the REST API and build custom directives
- [Bootstrap](http://getbootstrap.com/)
    - We use **Bootstrap** to give our project a simple, responsive layout
- [npm](https://www.npmjs.com/)
    - We use **npm** to help manage some of the dependencies in our application
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of our libraries and frameworks
 
## Contributing
 
### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request
