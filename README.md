# 🎓 Student Job Tracker

A full-stack web application for students to track their job applications — built with **React**, **Node.js**, **Express**, and **MongoDB**.

Live Demo:
- 🔗 Frontend: [https://student-job-tracker-five.vercel.app/](https://student-job-tracker-five.vercel.app/)
- 🔗 Backend API: [https://job-tracker-backend-j83w.onrender.com/api/jobs](https://job-tracker-backend-j83w.onrender.com/api/jobs)

---

## 📦 Tech Stack

| Layer      | Tech                    |
|------------|-------------------------|
| Frontend   | React + Hooks, Tailwind CSS |
| Backend    | Node.js, Express.js     |
| Database   | MongoDB Atlas           |
| Deployment | Vercel (Frontend), Render (Backend) |

---

## 🛠 Features

- ✅ Add job applications
- ✅ Edit application status
- ✅ Delete job entries
- ✅ Filter by job status (All, Applied, Interview, Offer, Rejected)
- ✅ Responsive UI with Tailwind CSS
- ✅ REST API using Express
- ✅ MongoDB for persistent storage

---

## 🧪 API Endpoints

### Base URL:
https://job-tracker-backend-j83w.onrender.com/api/jobs

sql
Copy
Edit

| Method | Endpoint        | Description               |
|--------|------------------|---------------------------|
| GET    | `/jobs`          | Fetch all job entries     |
| POST   | `/jobs`          | Create a new job entry    |
| PUT    | `/jobs/:id`      | Update a job’s status     |
| DELETE | `/jobs/:id`      | Delete a job entry        |

---

## 🧱 Project Structure

job-tracker-backend/ ├── models/ │ └── Job.js ├── routes/ │ └── jobRoutes.js ├── server.js ├── .env (not committed) ├── package.json

student-job-tracker/ ├── src/ │ ├── components/ │ │ ├── JobForm.js │ │ ├── JobItem.js │ │ ├── JobList.js │ │ └── FilterBar.js │ ├── services/ │ │ └── api.js │ └── App.js ├── public/ ├── .env (Vercel env vars recommended) ├── package.json

yaml
Copy
Edit

---

## 🌐 Environment Variables

### Backend (`.env`)
MONGO_URI=your_mongo_connection_string PORT=5000

shell
Copy
Edit

### Frontend (Vercel → Environment → Add)
REACT_APP_API_BASE_URL=https://job-tracker-backend-j83w.onrender.com/api

yaml
Copy
Edit

---

## 🚀 Deployment

### Backend:
- Deploy to [Render](https://render.com)
- Set `MONGO_URI` & `PORT` env vars
- Set Start command: `node server.js`

### Frontend:
- Deploy to [Vercel](https://vercel.com)
- Add `REACT_APP_API_BASE_URL` env var
- Vercel auto-detects React (no extra config needed)

---

## 📸 Screenshots

> Add screenshots here using Markdown:
```md
![Home Screen](screenshots/home.png)
🤝 Contributions
Contributions are welcome!
Feel free to fork the repo and submit pull requests.

📄 License
This project is open-source and available under the MIT License.

✨ Credits
Built by @Prem7218 🙌
With guidance from ChatGPT 🤖

yaml
Copy
Edit

---

## ✅ Tips:
- Replace `https://student-job-tracker-five.vercel.app/` with your actual deployed frontend URL.
- Add a `screenshots/` folder if you'd like to include UI previews.
- Optional: Upload this `README.md` to both **frontend and backend repos**.

Let me know if you'd like a version customized for your GitHub repo's README preview (with badges, links, etc.). 💪