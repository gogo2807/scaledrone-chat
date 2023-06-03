FROM node:17-alpine as builder
# Create app directory
WORKDIR /app
# Copy all package files
COPY package*.json ./
# Install app dependencies
RUN npm install react react-dom
# To bundle your app’s source code inside the Docker image, use the COPY instruction:
COPY . .
# Create build
RUN npm run build

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;"]

