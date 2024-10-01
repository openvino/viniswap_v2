import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import { ConnectButton } from "@rainbow-me/rainbowkit";

import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { defineChain, optimism, optimismSepolia } from "thirdweb/chains";
import { client } from "../config/thirdwebClient";
const Header = () => {
  const [tokenBalComp, setTokenBalComp] = useState();
  // const account = useAccount();
  // const { address } = useAccount();

  const notifyConectWallet = () => {
    toast.error("Connect your wallet", { duration: 2000 });
  };

  return (
    // <div
    //   className="fixed left-0 top-0 w-full  py-4  items-center
    //   bg-[#2D242F]

    // "
    // >
    <div
      className="fixed left-0 top-0 w-full  py-4  items-center 
      
    
    "
    >
      <div className="flex items-center justify-between  ">
        {/* <div className="flex items-center justify-between bg-[#2D242F] "> */}
        <div className="flex flex-col my-4 w-full justify-between px-2 md:px-16">
          <div className="flex items-center justify-between ">
            <img src="./mtb.png" className="h-12" />

            {/* <div className="hidden md:flex md:px-4">
              <NavItems />
            </div> */}
            <div className="flex rounded-3xl">
              {/* <ConnectButton className="flex rounded-3xl" /> */}
              <ConnectButton
                client={client}
                chain={defineChain(optimismSepolia)}
                connectButton={{
                  label: "Connect Wallet",
                  style: {
                    marginTop: 20,
                    background: "#fff",
                    color: "#840c4a",
                    fontSize: 20,
                    fontWeight: "bold",
                    boxShadow:
                      "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  },
                }}
              />
            </div>
          </div>

          {/* <div className="flex items-center col-start-2 col-end-12 md:hidden my-4 ">
            <NavItems />
          </div> */}
        </div>
        <div className="flex items-center justify-center col-start-6 col-end-8">
          {tokenBalComp}
        </div>

        <Toaster />
      </div>
    </div>
  );
};

export default Header;
