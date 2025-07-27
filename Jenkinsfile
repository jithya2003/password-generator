pipeline{
    agent any
    stages{
        stage('Clone'){
            steps{
                git branch : 'main', url: 'https://github.com/jithya2003/password-generator'
            }

        }
        stage('Test'){
            steps{
                echo 'Checking Files'
                sh 'ls index.html logic.js'
            }

        }
        stage('Build Image'){
            steps{
                sh 'docker build -t password'
            }

        }
        stage('Load into Minikube'){
            steps{
                sh 'minikube image load password'
            }
        }
        stage('Deploy to Kubernetes'){
            steps{
                sh 'kubectl apply -f deployment.yaml'
            }
        }
    }
}

