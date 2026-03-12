import FearGreedGauge from "../../components/FearGreedGauge";
import LineChart24h from "../../components/Linechart24h";
import SimpleCard from "../../components/SimpleCard";
import Tick24hTable from "../../components/Tick24hTable";
import { tick24h } from "./mock";

export default function Home() {
  return (
    <div className="mx-auto lg:max-w-2/3 px-4 py-6 sm:px-6 lg:px-8 min-h-screen">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-8 lg:col-span-4 grid grid-cols-2 gap-3">
          <SimpleCard label="P2P">
            <h3 className="text-xl font-bold text-gray-800 ">
              245512
            </h3>
          </SimpleCard>
          <SimpleCard label="BTC Dominance">
            <h3 className="text-xl font-bold text-gray-800 ">
              245512
            </h3>
          </SimpleCard>

          <SimpleCard label="Fear & Greed" className="col-span-2">
            <FearGreedGauge />
          </SimpleCard>
        </div>
        <SimpleCard
          label="BTC Future"
          className="col-span-4 lg:col-span-2 2xl:col-span-3"
        >
          <p className="text-xs font-bold text-gray-600 pt-2 mb-1">
            Funding rate
          </p>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            245512
          </h3>
          <p className="text-xs font-bold text-gray-600 mb-1">
            Long/Short Ratio
          </p>
          <h3 className="text-xl font-bold text-gray-800  mb-2">
            245512
          </h3>
          <p className="text-xs font-bold text-gray-600 mb-1">
            Open Interest
          </p>
          <h3 className="text-xl font-bold text-gray-800  mb-2">
            245512
          </h3>
        </SimpleCard>
        <SimpleCard
          label="Favorites"
          className="col-span-12 lg:col-span-6 2xl:col-span-5 "
        >
          <div className="grid grid-cols-12 items-center gap-4 mb-1">
            <p className="col-span-3 text-sm font-bold text-gray-800">
              BTCUSDT
            </p>
            <p className="col-span-3 text-sm text-gray-800 ">
              245512
            </p>
            <p className="col-span-2 text-sm text-gray-800 ">1.5%</p>
            <div className="col-span-4">
              <LineChart24h height={60} />
            </div>
          </div>
          <div className="grid grid-cols-12 items-center gap-4 mb-1">
            <p className="col-span-3 text-sm font-bold text-gray-800">
              BTCUSDT
            </p>
            <p className="col-span-3 text-sm text-gray-800 ">
              245512
            </p>
            <p className="col-span-2 text-sm text-gray-800 ">1.5%</p>
            <div className="col-span-4">
              <LineChart24h height={60} />
            </div>
          </div>
          <div className="grid grid-cols-12 items-center gap-4">
            <p className="col-span-3 text-sm font-bold text-gray-800">
              BTCUSDT
            </p>
            <p className="col-span-3 text-sm text-gray-800 ">
              245512
            </p>
            <p className="col-span-2 text-sm text-gray-800 ">1.5%</p>
            <div className="col-span-4">
              <LineChart24h height={60} />
            </div>
          </div>
        </SimpleCard>
      </div>
      <div className="w-full mt-8">
        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
          <Tick24hTable data={tick24h} />
        </div>
      </div>
    </div>
  );
}
