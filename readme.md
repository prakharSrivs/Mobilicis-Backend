# Backend Routes for Internship Assignment
This repository contains the solution to an assignment problem given as a part of the internship program. The backend of the solution is developed using Node.js and MongoDB, and provides the following routes:

# /assignment/0
This route is used to fetch all the data available in the MongoDB database.

# /assignment/1
This route is used to fetch users who have income lower than $5 USD and have a car of brand "BMW" or "Mercedes".

# /assignment/2
This route is used to fetch male users who have phone price greater than $10,000.

# /assignment/3
This route is used to fetch users whose last name starts with "M" and has a quote character length greater than 15 and email includes his/her last name.

# /assignment/4
This route is used to fetch users who have a car of brand "BMW", "Mercedes" or "Audi" and whose email does not include any digit.

# /assignment/5
This route is used to fetch the data of top 10 cities which have the highest number of users and their average income.

# /uploadData
This route is used to upload the data from the given JSON file into the MongoDB database. The JSON file should be in the format provided in the sample_data.json file.

# Installation
To install and run this application, follow these steps:

Clone the repository to your local machine using the command git clone https://github.com/yourusername/your-repo-name.git.
Navigate to the root directory of the project using cd your-repo-name.
Install the necessary dependencies using npm install.
Start the server using npm start.
The server will start running at http://localhost:3000. You can now use the provided routes to fetch data from the MongoDB database.