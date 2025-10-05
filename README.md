#### Continuous Deployment Pipeline Overview

This project demonstrates a Continuous Deployment (CD) pipeline built with Jenkins to automate the full software delivery process — from code commit to live deployment. Once a push is made to the main branch on GitHub, a configured webhook triggers the Jenkins pipeline automatically.

#### Highlights

The pipeline then executes a series of defined stages:

1. Clone Repository – retrieves the latest code from GitHub.

2. Install Dependencies – installs all required Node.js packages.

3. Run Tests – runs automated tests to ensure application stability.

4. Deploy to Render – if all tests pass, the new build is automatically deployed to the Render hosting platform using its API.
5. Slack integration ensures the team receives real-time notifications on build status — whether successful or failed

This pipeline achieves true Continuous Deployment (CD), ensuring that every code change passing the tests is automatically pushed to production. This approach significantly improves delivery speed, release reliability

#### Requirements to Run Project Locally

- Node.js v18+
- npm
- Database: MongoDB Atlas
- Jenkins (preferably running as a container )
- ngrok - for generating a Jenkins public URL for Github webhooks
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

#### Slack Notifications

The pipeline sends real-time build updates to the team's slack channel
![Build Success](assests/slack_success.png)
