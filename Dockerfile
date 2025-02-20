# Use specific Node.js version as base
FROM node:20.11.1-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the entire application
COPY . .

# Define NODE_ENV as a build argument
ARG NODE_ENV
ARG REACT_APP_API_URL




# Set NODE_ENV as an environment variable
ENV NODE_ENV=$NODE_ENV

# Build the React app
RUN npm run build

# Use lightweight Nginx image as the production server
FROM nginx:alpine
# Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
# Copy the built app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to run Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
