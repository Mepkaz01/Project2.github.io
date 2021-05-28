# Project2.github.io

# App Name: My Calendar Idea

Everyone has a basic need for keeping track of events and planning out their daily activities. Sometimes those daily activities need to be shared with others. The goal of the project is to have a digital personal planner with multiple users with their own log in, profile page and events page. Future enhancements will be to add a Calendar table and add the functionality for users to share events by creating groups. 

[My Calendar](https://github.com/Mepkaz01/Project2.github.io.git)

## User Stories

1) Users should sign up with unique email 
2) Email will be used as username
3) Users should be able to edit and delete their profile
4) Calendar entries should have description date and time
5) Users should be able to update and delete calendar entries
6) Calendar should have user information as well as calendar entry with date and time

## ERD

![image](https://user-images.githubusercontent.com/82845234/119193755-1b1d7f00-ba50-11eb-93f9-b83853fa6795.png)

## Bronze Level

*Views*
1) Main Page - Index
2) User Login Page 
3) User Signup Page
4) Events Page - with user information to be able to add/update/delete with fields such as title, location, date and time. 

## Silver Level
*Views*
1) Have events edit and delete functionality within the Events Page
2) User's choice of wallpaper for their profile and events page

## Gold Level

1) Get users to create groups for shared events
2) Get notification alerts when an event is coming up


## Technologies Used

In your terminal (gitbash or command prompt)
1) Create a repo on GitHub and clone to one of your files
2) Install Node.Js and Express
    * npm init
    * npm install express
    * change entry point to server.js
    * npm install nodemon
    * npm run start
3) Install EJS, Method-Override and Body-Parser
    * npm install ejs
    * npm install method-override
    * npm install body-parser
4) [Download Postgres](https://www.postgresql.org/download/)
5) Run psql in the terminal by entering psql -U postres
6) Install Sequelize, create database in psql, model generate and model seed
    * npm install sequelize
    * npm install pg 
    * npx sequelize
    * npx sequelize init
    * create database in psql by running CREATE DATABASE calendar_dev in psql
    * npx sequelize model:generate --name --attributes
    * npx sequelize db:migrate
    * npx sequelize seed:generate --name demo
    * npx sequelize db:seed:all
7) To undo migrate and seed
    * npx sequelize db:migrate:undo
    * npx sequelize db:seed:undo:all


## Existing Features

* Users have their own login
* Users are able to edit/delete their access within the same page
* Events are shown by user id
* Users are able to view/add/update/delete events within the same page

## Planned Features

* Instead of having an events page, have a calendar table that includes events
* Users to be able to add/update/delete from calendar table
* Functionality to create groups so users can share events
* notification alerts

## Collaborators

* Casey Harding
* Sources I used to help me throughout the project:
  * https://sequelize.org/v3/
  * www.w3schools.com for CSS
  * wwww.geeksforgeeks.org for on focus function in events/index.ejs

##### Screenshot
![image](https://user-images.githubusercontent.com/82845234/119907866-40622f80-bf1f-11eb-9526-4ee27453dc87.png)


