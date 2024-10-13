# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json first to leverage Docker cache
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that Vite runs on (default is 5173)
EXPOSE 3000

# Start the application in development mode with the correct host flag
CMD ["npm", "run", "dev"]

# FROM node:20-alpine as builder
# WORKDIR /app
# COPY . .
# ARG VITE_BACKEND_URL
# ENV VITE_BACKEND_URL $VITE_BACKEND_URL
# RUN npm install
# RUN npm run build

# FROM nginx:1.25.4-alpine-slim as prod
# COPY --from=builder /app/dist /usr/share/nginx/html
# COPY nginx.conf  /etc/nginx/conf.d
# EXPOSE 3000
# CMD ["nginx", "-g", "daemon off;"]