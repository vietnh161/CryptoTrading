from app.schemas.api_response import ApiResponse


def success(data=None, message="Success", http_code=200):
    return ApiResponse(
        httpCode=http_code,
        message=message,
        data=data,
    )
