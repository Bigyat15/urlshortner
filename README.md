
# Project Title

A brief description of what this project does and who it's for

# URL Shortener (Django + React)

This is a simple URL shortener built using Django as the backend and React as the frontend. It allows users to generate short URLs and track visit counts.

## Features
- Generate short URLs for long links
- Redirect short URLs to the original long URL
- Track visit count of each shortened URL

---

## Getting Started
### Prerequisites
Make sure you have the following installed:
- Python 3.x
- Django
- Node.js & npm

---

## Backend Setup (Django)

### 1. Clone the Repository
```bash
git clone https://github.com/your-repo/url-shortener.git
cd url-shortener/backend
```

### 2. Create a Virtual Environment (Optional but Recommended)
```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Apply Migrations & Run Server
```bash
python manage.py migrate
python manage.py runserver
```

The backend will be running at `http://127.0.0.1:8000/`.

---

## Frontend Setup (React)

### 1. Navigate to the Frontend Directory
```bash
cd ../urlshortner
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start React App
```bash
npm start
```

The frontend will be running at `http://localhost:3000/`.

---

## API Endpoints
### 1. Create a Short URL
**Endpoint:** `POST /api/create/shorturl/`
**Request Body:**
```json
{
  "long_url": "https://example.com"
}
```
**Response:**
```json
{
  "id": 1,
  "long_url": "https://example.com",
  "short_code": "abc123",
  "visit_count": 0
}
```

### 2. Redirect to Original URL
**Endpoint:** `GET /<short_code>/`

### 3. Fetch All Shortened URLs (If Implemented)
**Endpoint:** `GET /api/get/urldetails/`

---

## Project Structure
```
url-shortener/
├── backend/    # Django Backend
│   ├── urls.py
│   ├── views.py
│   ├── models.py
│   ├── serializers.py
│   ├── migrations/
│   ├── manage.py
│
├── frontend/   # React Frontend
│   ├── src/
│   │   ├── components/Hero.js
│   │   ├── App.js
│   │   ├── index.js
│
└── README.md
```

---

## Troubleshooting
- Ensure Django is running at `http://127.0.0.1:8000/`
- Ensure React is running at `http://localhost:3000/`
- Check API endpoints and verify responses using Postman or Browser DevTools

---

## License
This project is licensed under the MIT License.

Happy Coding! 🚀

