FROM node:10.15.1

# Install nodemon globally
RUN npm i nodemon -g

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY project5_website/package*.json ./
RUN npm install

# Bundle app source
COPY project5_website/app.js .
COPY project5_website/views ./views
COPY project5_website/routes ./routes
COPY project5_website/public ./public
COPY project5_website/bin ./bin

CMD [ "nodemon", "start" ]
