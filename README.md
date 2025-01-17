# Mix-It-Up
This is a mobile friendly app which allows user to make new beverages based on supplies available in their household.

![GitHub last commit](https://img.shields.io/github/last-commit/SepidehAyani/mixitup)  ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/SepidehAyani/mixitup)  ![GitHub watchers](https://img.shields.io/github/watchers/SepidehAyani/mixitup?label=Watch&style=social)  ![GitHub top language](https://img.shields.io/github/languages/top/SepidehAyani/mixitup)  ![GitHub license](https://img.shields.io/badge/license-MIT-blueyellow) <br> 
## User Story 
The user can access a list of alcoholic and non-alcoholic drinks, with their name, pictures, instruction of how to make them and the used ingredients. The user also can choose a favorite drink and add it to their My Favorite Drinks list after they are logged in.

## Table of Contents 
1. [About the Project](#About-The-Project)
1. [Project Links](#Project-Links)
1. [Screenshots](#Screenshots)
1. [Installation](#Installation)
1. [Usage](#Usage)
1. [Project Team](#Project-Team)
1. [Questions](#Questions)
1. [License](#License)

## About The Project

- When user opens the mix-it-up app, they are presented with the homepage, which includes existing list of drinks if any have been posted; navigation links for the homepage and the dashboard; and the option to log in.
- When user clicks on the homepage option, they are taken to the homepage.
- When user chooses to sign up, they are prompted to create a username and password.
- When user clicks on the sign-up button, the user credentials are saved and user is logged into the site.
- When user revisits the site at a later time and choose to sign in, they are prompted to enter my username and password.
- When user is signed in to the site, they can see navigation links for the homepage, the dashboard, and the option to log out.
- When user clicks on the homepage option in the navigation, they are taken to the homepage and presented with existing drinks that include the name of the drink,  and photo of the drink.
- When user clicks on an existing drink, they are presented with the drink name, instruction, ingredients and photo of a drink, and date created for that drink and have the option to leave a comment.
- When user enters a comment and clicks on the submit button while signed in, the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created.
- When user clicks on the dashboard option in the navigation, they are taken to the dashboard and presented with any drinks that have already created and the option to add a new drink.
- When user clicks on the rating stars, they are able to give a rating to a drink.


## Project Links
[Repo Link](https://github.com/SepidehAyani/mixitup) <br>
[Deployed Project](https://mixitupapp.herokuapp.com/)

## Screenshots
![Project Preview](main/assets/images/overview.png)

## Instructions

```
git clone https://github.com/SepidehAyani/mixitup.git
In the root directory of the project, run 'npm i' to download the dependencies.
Initiate the database with 'mysql -u root -p'.
To create tables, run 'source db/schema.sql'.
Exit the mysql terminal, and run 'npm run seed' to insert data into the tables.
Run 'npm start' to start your server.
```
Make sure to add a .env file to the root of the app with the following details:
```
DB_NAME='mixitup'
DB_USER='user'
DB_PW='xxx'
```
#### Languages and libraries used in this project:
- <a href="https://www.npmjs.com/">NPM</a>
- <a href="https://www.npmjs.com/package/uuid">UUID</a>
- <a href="https://nodejs.org/">Node.js</a>
- <a href="https://www.npmjs.com/package/mysql2">MySQL2</a>
- <a href="https://www.npmjs.com/package/express">Express.js</a>
- <a href="https://getbootstrap.com/">Bootstrap</a>
- <a href="https://sequelize.org/">Sequelize</a>
- <a href="https://fonts.google.com/">Google Fonts<a>
- <a href="https://www.npmjs.com/package/raty-js">Raty-js<a>


## Usage
Mix-It-Up allows users to:
- sign-up, login, and logout.
- see a list of available drinks with their names, instructions and ingredients.
- see a list of favorite drinks and add to the list.

## Questions
<details>
    <summary>Contacts</summary>
    claire.rosenfrisk@gmail.com <br>
    kevin_wilde564@yahoo.com <br>
    sepid.ayani@gmail.com <br>
</details>

## Project Team
[Claire Rosenfrisk](claire.rosenfrisk@gmail.com) <br>
[Kevin Wilder](kevin_wilde564@yahoo.com) <br>
[SepidehAyani](https://github.com/SepidehAyani) <br>

## License
#### Distributed under the MIT License. See [Choose A License](https://choosealicense.com/) for more details.