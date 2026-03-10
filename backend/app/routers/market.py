from fastapi import APIRouter, Response
from app.services.binance_service import fetch_tickers, get_p2p_price
from app.services.alternativeme_service import fng
from app.schemas.coin import Coin, FearGreedResponse
from app.schemas.api_response import ApiResponse
from app.core.response import success

router = APIRouter(prefix="/market", tags=["Market"])


@router.get("/coins", response_model=ApiResponse[list[Coin]])
async def list_coins():
    tickers = await fetch_tickers()
    return success(
        data=[
            Coin(
                symbol=t.symbol,
                price=t.lastPrice,
                change=t.priceChangePercent,
                volume=t.volume,
            )
            for t in tickers
            if t.symbol.endswith("USDT")
        ]
    )


@router.get("/p2p-price", response_model=ApiResponse[str])
async def p2p_price():
    price = await get_p2p_price()
    return success(data=price)


@router.get("/fng", response_model=ApiResponse[FearGreedResponse])
async def get_fng():
    data = await fng()
    return success(data)
