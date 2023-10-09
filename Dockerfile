# Stage 1: Build the ReactJS frontend
FROM node:20-alpine AS frontend
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Stage 2: Build the Spring Boot backend with Gradle
FROM gradle:8.4.0-jdk17-alpine AS backend
WORKDIR /app/backend
COPY backend/build.gradle ./build.gradle
COPY backend/src ./src/
RUN gradle build

# Stage 3: Create the final image
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=backend /app/backend/build/libs/*.jar app.jar
COPY --from=frontend /app/frontend/build ./frontend-build
EXPOSE 8080
EXPOSE 3000
CMD ["java", "-jar", "app.jar"]
