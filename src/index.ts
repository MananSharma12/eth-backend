import { USDT_Address } from "./abi.js";
import dotenv from "dotenv"
import { id, JsonRpcProvider } from "ethers";

dotenv.config()

const provider = new JsonRpcProvider(process.env.RPC_URL);

async function pollBlock(blockNumber: number) {
  const logs = await provider.getLogs({
    address: USDT_Address,
    fromBlock: blockNumber,
    toBlock: blockNumber + 2,
    topics: [id("Transfer(address,address,uint256)")]
  });

  console.log(logs);
}

pollBlock(21493826)

