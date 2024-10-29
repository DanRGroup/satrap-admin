# Use a lightweight Node.js image to build static files
FROM node:slim AS builder

RUN apt update \
    && apt upgrade -y

# Set working directory
WORKDIR /app

# Copy only package.json and yarn.lock to cache dependencies
COPY package.json  ./

# Install dependencies
RUN yarn install

# Copy the rest of the app's source code
COPY ./ ./

# Build static files for production
RUN yarn build

# Use an nginx image to serve the static files
FROM nginx:alpine

# Copy the built static files from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom NGINX config, if you have one
# COPY nginx.conf /etc/nginx/nginx.conf


# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
