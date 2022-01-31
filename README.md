# Kartoza-test 
## This is a small application that can display vectorial data from postgis. Runnin on docker-compose to simulate a back end and front end. 
### To install this just download the code from the repository:
#### git clone https://github.com/aenema14/kartoza-test.git
### Run the docker-compose to create all the orchestation: 
#### docker-compose up -d
### Run the backup for postgis (need to have installed the postgresql client)
#### psql -f db_backup -U docker -h localhost -d gis -p 5432
### Later you can view the orchestration using the port 8080 (or 8443 for ssl) where docker is installed.
### For a clean up and destroy the enviroment run this command:
#### docker-compose down
