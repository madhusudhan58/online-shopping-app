pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend') {
            steps {
                sh 'docker build -t madhu58/shopping-backend:v1 ./backend'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'docker build -t madhu58/shopping-frontend:v1 ./frontend'
            }
        }

        stage('Push Images') {
            steps {
                sh 'docker push madhu58/shopping-backend:v1'
                sh 'docker push madhu58/shopping-frontend:v1'
            }
        }
    }
}