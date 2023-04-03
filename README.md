# [Helsinki City Bike App](https://helsinki-citybikess.netlify.app/)
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
* [React Query](https://tanstack.com/query/v3/)
Instead of using useEffect hook, React Query is my new favourable auto-managed queries.
* [React Router](https://reactrouter.com/en/main)
Besides navigating seamlessly between each page, I also use useParams hook for accessing dynamically params from current Single Station URL. 
* [Material UI](https://mui.com/material-ui/react-table/)

### [Home Page](#home-page)
 - Homepage was shown by introducing Helsinki City Bike headline animated by [Framer Motion](https://github.com/framer) lib. It was displayed also the hero video which were cut from Helsinki City Bike's Youtube video.
   
 <img width="200" alt="mobile view" src="https://user-images.githubusercontent.com/44481142/228831098-7f07299a-4b0e-426a-acaa-f9708dcedc35.png">

    
 - For better user interface, Tooltip and Skeleton MUI components are added for providing briefly about search-by-typing function and for showing initial loading data respectively.  
### [Journeys Page](#journey-page)
#### [Recommended](#Recommended)
 <img width="400" alt="Screenshot 2023-03-30 at 15 19 20" src="https://user-images.githubusercontent.com/44481142/228834347-e3af3016-3e4f-405d-bbc4-4f59497a483a.png">


#### [Additional](#Additional)
- <b>Searching-by-typing</b> journey departure and return.
<img width="300" alt="searchbytyping" src="https://user-images.githubusercontent.com/44481142/228831346-86391847-0509-46f6-b8c1-559eac116bb1.png">

---
- <b>Pagination</b> with customized option to choose how many rows per page: 
<img width="500" alt="Screenshot 2023-03-30 at 18 13 00" src="https://user-images.githubusercontent.com/44481142/228882820-8dd3afd3-e480-4ff7-91b0-3b8f1171e95f.png">

---
- <b>Ordering per column</b> You can click on table headers's name and it automatically order alphabetically, even with distance and duration: 

<img width="500" alt="ordering" src="https://user-images.githubusercontent.com/44481142/228853957-7d832e4d-5bae-43d8-a17e-8af2d6e862e2.png">

---
### [Stations Page](#station-page)

<img width="300" alt="stationtable" src="https://user-images.githubusercontent.com/44481142/228830907-63f18a82-3326-47ad-9785-8c6fde72044b.png">

#### [Recommended](#Recommended)
 - <b>Searching-by-typing</b> station name and address.
<img width="300" alt="searchbytyping" src="https://user-images.githubusercontent.com/44481142/228831199-66bf5c5b-42c6-4cea-aca5-3a92fb5a2772.png">

---
  - <b>Ordering per column</b>: by clicking on the Header Name or Address, columns will be ordered automatically alphabetically.

 <img width="200" alt="Screenshot 2023-03-30 at 15 12 26" src="https://user-images.githubusercontent.com/44481142/228832434-acdf3830-55ef-4cd7-a168-bd49982bf85f.png">

---
  -  <b>Paginating</b> for huge rows of data with customized option to choose how many rows per page: 

<img width="300" alt="pagination" src="https://user-images.githubusercontent.com/44481142/228831249-7431f2ff-7e3e-4d0b-bfdb-30865820bc13.png">


#### [Additional](#Additional)
### [Single Stations View](#single-station-view)
#### [Recommended](#Recommended)
 * Total number of journeys starting from the station
 <img width="800" alt="example2" src="https://user-images.githubusercontent.com/44481142/228785848-535da001-5d75-4ebf-b36b-c87db73e5120.png">

 * Total number of journeys ending at the station
 
<img width="800" alt="example1" src="https://user-images.githubusercontent.com/44481142/228785874-f170c1d6-4b49-40f6-bd0b-92105f20f1e6.png">

#### [Additional](#Additional)
 - Top 5 most popular departure stations for journeys ending at the station by query
<img width="800" alt="departure" src="https://user-images.githubusercontent.com/44481142/228786802-a469a210-404b-41fc-b9f8-75f9061d34dd.png">

 - Top 5 most popular return stations for journeys starting from the station by query: 
 <img width="800" alt="return" src="https://user-images.githubusercontent.com/44481142/228786829-a7c10c1e-143a-4d1f-8d7e-11901cf0a15a.png">


## [Back End](https://github.com/linhngkh/helsinki-bike-backend)
> [Link Backend](https://github.com/linhngkh/helsinki-bike-backend)
### [Handling Data](#datahandling)
* To find and remove journeys that lasted for less than 10 seconds in MongoDB:

``db.Journeys.find({ Duration:  { $lt: 10 }}).pretty()``

``db.Journeys.deleteMany({ Duration: { $lt: 10 }} )``
* To find and remove journeys that covered distances shorter than 10 meters in MongoDB:

``db.Journeys.find({ Covered_distance:  { $lt: 10 }}).pretty()``

``db.Journeys.deleteMany({ Covered_distance: { $lt: 10 }} )``
### [Database](#Database) 
  - MongoDB NoSQL database is chosen to hold a huge amount of data. 
  - Mongoose under the hood is chosen for building  straight-forward both journey + station Schema.
  
### [API Fetching](#api)
- Express.js is chosen for creating fast REST API and structured routings.
- When working with data in backend, I also make pagination to avoid crashing by querying: 
``db.Journeys.find().skip().limit()``
## [Testing](#testing)
Cypress E2E testing was implemented to see user interface routings from first time a user visits home page, then going through Journey and finally Station page to find/ search for all information by interacting with table.
## [Project Reflection](#Project-reflection)
- [*What was my motivation? Why did I build this project?*](#motivation)

This pre-assignment is the best time challenge for full stack coding. I am really fond of learning how to work with map or transportation app because normally I use map app everyday and I get to search for journeys/stations, so yeah I wonder and figure it out how it work under the hood. In addition, I would want to challenge myself with this assignment after a while learning programming, especially focusing on front-end skills and avoiding tutorial hell. 

Another motivation is I would want to be recognized by my skills both front-end and back-end, although my experience in this field is roughly just one year. Truly I have gained a lot of new knowledge through this challenge; learning by doing it persistently. Through this pre-assignment, I think I am the perfect one for Solita Dev Academy as I still get to learn a lot of thing and complete myself to become more improved and skilled developer. 
This is my fav quote:
<strong>``Dreamer and Doer are the same.``</strong>

Thank you for who created this assignment and your time and consideration. 
-  [What was challenges I met?](#challenges)

As a coder, I also builds and break things to find the best solution for the app both front-end and back-end. I changed from one way of doing to another one to see if it works better and this leads to time-consuming or even conflicts??. I also met a lot of bugs but thanks to Stack Overflow, I could handle those bugs.
- [What did I learn?](#lession)

This is the first time I handle a huge amount of database & API and this assignment has sharpened my skills in finding and using some complex MongoDB queries. 

I learn to deploy backend on Docker because not only I want to surprise you but also I see how useful Docker is.

This is the first time I get to know and execute Cypress Testing and the task is really fun and informative. It seems to be the same when I use Chrome Dev Tool to debug errors. 

I know that my app is still incomplete as a normal travel app, both frontend and backend. Therefore, there still be a ground for improving it in the future.
- [Project Improvement](#improvement)
Some features I hope to implement in the future is about:  
  * concentrate on unit testings for all components functionally.
  * create more endpoints / routings for user finding info.
  * ensure handle error middleware for each user routing context if they search for more info.


## [License](#License)
Journey data file and video are own by [City Bike Finland](https://www.citybikefinland.fi/)

Station data file is owned by [HSL](https://public-transport-hslhrt.opendata.arcgis.com/datasets/helsingin-ja-espoon-kaupunkipy%C3%B6r%C3%A4asemat-avoin/explore)

Material UI components is belonged to [Material UI](https://mui.com/material-ui/react-table/) follow by MIT License 





