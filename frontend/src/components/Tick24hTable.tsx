import classNames from "classnames";
import { tick24h } from "../cores/home/mock";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "./Table";

interface Tick24hTableProps {
  data: any[];
}

function Tick24hTable({ data }: Tick24hTableProps) {
  return (
    <Table className="text-left">
      <TableHead>
        <TableHeadCell>Name</TableHeadCell>
        <TableHeadCell className="text-right">Price</TableHeadCell>
        <TableHeadCell className="text-right">24h change</TableHeadCell>
        <TableHeadCell className="text-right">24h volume</TableHeadCell>
        <TableHeadCell></TableHeadCell>
      </TableHead>

      <TableBody>
        {data.map((item) => (
          <TableRow key={item.symbol}>
            <TableCell className="font-medium ">{item.symbol}</TableCell>
            <TableCell className=" text-gray-600 text-sm text-right">
              {item.lastPrice}
            </TableCell>
            <TableCell className="text-right">
              <span
                className={classNames(
                  "inline-flex items-center bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full text-xs font-bold",
                  {
                    "bg-red-100 text-red-700": item.priceChange.startsWith("-"),
                  },
                )}
              >
                {item.priceChange} ({item.priceChangePercent})
              </span>
            </TableCell>
            <TableCell className=" text-gray-600 text-sm text-right">
              {item.quoteVolume}
            </TableCell>
            <TableCell className=" text-gray-600 text-sm text-right">
              <a href="">
                <button className="border text-xs border-gray-600 h-9 px-4 py-2 rounded hover:bg-gray-200 transition shadow-sm cursor-pointer">
                  Details
                </button>
              </a>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default Tick24hTable;
