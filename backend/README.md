# 🚀 Mini Crypto Trading Backend

FastAPI backend service for a crypto trading platform.  
This project uses **Poetry** for dependency management (Application Mode).

---

## 🛠 Tech Stack

- Python 3.10+
- FastAPI
- Uvicorn
- Poetry

---

## 📂 Project Structure

```
backend/
│
├── app/
│   ├── main.py
│   └── routers/
│
├── pyproject.toml
├── poetry.lock
└── README.md
```

---

# ⚙️ Setup Guide

## 1️⃣ Install Python

Download Python from:

https://www.python.org/downloads/

Verify installation:

```bash
python --version
```

Recommended: Python 3.10 – 3.12

---

## 2️⃣ Install Poetry

### Windows (PowerShell)

```powershell
(Invoke-WebRequest -Uri https://install.python-poetry.org -UseBasicParsing).Content | py -
```

### macOS / Linux

```bash
curl -sSL https://install.python-poetry.org | python3 -
```

Verify:

```bash
poetry --version
```

---

## 3️⃣ Configure Poetry (Recommended)

Create virtual environment inside the project folder:

```bash
poetry config virtualenvs.in-project true
```

This will create:

```
.venv/
```

inside the backend directory.

---

## 4️⃣ Install Dependencies

Since this project runs in **application mode**, use:

```bash
poetry install --no-root
```

> `--no-root` prevents Poetry from trying to install the project as a package.

---

## ▶️ Run Development Server

```bash
poetry run uvicorn app.main:app --reload
```

Server will start at:

```
http://127.0.0.1:8000
```

---

## 📖 API Documentation

Swagger UI:

```
http://127.0.0.1:8000/docs
```

ReDoc:

```
http://127.0.0.1:8000/redoc
```

---

# 📦 Adding New Dependencies

Instead of using `pip install`, use:

```bash
poetry add package_name
```

Example:

```bash
poetry add sqlalchemy
```

For development dependencies:

```bash
poetry add --group dev pytest
poetry add --group dev black
```

---

# 🧹 Remove Virtual Environment

If you need to reset environment:

```bash
poetry env remove python
poetry install --no-root
```

---

# 🌐 CORS Example (For React Frontend)

Add in `main.py`:

```python
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

---

# 🚀 Roadmap

- [ ] JWT Authentication
- [ ] PostgreSQL Integration
- [ ] SQLAlchemy ORM
- [ ] Alembic Migrations
- [ ] WebSocket Market Data
- [ ] Docker Support
- [ ] CI/CD Pipeline

---

# 📄 License

This project is for educational and portfolio purposes.