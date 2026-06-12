pipeline {

    agent any

    stages {

        stage('Git Checkout') {
            steps {
                git 'https://github.com/madhusudhan58/online-shopping-app.git'
            }
        }

        stage('Build Backend Image') {
            steps {
                sh 'docker build -t shopping-backend ./backend'
            }
        }

        stage('Build Frontend Image') {
            steps {
                sh 'docker build -t shopping-frontend ./frontend'
            }
        }

        stage('Run Containers') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }
}