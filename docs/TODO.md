# Server Monitoring App Development To-Do List

## High-Level Design Document To-Dos

### System Overview To-Dos

- [ ] Design a scalable, microservice-based server uptime monitoring tool.
- [ ] Ensure the tool allows for monitoring server uptime, receiving notifications, and managing server details.

#### Microservices Architecture To-Dos

1. **User Management Microservice**

   - [ ] Implement user authentication, authorization, and user-related functionalities.
   - [ ] Set up the technology stack: Node.js, Express, PostgreSQL, JWT.

2. **Server Management Microservice**

   - [ ] Develop CRUD operations for servers.
   - [ ] Establish the technology stack: Node.js, Express, PostgreSQL.

3. **Uptime Monitoring Microservice**

   - [ ] Monitor server uptime and send alerts.
   - [ ] Utilize Node.js, Express, InfluxDB for technology stack.

4. **Notification Microservice**
   - [ ] Handle email and SMS notifications.
   - [ ] Use Go and RabbitMQ for message queuing.

#### Additional System Components To-Dos

- [ ] Set up HTTP/REST communication protocols.
- [ ] Implement PostgreSQL for User and Server Management.
- [ ] Use InfluxDB for Uptime Data.
- [ ] Containerize with Docker and orchestrate with Kubernetes.
- [ ] Implement load balancing with Nginx.
- [ ] Use Redis for caching.
- [ ] Set up Prometheus for monitoring and ELK Stack for logging.
- [ ] Implement RabbitMQ or Apache Kafka for message queuing.
- [ ] Develop a scalable frontend with React.js.
- [ ] Set up Jenkins for CI/CD.

## Low-Level Design Document To-Dos

### Detailed Component Design To-Dos

1. **User Management Microservice**

   - [ ] Design database schema with Users, Roles, and UserRoles tables.
   - [ ] Create API endpoints for login, registration, and user details.

2. **Server Management Microservice**

   - [ ] Design database schema for Servers table.
   - [ ] Develop API endpoints for server management.

3. **Uptime Monitoring Microservice**

   - [ ] Implement periodic server status checks.
   - [ ] Set up InfluxDB for recording uptime/downtime.

4. **Notification Microservice**

   - [ ] Develop logic for listening to message queues and sending notifications.

5. **API Gateway**

   - [ ] Implement request routing and authentication/authorization.

6. **Frontend Application**

   - [ ] Develop features for user authentication and server management interface.
   - [ ] Implement uptime statistics and alerts display.

7. **Security Considerations**

   - [ ] Implement JWT for secure authentication.
   - [ ] Ensure HTTPS for secure communication.

8. **Monitoring and Logging**
   - [ ] Set up Prometheus for system metrics.
   - [ ] Implement ELK Stack for log aggregation and analysis.
