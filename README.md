### Project Overview

This project focused on building a Jenkins Declarative Pipeline to automate the deployment of a Node.js application to Render, integrated with MongoDB Atlas, tests, Slack notifications, and Git version control. The work was structured into four milestones, each adding new capabilities to the pipeline.

In addition to Jenkins, I also demonstrated core Git workflows, including:

- Forking and cloning a repository.

- Adding changes to the staging area.

- Committing with meaningful messages.

- Pushing changes to GitHub to trigger the Jenkins pipeline.

Once the pipeline completed successfully, the deployment on Render was automatically updated, ensuring continuous delivery.

#### Features

- Upload images
- View uploaded images
- Server-side rendering using EJS

---

#### Required

- Node.js v18+
- npm
- MongoDB Atlas or local MongoDB instance

---

#### Setup

1. **Fork** the repository to your Github account.

2. **Clone** the forked repository to your local machine
   ```bash
     git clone https://github.com/atuyabirisi/gallery.git
   ```
3. **Install Dependencies**
   ```bash
     npm install
   ```
4. **Environment Variables**
   ```bash
     NODE_ENV=<development | test | production
     PORT=<port number>
     DB_URL_DEV=<your_mongodb_connection_string>
     DB_URL_PROD=<your_production_mongodb_connection_string>
     DB_URL_TEST=<your_test_mongodb_connection_string>
   ```

#### Deployment url

[deploment url](https://devops-ip-1.onrender.com/)
