# # Use an official Node.js runtime as a parent image
# FROM node:18-alpine

# # Set the working directory inside the container
# WORKDIR /app

# # Copy the package.json and package-lock.json first to leverage Docker cache
# COPY package.* ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code to the container
# COPY . .

# # Expose the port that Vite runs on (default is 5173)
# EXPOSE 5173

# # Start the application in development mode with the correct host flag
# CMD ["npm", "run", "dev", "--", "--host"]

# Stage 1: Build the application
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json first to leverage Docker cache
COPY package.* ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy the built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

