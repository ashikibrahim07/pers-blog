# PersBlog

Welcome to my personal blog repository! This repository contains the source code for my personal blog, which I built using Node.js, Express.js, EJS, Bootstrap and PostgreSQL. As one of the Capstone Projects in my Udemy course, this blog represents a culmination of my learning journey.

While the application currently uses a local PostgreSQL database, I have plans to deploy it to a remote database for improved scalability and accessibility. By migrating to a remote database, I aim to ensure that the blog remains responsive and available to users regardless of geographical location or traffic volume.

I'm excited to continue developing and refining this project, and I welcome contributions and feedback from the community. Together, let's create a dynamic and engaging platform for sharing ideas and experiences.

![Snapshot of PersBlog]([https://example.com/path/to/your/snapshot/image.jpg](https://github.com/ashikibrahim07/pers-blog/blob/main/Screenshot%20(184).png))

## Getting Started

Follow these steps to set up the project on your local machine:

### Prerequisites

Before you begin, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or later)
- [Express.js](https://expressjs.com/) (v4 or later)
- [EJS](https://ejs.co/) (v3 or later)
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
