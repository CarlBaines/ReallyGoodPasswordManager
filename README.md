#  Password Manager App

## Features

- User registration and login
- Store, view, edit, and delete passwords
- Password generator
- Recycle bin for deleted passwords
- Settings for account management

## Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Database: SQLite

## Folder Structure

```
frontend/
  assets/
  css/
  js/
  pages/
backend/
  src/
    db/
    middleware/
    routes/
    sessions/
  package.on
  sessions/
```

## Database Overview

This app uses **SQLite** (`backend/src/db/pm_db.db`) to store all data.

**Tables:**
- **users:** Stores user accounts (`id`, `email`, `password`).
- **passwords:** Stores saved passwords for each user (`id`, `user_id`, `service`, `email`, `password`).
- **deletedPasswords:** Stores deleted passwords (recycle bin) for each user (`id`, `user_id`, `deletedService`, `deletedEmail`, `deletedPassword`).
- **notifications:** Stores notifications for each user (`id`, `user_id`, `title`, `content`).

**How it works:**
- Each password, deleted password, and notification is linked to a user by `user_id`.
- If a user is deleted, all their passwords, deleted passwords, and notifications are automatically removed (cascade delete).
- The database and tables are created automatically when you run the backend—no manual setup needed.

## Getting Started

1. **Clone the repo:**
   ```sh
   git clone https://github.com/CarlBaines/ReallyGoodPasswordManager.git
   cd ReallyGoodPasswordManager/backend/src
   ```

2. **Install backend dependencies:**
   ```sh
   npm install
   ```

3. **Start the backend server:**
   ```sh
   npm start
   ```

4. **Open the frontend:**
   - Open `frontend/pages/loginpg.html` directly in your browser,  
     **or** use a simple HTTP server (like VS Code Live Server) for a better experience.

> The backend will automatically create the SQLite database and tables if they don’t exist. No extra setup is needed!
## Credits

Created by [CarlBaines](https://github.com/CarlBaines).

Special thanks to my friend [Luke Eastwood](https://github.com/LukeEastwood080506), who worked with me on this project. Although he left the project mid-way, he was the inspiration and coder behind much of the main dashboard page.

## Screenshots

**Login Page**

<img width="1918" height="947" alt="Image" src="https://github.com/user-attachments/assets/69064a91-2f3c-40ef-be83-8c88a496a3c6" />

**Sign Up Page**

<img width="1918" height="945" alt="Image" src="https://github.com/user-attachments/assets/01b0b638-4695-4122-8198-d1642c0a8042" />

**Forgot Password Page**

<img width="1918" height="944" alt="Image" src="https://github.com/user-attachments/assets/456501d4-f430-4937-b56b-dfb49116d91c" />

**Main Page**

<img width="1918" height="946" alt="Image" src="https://github.com/user-attachments/assets/76f770c4-24eb-4b39-b443-379e4774ff52" />

**Example of Notifications**

<img width="435" height="658" alt="Image" src="https://github.com/user-attachments/assets/bd977cc0-74f4-4f96-807f-71d1458c5e29" />

**Example of Saved Vault Record**

<img width="1226" height="291" alt="Image" src="https://github.com/user-attachments/assets/e7cba70c-d524-4bec-ac68-6a8fd29e2b99" />

**Generator Page**

<img width="1918" height="944" alt="Image" src="https://github.com/user-attachments/assets/b58dffbc-2d3f-483c-80e2-e3468f2fa488" />

**Recycle Bin Page**

<img width="1919" height="944" alt="Image" src="https://github.com/user-attachments/assets/04342ae7-9371-4590-909a-a95c5b615eb4" />

**Example of Saved Recycle Bin Record**

<img width="1230" height="251" alt="Image" src="https://github.com/user-attachments/assets/11fc6ffe-3c52-4e0a-a97c-b0d3b45cb437" />

**Settings Page**

<img width="1918" height="944" alt="Image" src="https://github.com/user-attachments/assets/56364d9d-d795-4d36-a50f-562ac7f9d8a5" />

## Demo
https://github.com/user-attachments/assets/8f475e20-7e35-4890-8594-d05ebfad5b4f

