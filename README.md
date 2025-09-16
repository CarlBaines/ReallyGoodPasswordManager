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

<img width="1918" height="947" alt="Image" src="https://github.com/user-attachments/assets/241588c4-c83b-454e-b0bd-94bdacc0372f" />

**Sign Up Page**

<img width="1918" height="945" alt="Image" src="https://github.com/user-attachments/assets/204cb4d8-b472-4f49-803d-a18186da58cf" />

**Forgot Password Page**

<img width="1918" height="944" alt="Image" src="https://github.com/user-attachments/assets/4812c045-f90d-43ae-8051-8fa45e44efce" />

**Main Page**

<img width="1918" height="946" alt="Image" src="https://github.com/user-attachments/assets/ab5b8ff9-eb97-44fb-b3ce-c4edb3eba58a" />

**Example of Notifications**

<img width="435" height="658" alt="Image" src="https://github.com/user-attachments/assets/0857275a-1a12-4344-a299-251bb356ede3" />

**Example of Saved Vault Record**

<img width="1226" height="291" alt="Image" src="https://github.com/user-attachments/assets/e853730a-9506-4521-a3b5-4ae78d7db147" />

**Generator Page**

<img width="1918" height="944" alt="Image" src="https://github.com/user-attachments/assets/3f564dff-659f-4c12-8e69-66f397e7e503" />

**Recycle Bin Page**

<img width="1919" height="944" alt="Image" src="https://github.com/user-attachments/assets/683be4e4-d239-45eb-89d1-1ebd5cdb0c37" />

**Example of Saved Recycle Bin Record**

<img width="1230" height="251" alt="Image" src="https://github.com/user-attachments/assets/badf8b31-96a9-4de2-98ab-973217d105f0" />

**Settings Page**

<img width="1918" height="944" alt="Image" src="https://github.com/user-attachments/assets/36cf1f21-8836-456a-b59b-e3536c97914a" />

## Demo
https://github.com/user-attachments/assets/4784fac2-c80a-45b6-b780-d3a2dd49b41c

