pipeline {
    agent any

     environment {
        DEPLOY_ENV = params.DEPLOY_ENV ?: "dev"
        EMAIL_RECIPIENT = params.EMAIL_RECIPIENT ?: "juliehiva@gmail.com"
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                // Building steps go here
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                // Testing steps go here
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Deployment steps go here
            }
        }
    }

    post {
        success {
            emailext (
                to: EMAIL_RECIPIENT,
                subject: "Build Success: ${currentBuild.fullDisplayName}",
                body: "Build ${currentBuild.fullDisplayName} succeeded. Good job!"
            )
        }
        failure {
            emailext (
                to: EMAIL_RECIPIENT,
                subject: "Build Failure: ${currentBuild.fullDisplayName}",
                body: "Build ${currentBuild.fullDisplayName} failed. Please investigate."
            )
        }
    }
}
