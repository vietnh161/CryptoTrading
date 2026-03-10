from pydantic import BaseModel
from typing import List


class BinanceTicker(BaseModel):
    symbol: str
    lastPrice: float
    priceChangePercent: float
    volume: float

class Coin(BaseModel):
    symbol: str
    price: float
    change: float
    volume: float


class P2PAdv(BaseModel):
    price: str


class P2PItem(BaseModel):
    adv: P2PAdv


class P2PResponse(BaseModel):
    data: List[P2PItem]


class FearGreedItem(BaseModel):
    value: str
    value_classification: str
    timestamp: str


class FearGreedResponse(BaseModel):
    data: List[FearGreedItem]
