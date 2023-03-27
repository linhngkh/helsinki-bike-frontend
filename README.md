# Helsinki Bike App
## Project Description
## Table of Contents 
1. [Install and Run the Project](#install-and-run-the-project)
2. [Front End](#front-end)
    * [Home Page](#home-page)
    * [Journey Page](#journey-page)
    * [Station Page](#station-page)
3. [Back End](#back-end)
    * [Data Validating](#home-page)
4. [API Testing](#api-testing)
5. [Project Reflection](#project-reflection)
6. [License](#license)


## Install and Run the Project

## Front End
The frontend is made with React.js combined with Vite for faster dev-server and web development, managed by Yarn package. 

In term of mobile interface, this app also works well and responsive.

Main Dependencies: 
* [API Fetching](#https://tanstack.com/query/v3/)
Instead of using useEffect hook, React Query is my new favourable auto-managed queries.
* [React Router](#https://reactrouter.com/en/main)
Besides navigating seamlessly between each page, I also use useParams hook for accessing dynamically params from current Single Station URL. 
* [Material UI](#https://mui.com/material-ui/react-table/) 

### [Home Page](#home-page)
Homepage was shown by introducing Helsinki City Bike headline animated by Framer Motion lib. It was displayed also the hero video which were cut from Helsinki City Bike's Youtube video.
    
### [Journeys Table](#journey-table)
Journey Table component is shown with with useful Material UI components and functions: 
  - <b>Searching</b> by typing Departure and Return names
  -  
### [Stations Table](#station-table)
Station Table component with useful Material UI components and functions:
  -  <b>Ordering per column</b>: by clicking on the Header Name or Address, columns will be ordered automatically alphabetically.
  -  <b>Paginating</b> for huge rows of data

## Back End
### [Handling Data](#datahandling)
I handled data before actually exporting database by using Excel Microsoft FILTER function for journey distance less than 10 meters and journey duration less than 10 minutes.
### [Database](#Database) 
  - MongoDB NoSQL database is chosen to hold a huge amount of data. 
  
  - Mongoose under the hood is chosen for building  straight-forward both journey + station Schema.
### [API Fetching](#api)
Express.js is chosen for creating fast API and structured routings.

When fetching data from database, I also make pagination to avoid crashing by querying: 
``db.citybikesCollection.find().skip().limit()``
## [Testing](#testing)
## [Project Reflection](#reflection)
-  [What was challenges I met?](#challenges)
- [What did I learn?](#lession)
- [Project Improvement](#improvement)

## [License](#License)




