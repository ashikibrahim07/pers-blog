# PersBlog

Welcome to my personal blog repository! This repository contains the source code for my personal blog, which I built using Node.js, Express.js, EJS, Bootstrap, and PostgreSQL. As one of the Capstone Projects in my Udemy course, this blog represents a culmination of my learning journey.

While the application currently uses a local PostgreSQL database, I have plans to deploy it to a remote database for improved scalability and accessibility. By migrating to a remote database, I aim to ensure that the blog remains responsive and available to users regardless of geographical location or traffic volume.

One of the key features of this blog is its ability to create, edit, and delete posts. This functionality empowers users to share their ideas and experiences dynamically, contributing to a vibrant and engaging platform. Whether it's crafting a new blog post, updating existing content, or removing outdated information, users have the flexibility to manage their content efficiently.

I'm excited to continue developing and refining this project, and I welcome contributions and feedback from the community. Together, let's create a dynamic and engaging platform for sharing ideas and experiences.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Usage](#usage)
  - [Database Setup](#database-setup)
- [Video Demo](#video-demo)
- [Snapshots](#snapshots)
  - [Home page](#home-page)
  - [Create Post Section](#create-post-section)
  - [About Me](#about-me)
  - [Contact](#contact)
- [Author](#author)
- [Contributing](#contributing)
- [License](#license)
  
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



# Video Demo

You can view the video demo of the personal blog [here](https://www.youtube.com/watch?v=cs0L2dWsQkQ).

# Snapshots

## Home page
![Home page](https://github.com/ashikibrahim07/pers-blog/blob/main/Screenshot%20(378).png)

## Create Post Section
![Create Post](https://github.com/ashikibrahim07/pers-blog/blob/main/Screenshot%20(375).png)

## About Me Section 
![About me](https://github.com/ashikibrahim07/pers-blog/blob/main/Screenshot%20(376).png)

## Contact Page
![Contact](https://github.com/ashikibrahim07/pers-blog/blob/main/Screenshot%20(377).png)

### Author
Ashik Ibrahim S

### Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository, make your changes, and submit a pull request.

### License
This project is licensed under the MIT License.



