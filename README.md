# Mock Slack API

A simple mock Slack API built with Node.js and Express. This project provides endpoints to simulate Slack-like responses for license and user information, useful for testing, demos, or learning API integration.

## Features

- **GET `/license.info`**  
  Returns mock license information from a JSON file.

- **GET `/users.list`**  
  Returns a list of all users from a JSON file.

- **GET `/users.info?id=USER_ID`**  
  Returns information for a specific user by ID.

## Project Structure

```
mock-slack-api/
├── data/
│   ├── license.json
│   └── users.json
├── server.js
└── README.md
```

## Setup

1. **Clone the repository:**
   ```sh
   git clone 
   cd mock-slack-api
   ```

2. **Install dependencies:**
   ```sh
   npm install express
   ```

3. **Ensure mock data files exist:**
   - `data/license.json`  
     Contains license information.
   - `data/users.json`  
     Contains an array of user objects.

   Example `license.json`:
   ```json
   {
     "licenseType": "Enterprise",
     "expiryDate": "2025-12-31",
     "maxUsers": 50,
     "usedUsers": 3,
     "features": ["Priority Support", "Advanced Analytics"],
     "issuedTo": "ABC Group of Technology",
     "licenseKey": "XYZ-123-ENTERPRISE-456",
     "terms": "This license is non-transferable and valid for the specified number of users only. Unauthorized use or distribution of the software is prohibited.",
     "contactEmail": "help.issues@mockslack.com",
     "contactPhone": "+1-800-555-1234",
     "version": "2.5.1"
   }
   ```

   Example `users.json`:
   ```json
   [
     {
       "id": "U001",
       "name": "Alice",
       "email": "alice@example.com",
       "role": "admin"
     },
     {
       "id": "U002",
       "name": "Bob",
       "email": "bob@example.com",
       "role": "member"
     },
     {
       "id": "U003",
       "name": "Charlie",
       "email": "charlie@example.com",
       "role": "member"
     }
   ]
   ```

4. **Start the server:**
   ```sh
   node server.js
   ```

5. **API Endpoints:**

   - **GET `/license.info`**
     - Returns:
       ```json
       {
         "ok": true,
         "license": { ...license fields... }
       }
       ```

   - **GET `/users.list`**
     - Returns:
       ```json
       {
         "ok": true,
         "members": [ ...user objects... ]
       }
       ```

   - **GET `/users.info?id=USR01`**
     - Returns:
       ```json
       {
         "ok": true,
         "user": { ...user fields... }
       }
       ```
     - If user not found:
       ```json
       {
         "ok": false,
         "error": "User not found"
       }
       ```

## Example Usage

- Get license info:  
  [http://localhost:3000/license.info](http://localhost:3000/license.info)

- List all users:  
  [http://localhost:3000/users.list](http://localhost:3000/users.list)

- Get info for user `USR01`:  
  [http://localhost:3000/users.info?id=USR01](http://localhost:3000/users.info?id=USR01)

## Notes

- All responses follow Slack API conventions with an `ok` field.
- Data is read from JSON files on each request (no database required).
- Extend the mock data as needed for your use case.

---# mock-slack-api-test
