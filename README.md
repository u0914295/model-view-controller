# model-view-controller


The application follows the Model-View-Controller (MVC) paradigm and was built using following libraries:
- `express-handlebars` for the views.
- `MySQL2` and `Sequelize` for modeling the database.
- `dotenv` to manage environment variables.
- `bcrypt` to hash passwords and ensure security.
- `express-session` and `connect-session-sequelize` for user authentication and session management.

The models for `User`, `Post`, and `Comment` are correctly defined in the `models` directory, the routes and controller logic are placed under the `controllers` directory, and the views have been created using Handlebars templates in the `views` directory.

To install and run the application locally, please make sure NodeJS and MySQL are installed on your machine.

After cloning the repository to your local machine, simply run `npm install` to install all the necessary Node modules needed for the application to run.

You'll need to set up a `.env` file in the root of the application with the following variables:

```
DB_NAME='tech_blog_db'
DB_USER='your_username'
DB_PW='your_password'
```

You can start the server by running the command `npm start`.
