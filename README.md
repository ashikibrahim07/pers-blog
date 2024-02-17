# Personal Blog

Welcome to my personal blog repository! This repository contains the source code for my personal blog, built using Node.js, Express.js, EJS, and PostgreSQL.

## Getting Started

Follow these steps to set up the project on your local machine:

### Prerequisites

Before you begin, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or later)
- [PostgreSQL](https://www.postgresql.org/) (v12 or later)

### Installation

1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/ashikibrahim07/pers-blog.git
   ```
   
2. **Navigate to the Project Directory**:
```bash
cd pers-blog
```

3.**Install Dependencies:**
```bash
npm install
```

4.**Set Up PostgreSQL Database**:

- Create a new PostgreSQL database.
- Update the database connection configuration in app.js with your database credentials.
 
### Running the Application
Once you've completed the installation steps, you can start the application:
```bash
npm start
```
The application should now be running at http://localhost:4000.

### Usage
- Visit http://localhost:4000 in your web browser to view the blog homepage.
- Use the navigation links to explore different sections of the blog, create new posts, edit existing posts, and more.
  
### Database Setup
By default, the application is configured to use a local PostgreSQL database. However, if you plan to deploy the application to a remote server, you'll need to update the database connection settings in `app.js` to point to your remote database instance.

### Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository, make your changes, and submit a pull request.

### Author
Ashik Ibrahim S

### License
This project is licensed under the MIT License.
