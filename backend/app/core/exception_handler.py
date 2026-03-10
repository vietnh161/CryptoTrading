from fastapi import Request
from fastapi.responses import JSONResponse
from fastapi.exceptions import HTTPException


async def http_exception_handler(request: Request, exc: HTTPException):
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "httpCode": exc.status_code,
            "message": exc.detail,
            "data": None,
        },
    )


async def generic_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={
            "httpCode": 500,
            "message": "Internal Server Error",
            "data": None,
        },
    )
