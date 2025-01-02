FROM node:18.16

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install
COPY index.js .

COPY app app
COPY config config

# Expose port and start application
EXPOSE 4000
CMD [ "node", "index.js" ]