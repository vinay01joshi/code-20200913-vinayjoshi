[![Node.js CI](https://github.com/vinay01joshi/code-20200913-vinayjoshi/actions/workflows/node.js.yml/badge.svg)](https://github.com/vinay01joshi/code-20200913-vinayjoshi/actions/workflows/node.js.yml)

# About the Project

Node Application to Process the Json.

## NPM Package depency

- ### Dev
  - nodemon
- ### Project
  - express
  - jsonfile
  - http-status-codes

### How to run project

- Paste your input Json file inside project below location

  - `/app/data/large.json`

- Run command to install dependency and run the project on local

  - `npm install` and then run `npm run dev`

  - Hit the endpoint with `GET` http attribute
  - localhost:3000/processor

- Processoed Json you can find in below location

  - `/app/data/processed-large.json`

### How to run automated test on the project

- `npm test`
