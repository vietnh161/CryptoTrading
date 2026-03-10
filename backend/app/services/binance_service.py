import httpx
from pydantic import TypeAdapter
from app.schemas.coin import Coin, P2PResponse, BinanceTicker

BASE_URL = "https://api.binance.com"
P2P_URL = "https://p2p.binance.com"


async def fetch_tickers():
    url = f"{BASE_URL}/api/v3/ticker/24hr"

    async with httpx.AsyncClient() as client:
        r = await client.get(url)
        r.raise_for_status()
        return TypeAdapter(list[BinanceTicker]).validate_python(r.json())


async def get_exchange_info():
    url = f"{BASE_URL}/api/v3/exchangeInfo"

    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        return response.json()


async def get_p2p_price():
    url = f"{P2P_URL}/bapi/c2c/v2/friendly/c2c/adv/search"
    payload = {
        "asset": "USDT",
        "fiat": "VND",
        "page": 1,
        "rows": 1,
        "tradeType": "SELL",
    }

    async with httpx.AsyncClient() as client:
        response = await client.post(url, json=payload)
        data = P2PResponse(**response.json())
        return float(data.data[0].adv.price)
