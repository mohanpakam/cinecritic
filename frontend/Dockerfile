# Dockerfile.frontend

# Stage 1: Build the ReactJS frontend
FROM node:20-alpine AS frontend
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
