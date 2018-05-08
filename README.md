# Reign Design App Test

## Pre-requisites
1. node and npm or yarn package manager installed.
2. mongo database running in localhost in the default mongo port.

## Running the app
1. Clone the repo and cd into it.
2. Type the command `yarn install` or `npm install` and hit enter to install the packages.
3. Type the command `yarn start` or `npm start` and hit enter to run the app.
4. Point your browser to http://localhost:3000/ to see the app running.

## Description
This is an app that fetches the most recent posts in hacker new using this url:
```
https://hn.algolia.com/api/v1/search_by_date?query=nodejs
```
The app fetch the content on the api every hour, you can read and delete the posts.
