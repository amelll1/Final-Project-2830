# Dockerfile for React app
FROM node:18-alpine  

WORKDIR /app  

COPY package*.json ./  

RUN npm install  # Install necessary packages

COPY . .  

CMD ["npm", "start"]  
