# Spotify Clone Task

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://spotify-clone-mohan.s3.us-east-2.amazonaws.com/index.html#)

## In order to use this service you need to be registered as a user on my client id.
## you can mail me your email id so that I can give you access to the application.

## Flow

- Login
- Authentication page
- Landing Page
- Getting the details from API and displaying.
- Logout

## Tech Used

- React
- Context API [State Management]
- CSS for styling
- spotify-web-api [npm]
- react-indiana-drag-scroll [npm]
- AWS S3 [deployment]

## Quick Read

- This Application is working is hosted on AWS.
  Link: https://spotify-clone-mohan.s3.us-east-2.amazonaws.com/index.html#

- This works fine with the desktop view.

- Used only css for styling.

- It has login page which asks for authentication. you are only able to use this application if you have spotify account.
  once authenticated it will take you to the landing page.

- Landing page give basic details like you name and information like playlist name, weekly and recent trends.
  This details are fetched from spotify api
  Link: https://developer.spotify.com/documentation/

<!-- ![login](https://user-images.githubusercontent.com/47236609/143733550-5fa0ba28-5b2d-4b4a-a0a6-b2652a69000a.png) -->
<img src="https://user-images.githubusercontent.com/47236609/143733550-5fa0ba28-5b2d-4b4a-a0a6-b2652a69000a.png" width="700">

- After login put the user details to redirect it to the landing page
- Click on the agree buttton and it will be redirected to the landing page.

<!-- ![Screenshot from 2021-11-28 13-14-01](https://user-images.githubusercontent.com/47236609/143734117-d6d1a66b-ed32-4ca6-91b5-3293695d7ee0.png) -->
<img src="https://user-images.githubusercontent.com/47236609/143734117-d6d1a66b-ed32-4ca6-91b5-3293695d7ee0.png" width="700">

- This is the lnading page and all your spotify details will be displayed here on the screen.

<!-- ![landing](https://user-images.githubusercontent.com/47236609/143734171-88c14278-c69b-464e-b7e2-cbba7cca2f21.png) -->
<img src="https://user-images.githubusercontent.com/47236609/143734171-88c14278-c69b-464e-b7e2-cbba7cca2f21.png" width="700">

- click on the logout to get unauthorized and wlll redirect to the Landing page.

<!-- ![logout](https://user-images.githubusercontent.com/47236609/143734212-0cb85069-c406-40cc-9c27-82c9568c70a1.png) -->
<img src="https://user-images.githubusercontent.com/47236609/143734212-0cb85069-c406-40cc-9c27-82c9568c70a1.png" width="700">

- Logout redirects to the login page
