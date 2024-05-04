# Use an official Node runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the rest of the frontend's client-side code
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define environment variable
ENV NODE_ENV production

# Command to run the app
CMD ["npm", "start"]
