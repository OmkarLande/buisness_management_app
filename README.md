# Business Management App

This is a business management app that allows users to manage their businesses and employees.

## Setup Instructions

To run this app, follow the steps below:

1. **Install Dependencies**:
    ```sh
    npm install
    ```

2. **Set Up Server**:
    ```sh
    cd server
    npm install
    ```

3. **Configure Environment Variables**:
    - Create a `.env` file in the `server` directory.
    - Copy all variables from `.env.example` to `.env`.

## Running the App

### Running Only the Client
```sh
npm run dev
```

### Running Only the server
```sh
node --env-file=.env index.js
```

### Running both at a same time
```sh
npm start
```
