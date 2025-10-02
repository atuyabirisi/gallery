pipeline {
    agent any

    tools {
        nodejs "node18.19.1"
    }

    stages {
        stage("Clone Repository") {
            steps {
                git(
                    branch: "master",
                    url: "https://github.com/atuyabirisi/gallery.git"
                )
            }
        }

        stage("Install Dependencies") {
            steps {
                sh 'npm install'
            }
        }
        
        stage("Run Tests") {
            steps {
                sh 'npm test'
            }
        }

        stage("Deploy to Render") { 
            steps {
                withCredentials([string(credentialsId: 'render_api_key', variable: 'RENDER_API_KEY')]) {
                    sh """
                        curl -X POST \\
                            -H "Accept: application/json" \\
                            -H "Authorization: Bearer $RENDER_API_KEY" \\
                            https://api.render.com/v1/services/srv-d38ljl7diees73cm50b0/deploys
                    """
                }
            }
        }
    }
    post {
        success {
            slackSend(
                message: "Build succeeded for ${env.JOB_NAME} #${env.BUILD_NUMBER}\n🔗 ${env.BUILD_URL}"
            )
        }
        failure {
            slackSend(
                message: "Build failed for ${env.JOB_NAME} #${env.BUILD_NUMBER}\n🔗 ${env.BUILD_URL}"
            )
        }
        always {
            echo "Pipeline finished with status: ${currentBuild.currentResult}"
        }
    }
}


