 Author: Dharmang Makwana
 Email: dharmangroy@gmail.com


Installation:

1) Install the Node version 14 or later
2) npm init -y
3) npm install express


Docker Commands:

1) Building image
   docker build -t distroless-hello-world:6.7.0 --platform linux/amd64 .

2) Listing docker images
   docker images

3) Login to the DockerHub - Makesure you have already generated your personal access token
   docker login -u your_username

4) Tagging the locally created image
   docker tag distroless-hello-world:6.7.0 your_username/your_repo:6.7.0

5) Pushing the generated image to docker hub
   docker push your_username/your_repo:6.7.0


Kubernetes Commands:

1) Listing objects
   kubectl get object_name -n namespacename
   e.g: kubectl get pods -n awscontainerday

2) Creating objects using menifest file
   kubectl create -f filename.yml

3) Updating the objects using menifest file
   kubectl apply -f filename.yml
