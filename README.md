**Todo App using GraphQL - README**

This repository contains a Todo App built using GraphQL. The app allows users to manage their tasks and to-do lists in a convenient and efficient way. It is composed of a server, which handles the backend logic, and a frontend, which provides a user-friendly interface to interact with the tasks.

- **Server:** The server is implemented using GraphQL and is hosted at [https://graphql-servers.onrender.com/graphql](https://graphql-servers.onrender.com/graphql). It provides the necessary API endpoints to perform CRUD operations on tasks.

- **Frontend:** The frontend is accessible at [https://todo-graphql-pi.vercel.app/](https://todo-graphql-pi.vercel.app/) and offers a user interface for managing tasks. Users can view their existing tasks, add new tasks, mark tasks as completed, and delete tasks.

## Features

- **Task Management:** Create, read, update, and delete tasks using GraphQL queries and mutations.

- **Real-time Updates:** The app utilizes GraphQL subscriptions to provide real-time updates when tasks are added or marked as completed.

- **User-Friendly Interface:** The frontend offers an intuitive and responsive interface for an enhanced user experience.

## Getting Started

Follow these steps to set up the Todo App locally on your machine:

1. **Clone the Repository:** Begin by cloning this repository to your local machine using the following command:

   ```
   git clone <repository-url>
   ```

2. **Install Dependencies:** Navigate to both the `server` and `frontend` directories and install the required dependencies using:

   ```
   cd server
   npm install

   cd ../frontend
   npm install
   ```

3. **Run the Server:** Start the GraphQL server by running the following command within the `server` directory:

   ```
   npm start
   ```

   The server should now be running at [http://localhost:4000/graphql](http://localhost:4000/graphql).

4. **Run the Frontend:** Launch the frontend application by executing the following command in the `frontend` directory:

   ```
   npm start
   ```

   The app should be accessible at [http://localhost:3000](http://localhost:3000).

## Contributing

Contributions are welcome! If you find any issues or want to enhance the app, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-new-feature`.
3. Make the necessary changes and commit them.
4. Push your changes to your forked repository.
5. Open a pull request detailing the changes you've made.

## Feedback and Support

If you encounter any problems while using the app or have suggestions for improvement, please open an issue in the repository. We value your feedback and are here to help.

## License

This project is licensed under the [MIT License](LICENSE).
