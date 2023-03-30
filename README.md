# Helsinki City Bike App
A web-page to show journey and station bike information of Finland in mobile friendly version. 
## Project Description
This project is the pre-assignment for [Solita Dev Academy Finland 2023](https://github.com/solita/dev-academy-2023-exercise).
## Table of Contents 
1. [Development environment](#development-environment)
2. [Front End](#front-end)
    * [Home Page](#home-page)
    * [Journey Page](#journey-page)
    * [Station Page](#station-page)
3. [Back End](#back-end)
    * [Handling Data](#handling-data)
    * [Database](#database) 
    * [API Fetching](#api-fetching)
4. [Testings](#testing)
5. [Project Reflection](#project-reflection)
6. [License](#license)


## Development environment
### Requirement
To run the site locally, I recommend using:
``node.js v18``
### Environment setup
1. Install Node.js
2. Clone the repository:
<strong>```git clone https://github.com/linhngkh/helsinki-bike-frontend.git```</strong>
 Or you could download repo zip file instead.
3. From within the repository directory, run: <strong>``yarn``</strong> to install all necessary dependencies.
### Commands
<strong>``yarn dev``</strong>
To get local server run. Opens system default browser to ``http://localhost:5173/``. 

<strong>``yarn build``</strong>
To build development version of the UI to ``./dist``folder.

<strong>``yarn deploy``</strong>
To build and deploy to Netlify.

The customized script is: 
```
"deploy": "vite build && netlify deploy --prod"
```
## Front End
The frontend is made with React.js combined with Vite for faster dev-server and web development, managed by Yarn package. In term of mobile interface, this app also works well and responsive.

Main Dependencies: 
* [API Fetching](https://tanstack.com/query/v3/)
Instead of using useEffect hook, React Query is my new favourable auto-managed queries.
* [React Router](https://reactrouter.com/en/main)
Besides navigating seamlessly between each page, I also use useParams hook for accessing dynamically params from current Single Station URL. 
* [Material UI](https://mui.com/material-ui/react-table/) 

### [Home Page](#home-page)
Homepage was shown by introducing Helsinki City Bike headline animated by Framer Motion lib. It was displayed also the hero video which were cut from Helsinki City Bike's Youtube video.
    
### [Journeys Table](#journey-table)
#### Recommended
  - <b>Searching</b> by typing journey departure and return.
#### Additional
### [Stations Table](#station-table)
#### Recommended
 - <b>Searching</b> by typing station name and address.

Station Table component with useful built-in Material UI components and functions:
  -  <b>Ordering per column</b>: by clicking on the Header Name or Address, columns will be ordered automatically alphabetically.
  -  <b>Paginating</b> for huge rows of data
#### Additional
### [Single Stations View](#single-station-view)
#### Recommended
 * Total number of journeys starting from the station
 <img width="1003" alt="example2" src="https://user-images.githubusercontent.com/44481142/228785848-535da001-5d75-4ebf-b36b-c87db73e5120.png">

 *Total number of journeys ending at the station
<img width="880" alt="example1" src="https://user-images.githubusercontent.com/44481142/228785874-f170c1d6-4b49-40f6-bd0b-92105f20f1e6.png">

#### Additional
 - Top 5 most popular departure stations for journeys ending at the station by query
<img width="1182" alt="departure" src="https://user-images.githubusercontent.com/44481142/228786802-a469a210-404b-41fc-b9f8-75f9061d34dd.png">

 - Top 5 most popular return stations for journeys starting from the station by query: 
 <img width="1180" alt="return" src="https://user-images.githubusercontent.com/44481142/228786829-a7c10c1e-143a-4d1f-8d7e-11901cf0a15a.png">


## Back End
### [Handling Data](#datahandling)
* To find and remove journeys that lasted for less than 10 seconds in MongoDB:

``db.citybikeCollection.find({ Duration:  { $lt: 10 }}).pretty()``

``db.citybikeCollection.deleteMany({ Duration: { $lt: 10 }} )``
* To find and remove journeys that covered distances shorter than 10 meters in MongoDB:

``db.citybikeCollection.find({ Covered_distance:  { $lt: 10 }}).pretty()``

``db.citybikeCollection.deleteMany({ Covered_distance: { $lt: 10 }} )``
### [Database](#Database) 
  - MongoDB NoSQL database is chosen to hold a huge amount of data. 
  - Mongoose under the hood is chosen for building  straight-forward both journey + station Schema.
  
### [API Fetching](#api)
- Express.js is chosen for creating fast REST API and structured routings.
- When fetching data from database, I also make pagination to avoid crashing by querying: 
``db.citybikesCollection.find().skip().limit()``
## [Testing](#testing)
## [Project Reflection](#reflection)
- [*What was my motivation? Why did I build this project?*](#motivation)

This pre-assignment is the best time challenge for full stack coding. I am really fond of learning how to work with map or transportation app because normally I use map app everyday and I get to search for journeys/stations, so yeah I wonder and figure it out how it work under the hood. In addition, I would want to challenge myself with this assignment after a while learning programming, especially focusing on front-end skills and avoiding tutorial hell. 

Another motivation is I would want to be recognized by my skills both front-end and back-end, although my experience in this field is not long. Truly I have pushed myself to limitless. Through this pre-assignment, I think I am the perfect one for Solita Dev Academy as I still get to learn a lot of thing and complete myself to become more improved and skilled developer. 
This is my fav quote:
``Dreamer and Doer are the same.``

Thank you for who created this assignment and your time and consideration. 
-  [What was challenges I met?](#challenges)

As a coder, I also builds and break things to find the best solution for the app both front-end and back-end. I changed from one way of doing to another one to see if it works better and this leads to time-consuming or even conflicts??. I also met a lot of bugs but thanks to Stack Overflow, I could handle those bugs.
- [What did I learn?](#lession)


This is the first time I handle a huge amount of database & API and this assignment has sharpened my skills in using some MongoDB queries. 

I learn to deploy backend on Docker 


I know that my app is still incomplete as a normal travel app, both frontend and backend. Therefore, there still be a ground for improving it in the future.
- [Project Improvement](#improvement)
Some features I hope to implement in the future is about concentrating on unit testings for component functional.


## [License](#License)
Journey data file and video are own by [City Bike Finland](https://www.citybikefinland.fi/)

Station data file is owned by [HSL](https://public-transport-hslhrt.opendata.arcgis.com/datasets/helsingin-ja-espoon-kaupunkipy%C3%B6r%C3%A4asemat-avoin/explore)







