pipeline {
    agent any
     tools {
        nodejs "node18.19.1"
    }
    stages {
        stage("Clone Repository") {
            steps {
                git branch: "master", url: "https://github.com/atuyabirisi/gallery.git"
            }
        }
       stage("Install Dependencies") {
            steps {
                sh 'npm install'
            }
        }
        stage('Start the Server') {
            steps {
                sh 'npm start &'
                sh 'echo $! > server.pid'
                sh 'sleep 10'
                sh 'kill $(cat server.pid) || true'
            }
        }
    }
}
