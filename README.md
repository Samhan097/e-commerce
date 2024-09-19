Here's a draft for your `README.md` file based on the information you've provided:

---

# E-commerce Project

This is a full-stack e-commerce application built using the MERN (MongoDB, Express, React, Node.js) stack. The project is organized into two branches on GitHub, with a separate frontend and backend.

## Features
- **Filtering**: Users can filter products by categories, price ranges, and availability on the products page.
- **Sorting**: Products are sortable by price, popularity, and ratings.
- **Caching**: Frequently requested product data is cached to improve response times for repeated requests.

## Project Structure
- `frontend/`: Contains the code for the frontend of the application.
- `backend/`: Contains the code for the backend API of the application.
  
## Installation

### Step 1: Clone the Project
```bash
git clone <your-github-repo-url>
cd <project-folder>
```

### Step 2: Switch to the Master Branch
```bash
git checkout master
```

### Step 3: Install Dependencies
Navigate to both the `frontend` and `backend` folders to install the necessary `node_modules`:

For the frontend:
```bash
cd frontend
npm install
```

For the backend:
```bash
cd backend
npm install
```

### Step 4: Running the Application
- To run the frontend:
  ```bash
  npm start
  ```

- To run the backend:
  ```bash
  nodemon server.js
  ```

- To run both frontend and backend simultaneously from the root `ecommerce` folder:
  ```bash
  npm start
  ```

## Functionalities

### Filtering
Users can filter products on the products page by:
- Categories
- Price ranges
- Availability

### Sorting
Products can be sorted by:
- Price
- Popularity
- Ratings

### Caching
Product data that is frequently requested will be cached to improve performance and reduce response times.

## Contribution
Feel free to fork this repository, submit issues, or contribute to the project by creating pull requests.

---

This `README.md` file provides a clear guide to setting up and running the project, including the filtering, sorting, and caching functionalities. Let me know if you'd like to add or change anything!