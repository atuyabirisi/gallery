### Project Overview

This project focuses on building a Jenkins Declarative Pipeline to automate the deployment of a Node.js application to Render, integrated with MongoDB Atlas, automated testing, Slack notifications, and Git version control.

By connecting Jenkins to Slack, the team receives instant notifications on build successes or failures — promoting faster collaboration and quicker issue resolution.

### Highlights

- Automates builds and deployments using Jenkins
- Integrates Slack for real-time pipeline notifications (success/failure).
- Configures Github webhook to trigger the Jenkins pipeline on every push
- Uses ngrok to expose Jenkins running locally (Github webhooks require live urls)
- Implements continuous delivery with automatic updates to the Render deployment once the pipeline runs successfully

#### Requirements to Run Project Locally

- Node.js v18+
- npm
- Database MongoDB Atlas
- Jenkins (running as a container)
- ngrok - for generating a public URL for Github webhooks
- Github webhook configured to point to the Jenkins server(using the Jenkins public URL).
- Slack integration with Jenkins

---

#### Setup Instructions

Follow the following steps to run this project locally

1. **Fork** the repository to your Github account.

2. **Clone** the forked repository to your local machine
   ```bash
     git clone https://github.com/atuyabirisi/gallery.git
   ```
3. **Install Dependencies**
   ```bash
     npm install
   ```
4. **Configure Environment Variables**
   Create a .env file at the root of the project and set the following variables

   ```bash
     NODE_ENV=<development | test | production
     PORT=<port number>
     DB_URL_DEV=<your_mongodb_connection_string>
     DB_URL_PROD=<your_production_mongodb_connection_string>
     DB_URL_TEST=<your_test_mongodb_connection_string>
   ```

5. **Set up Jenkins**

- Install Jenkins locally to run as a container via Docker
- Install additional required plugins: Slack Notificaiton

6. **Expose Jenkins with ngrok**

- You will get a public URL.

7. **Configure Github Webhook**

- On the repo -> settings -> webhooks
- Add new webhook with:
  - payload url = ngrok-jenkins-url/github-web-hook/
  - content type = application/json
  - Trigger - just the push event

8. **To Have the Jenkins Pipeline run**

- Make any changes to the project - make a commit and push the changes to github
- Headover to the exposed Jenkins to view the running pipeline and slack for success or failure notifications

9. **Run the Application locally - this is optional**
   ```bash
    npm start
   ```

#### Deployment url

When the pipeline completes successfully, the deployment on Render updates automatically, ensuring continuous delivery.

[deploment url](https://devops-ip-1.onrender.com/)
