# Use an official OpenJDK 17 runtime as a parent image
FROM openjdk:17-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the packaged JAR file into the container
COPY target/Login-api-0.0.1-SNAPSHOT.jar /app/Login-api-0.0.1-SNAPSHOT.jar

# Run the JAR file
CMD ["java", "-jar", "Login-api-0.0.1-SNAPSHOT.jar"]
