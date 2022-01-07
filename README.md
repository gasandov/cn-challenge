# CN Challenge

## How to run the project

Either you can choose to run the client and the server into its folder by:

1. Client: execute `cd client && yarn start`
   1. Or: on root folder `yarn dev:client`
2. Server: execute `cd client && yarn dev`
   1. Or: on root folder `yarn dev:server`
3. Both: on root folder run `yarn dev`

## Root Libraries

1. concurrently: just to run both projects at the same time

## Client Libraries

1. MUI: I prefer to work with a styling library (since I'm not a UX guy my imagination is not good)
2. axios: I like that axios allows to create of instances holding specific headers or base URL that can be reused across the application

## Server Libraries

1. express: One of the most popular middle layer libraries and the one that I've used the most
2. nodemon: allows hot reload on server
3. yup: I prefer not re-invent the well and use libraries for validations
4. dotenv: read env variables
5. cors: needed to communicate client with the server
6. newsapi: since this server is a middle layer between the client and the actual API I preferred to use their API

## Supported Routes

1. GET /docs
2. POST /api/news
3. POST /api/news/headlines

## Notes

- API Key was provided by email
