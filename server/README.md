## Getting started

1.  Clone this repo to your local machine

2.  - Rename `.env.example` to `.env` file in root directory & add your MONGO_URI address (MONGO DB database address)

3.  Install dependencies:
    ```sh
    npm i
    ``` 
    or 
    ```sh
    yarn
    ```

4.  Run project:
    ```sh
    npm run dev
    ```
    or 
    ```sh
    yarn dev
    ```
Server started on `http://localhost:8000/`

Navigate to `http://localhost:3000/`

### Api:

    1. Auth

    - Registration - post: /api/auth/signup
    - Log in - post: /api/auth/login