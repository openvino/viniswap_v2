import React, { useEffect, useState, useRef } from "react";

import { CogIcon, ArrowSmDownIcon } from "@heroicons/react/outline";
import { ConnectButton, useConnectModal } from "@rainbow-me/rainbowkit";
import SwapField from "./SwapField";
import TransactionStatus from "./TransactionStatus";

import { DEFAULT_VALUE, WETH, MTB24 } from "../utils/SupportedCoins";
import { toEth, toWei } from "../utils/ether-utils";
import { useAccount } from "wagmi";
import { Toaster } from "react-hot-toast";
import { getSwapBtnClassName } from "../utils/swap-utils";

const Bridge = () => {
  const { address } = useAccount();
  const { openConnectModal } = useConnectModal();

  return (
    <div className="p-4 translate-y-20 rounded-3xl w-full max-w-[500px] bg-zinc-900 mt-20">
      <div className="flex items-center justify-between  px-1 my-4">
        <p>Pool</p>
        <CogIcon className="h-6" />
      </div>
      <div className="flex bg-[#212429] p-4 py-6 rounded-xl mb-2 border-[2px] border-transparent hover:border-zinc-600">
        <ArrowSmDownIcon className="fixed left-1/2 -translate-x-1/2 -translate-y-[-100%]  justify-center  h-10 p-1 bg-[#212429] border-4 border-zinc-900 text-zinc-300 rounded-xl cursor-pointer hover:scale-110" />
      </div>

      <div className="bg-[#212429] p-4 py-6 rounded-xl mt-2 border-[2px] border-transparent hover:border-zinc-600">
        {}
      </div>

      <button
        className={getSwapBtnClassName()}
        onClick={() => {
          if (swapBtnText === INCREASE_ALLOWANCE) handleIncreaseAllowance();
          else if (swapBtnText === SWAP) handleSwap();
          else if (swapBtnText === CONNECT_WALLET) openConnectModal();
        }}
      >
        {}
      </button>

      {/* {txPending && <TransactionStatus />} */}

      <Toaster />
    </div>
  );
};

export default Bridge;