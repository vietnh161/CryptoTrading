import httpx
from app.schemas.coin import FearGreedResponse

BASE_URL = "https://api.alternative.me"


async def fng():
    url = f"{BASE_URL}/fng/"

    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        data = response.json()

        parsed = FearGreedResponse(**data)

        return parsed
