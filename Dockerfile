# base image
FROM node:12.2.0

# install chrome for protractor tests
RUN npm install http-server -g

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY ./dist/catering-client/ /app/catering-client/
#RUN npm install
#RUN npm install -g @angular/cli@7.3.9


CMD http-server catering-client –-port 4200
EXPOSE 4200
