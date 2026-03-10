from fastapi import FastAPI
from app.routers import market
from fastapi.exceptions import HTTPException
from app.core.exception_handler import (
    http_exception_handler,
    generic_exception_handler,
)

app = FastAPI(
    title="Mini Binance API",
    description="Basic trading backend using FastAPI",
    version="1.0.0",
)

app = FastAPI()

app.add_exception_handler(HTTPException, http_exception_handler)
app.add_exception_handler(Exception, generic_exception_handler)

app.include_router(market.router)


@app.get("/")
def root():
    return {"message": "Mini Binance Backend Running 🚀"}
