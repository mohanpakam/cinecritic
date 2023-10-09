# Dockerfile.backend
# Stage 1: Build the Spring Boot backend with Gradle
FROM gradle:8.4.0-jdk17-alpine AS backend
WORKDIR /app/backend
COPY build.gradle ./build.gradle
COPY src ./src/
RUN gradle build

# Stage 3: Create the final image
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=backend /app/backend/build/libs/*.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
