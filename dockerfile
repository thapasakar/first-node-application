# Use an official Node.js runtime as the base image
FROM node:slim

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the container
COPY . /app

RUN npm install
EXPOSE 3000
CMD node index.js