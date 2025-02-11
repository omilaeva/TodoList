# 📝 TodoList App

A simple full-stack TodoList application built with **Svelte** on the frontend and **Deno + Hono** on the backend. The app allows users to **add, mark as done/undone, and delete todos**, with validation using **Zod**.

## 🚀 Tech Stack

### **Frontend (Client)**
- [Svelte](https://svelte.dev/) – Lightweight and reactive framework for the UI
- Fetch API – For handling HTTP requests

### **Backend (Server)**
- [Deno](https://deno.land/) – Secure runtime for JavaScript and TypeScript
- [Hono](https://hono.dev/) – Lightweight web framework for building APIs
- [Zod](https://zod.dev/) – Schema validation for request data

## 🎯 Features

✅ **Add Todos** – Name must be **3-30 characters** (validated with Zod)  
✅ **Mark as Done/Undone** – Click the checkbox to toggle the status  
✅ **Delete Todos** – Click the ```Remove``` button to remove a todo  

## 🛠️ Installation & Setup

### **Prerequisites**
- Install [Docker](https://www.docker.com/)
- Install [Docker Compose](https://docs.docker.com/compose/install/)

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/omilaeva/TodoList.git
cd TodoList
```

### **2️⃣ Start the Application**
Run the following command to build and start the containers:
```sh
docker compose up --build
```

This will:

 * Start the backend (Deno + Hono) at http://localhost:8000
 * Start the frontend (Svelte) at http://localhost:5173

### **3️⃣ Stop the Application**
To stop the running containers, press ```CTRL+C``` or run:

```sh
docker compose down
```

If you run ```docker compose down``` the database will be deleted and all the data in it will be lost.


### **🖥️ API Endpoints**
| Method	| Endpoint |	Description |
|---------|----------|--------------|
| GET     |	/todos	 | Get all todos|
| POST	  | /todos	 | Add a new todo (name required) |
| PUT 	  | /todos/:id |	Toggle done/undone or change the name |
| DELETE	| /todos/:id	| Delete a todo |

