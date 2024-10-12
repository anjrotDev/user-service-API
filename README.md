# User Management and Blog Post System

This project is a robust backend system for managing users, roles, permissions, and blog posts. It's built with Node.js, Express, and MongoDB, utilizing TypeScript for type safety and improved developer experience.

## YouTube Tutorial

This project was created as part of a YouTube tutorial. To get a detailed walkthrough of the project and learn how to build it step by step, check out our video:

[Watch the Tutorial on YouTube](https://www.youtube.com/playlist?list=PLoOnCUvhzJYPbtVpYCqP98DoN0pKKImQo)

[![Crea una API Rest Con Node JS, Typescript y Express](https://img.youtube.com/vi/jMNzE_QCrd8/maxresdefault.jpg)](https://youtu.be/PLoOnCUvhzJYPbtVpYCqP98DoN0pKKImQo "Typescript Generics | Aprende a como usar los Tipos Genéricos en Typescript")

Don't forget to like, subscribe, and leave a comment if you find the tutorial helpful!

## Features

- User authentication and authorization
- Role-based access control (RBAC)
- User management (CRUD operations)
- Blog post management (CRUD operations)
- Custom middleware for authentication and role-based permissions
- MongoDB integration for data persistence
- TypeScript for enhanced type checking and code quality

## Technologies Used

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose (ODM)
- JSON Web Tokens (JWT) for authentication

## Project Structure

The project is organized into several key directories:

- `src/`: Contains the TypeScript source code
  - `controllers/`: Handles request processing and response generation
  - `middlewares/`: Custom middleware for authentication and permissions
  - `models/`: Mongoose models for database interaction
  - `repositories/`: Data access layer for database operations
  - `routes/`: API route definitions
  - `services/`: Business logic layer
  - `types/`: TypeScript type definitions
- `dist/`: Compiled JavaScript code
- `@types/`: Custom type definitions for external libraries

## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- MongoDB

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up your environment variables (create a `.env` file in the root directory):

   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Build the TypeScript code:

   ```
   npm run build
   ```

5. Start the server:
   ```
   npm start
   ```

## Usage

The API provides endpoints for user management, authentication, role management, and blog post operations. You can use tools like Postman or the provided HTTP files (`auth.http`, `users.http`, `roles.http`, `posts.http`) to interact with the API.

### Key Endpoints

- Authentication: `/api/auth/login`, `/api/auth/register`
- Users: `/api/users`
- Roles: `/api/roles`
- Posts: `/api/posts`

Refer to the route files for a complete list of available endpoints and their functionalities.

## Development

For development, you can use the following npm scripts:

- `npm run dev`: Starts the development server with hot-reloading
- `npm run build`: Compiles TypeScript to JavaScript
- `npm start`: Starts the production server

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Express.js for providing a robust web application framework
- MongoDB for efficient data storage
- TypeScript for enhancing code quality and developer experience
