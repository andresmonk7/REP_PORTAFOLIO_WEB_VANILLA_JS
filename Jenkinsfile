pipeline {
    agent any

    environment {
        AWS_DEFAULT_REGION = 'us-east-2'
        BUCKET_NAME = 'porfolio-vanilla-tf'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Deploy to S3') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'aws-credentials',
                    usernameVariable: 'AWS_ACCESS_KEY_ID',
                    passwordVariable: 'AWS_SECRET_ACCESS_KEY'
                )]) {
                    sh '''
                        aws s3 sync . s3://$BUCKET_NAME --delete --exclude ".git/*" --exclude "Jenkinsfile"
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "Deploy completado. Sitio disponible en CloudFront."
        }
        failure {
            echo "El deploy falló. Revisa los logs."
        }
    }
}