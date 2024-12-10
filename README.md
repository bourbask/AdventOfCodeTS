# VanaStack

**VanaStack** is a modern Fullstack project using Node.js for the backend and React with TypeScript for the frontend. It implements tools like Bun, ESLint, Prettier, and Husky to ensure high code quality and efficient workflows. This project includes a concrete example of interconnection between the backend and frontend.

---

## Features

- **Backend with Node.js**:

  - Express server.
  - Endpoint `/api/message` returning a JSON message.
  - Complete TypeScript setup with Nodemon for automatic reloads.

- **Frontend with React and Vite**:

  - API call to the backend to display dynamic data.
  - TypeScript configuration with modern development tools.

- **Code Quality**:

  - Integration of ESLint, Prettier, and Husky for automatic linting before commits.

- **Modern Package Manager**:
  - Using Bun for improved performance and simplified dependency management.

---

## Prerequisites

Before starting, ensure you have:

1. **Bun**: [Install Bun](https://bun.sh/)
2. **Git**: [Download Git](https://git-scm.com/)
3. **Node.js (v18 or newer)**: [Download Node.js](https://nodejs.org/)
4. **Visual Studio Code**: [Download VS Code](https://code.visualstudio.com/)

---

## Installation

1. Clone the Git repository:

   ```bash
   git clone https://github.com/<your-username>/VanaStack.git
   cd VanaStack
   ```

2. Install backend dependencies and start the server:

   ```bash
   cd backend
   bun install
   bun run dev
   ```

3. Install frontend dependencies and start the UI:

   ```bash
   cd ../frontend
   bun install
   bun run dev
   ```

---

## Usage Example

- The backend exposes an endpoint at `http://localhost:5000/api/message` which returns:

  ```json
  { "message": "Hello from the backend!" }
  ```

- The frontend consumes this endpoint to display the message in the UI.

---

## Replacing the Git Remote for a New Project

To use **VanaStack** as the base for another project, follow these steps:

### Step 1: Clone the VanaStack Repository

```bash
git clone https://github.com/<your-username>/VanaStack.git
cd VanaStack
```

### Step 2: Remove the Existing Remote

```bash
git remote remove origin
```

### Step 3: Create or Use an Existing Git Repository

1. If creating a new repository, initialize it on GitHub or your preferred hosting service. Do **not** add any initial files (like README).
2. Copy the new repository URL (e.g., `https://github.com/<your-username>/<new-project-name>.git`).

### Step 4: Add the New Remote

```bash
git remote add origin https://github.com/<your-username>/<new-project-name>.git
```

Verify the new remote configuration:

```bash
git remote -v
```

### Step 5: Push to the New Repository

```bash
git push -u origin main
```

If your branch is named differently, replace `main` with your branch name.

### Optional: Reset Git History

If you want to reset the Git history and start fresh:

1. Remove the `.git` directory:

   ```bash
   rm -rf .git
   ```

2. Reinitialize Git and push to the new repository:

   ```bash
   git init
   git remote add origin https://github.com/<your-username>/<new-project-name>.git
   git add .
   git commit -m "Initial commit for <new-project-name>"
   git push -u origin main
   ```

---

## Available Scripts

### Backend

- **`bun run dev`**: Starts the server with Nodemon.
- **`bun run start`**: Compiles and runs the backend.

### Frontend

- **`bun run dev`**: Starts the UI.
- **`bun run lint`**: Lints the code with ESLint.
- **`bun run lint:fix`**: Automatically fixes linting errors.

---

## Contribution

1. Fork the project.
2. Create a branch for your changes:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add a new feature"
   ```

4. Push the branch to the remote repository:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
