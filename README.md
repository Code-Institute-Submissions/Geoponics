# Geoponics Horticulture site

## Overview

### What is this site for?

For this site I asked a friend interested in their own website to be a client. We had some sessions discussing what they would like to see in this sort of project. They wanted a site to showcase their horticulture workshops and allow users to view pictures, info about the company and send message's to arrange booking. 

### How will i use this site?

The end user will be someone interested in horticulture and would find the site searching for workshops online, look at the site's projects, gallery and info and then be able to make an informed decision for what they would like to participate in.
 
### How will it work? 
 
The site will be made using an Angular framework as well as bootstrap and jquery libraries. Styling will be done with Bootstrap/Flex/Grid.

## Design Process

For the desgin process i wanted the website to be as acessible as possible as the client has specified to have easy to read text, large menu buttons and a simple layout.

While some of the elements in my UI are similar to bootstrap, such as my navbar, I was interested to try and work out how some of these objects use JS and Jquery to achieve interesting effects. I did use bootstrap/angular bootstrap elements in the project as well, because of their really useful quick functionality.

For the Gallery i was interested in "infinite" scrolling galleries that i had seen using Jquery and JS. I felt this fitted with the simple visual design that i was going for. A decided to try make my own custom design for this. The end result does have some small bugs if the user resize's the screen very rapidly and in other places. When loading on individual devices it works well.

To keep the workshop screen simple and easily acessible i implemented a text search function so users could try to search for a keyword related to anything horticulture that might be in the workshops description.

The color scheme was chosen to be neutral, simple and work well with the kind of natural plant pictures that would be found on the site.
The images from the gallery and workshops page are images taken from google. However the macro-images used for the Homepage and headers were specially taken to all have the same style and tie the website together.

The UX was designed so that the user would find the website's homepage, be searching or having it saved. If they are a newcomer to the site, they will hopefully read through the hompage's info on what Geoponics does as an organisation. If they are interested the links at the bottom will allow them to navigate to the part of the site where they feel they need more info, the gallery or workshops page. Users who have already the visited the site before will use the navbar from the homepage to traverse to an area of the site they have previously used, i.e booking or the workshop page to book again.

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

### problems

due to the way angular routing works i could not get links in my home.html to work even though they are coded the same way angular describes in my index.html file.
