# serenX-bot

## Project Overview
A slack bot built with NodeJs.

## App Links
> [Heroku-serenX link](https://serenx-bot.herokuapp.com/).

> [ApI documentation](https://app.getpostman.com/dpxy/collections/14516533-04ee0918-be4d-4693-a898-f8d18999cb64?workspace=254905b7-8d86-4e2f-842f-a90e4096dc02)

## API routes
1. `https://serenx-bot.herokuapp.com/`- Home route returns a welcome message
2. `https://serenx-bot.herokuapp.com/slack/serenx`- triggers the slack bot with dash command.
3. `https://serenx-bot.herokuapp.com/slack/interactions`- Returns with payload that contains users input.

## Required Features
1. Trigger the bot using a slash command or "@bot".
2. Saying "Hello @bot" or using the slack command should return a response to the user saying "Welcome. How are you doing?"
3. Bot should present a drop down/list/other input method in Slack for the user to select/input “Doing Well” , “Neutral, “Feeling Lucky” 
4. After user selects response, bot should pop another question asking “when are you free this week for a walk?” Bot should present a drop down/list/other input method in Slack for the user to select/input two time slots (12:00, 12.30, 13:00...up to 18.00) & various days of the week - in 30 minute increments
5. After user selects response, bot should pop another question asking “What are your favorite hobbies” Bot should present an input method in Slack for the user to select multiple input “Football”, “Music” “Sleep”, “Movies”, “Basketball”
6. After user selects response, bot should pop another question asking “What are the first 3 digits on the number scale?” Bot should allow user type in free text as a response.
7. After user selects response, bot should say “thank you”. 
The bot should store each response above in the db

## Technologies Used
- [Node.js](https://nodejs.org) - A runtime environment based off of Chrome's V8 Engine for writing Javascript code on the server.
- [Express.js](https://expressjs.com) - Web framework based on Node.js.
- [MongoDb](https://mongodb.com) - An non relational database.
- [Babel](https://babeljs.io) - Javascript transpiler.
- [SlackAPI](https://api.slack.com/)

### Installation
- Install [NodeJs](https://nodejs.org/en/download/)
- Create a database from [MongoDb](https://mongodb.com)
- Clone this repository using `https://github.com/evansinho/serenX-bot.git`
- Run `npm install` to install all dependencies.
- Setup Ngrok for local development.
- Run `npm run dev` to start the server.

## Authors
- Evanson Igiri. 🤠
