Following is a brief explanation and instructions on how to run this capstone Project for my Code You webdevelopment course.

This project stemmed from a request a personal friend who works in law enforcement positioned to me about having a non government monitored place for his precinct to leave notes on their daily interactions with the community. 
They want to be able to put realistic notations based on what occured during their call out into the field so everyone would know whats going on and where. 

In order to run this project you need to make sure you have node.js installed and usable as we will be running the project off a local host and not the live server from visual studio. 
When you pull down the project make sure you run npm install from the capstone folder to make sure all components are installed from the project. 
Use npm start in the terminal to launch the local host. If it doesnt load the server address is https://localhost8080

You should load into a page telling you to register. This page will allow you register your email and password for a login to the website. 
After registration it will flip page to the login screen for you to test out your newly registered information. 

Once logged in it will direct you to the landing page for the website with a brief explanation of the projects concept and you will see two pages to switch between. In the future there will be an archives page and there is some code in the project for it
however it is not finished and will be in a future update. 

You will want to direct yourself to the Submission page and check out how to put info in from a call while working in the field as a police officer. 
You can enter a date, input an address, and give an explanation of the call you were on for others to see. These will update to the page in order submitted throughout the day and persist through the day currently in local storage. They will
in the future pull down from the api using the firestore database. 

These are all the functions currently available with the webpage. 
This project utilizes a live feed in the form of a table filled in with arrays. The arrays push into themselves each time you load the page to make sure that it updates ALL information from the day regardless of user. 
My APi is googles firebase API and it is currently running the registration and the authentication for the page, and in the future will house the database for the feed page and archives. 

Future updates will include:
Database storing and retrieval for the feed page.
Images on each page including the Seal for the local county.
Printing of User ID with each submission inline so you can see whos call it was. 

THank you so much for checking out my project and any and all feed back is wanted and appreciated!
