// TODO fetch whitelisted pools from db

export const whitelistedPools = [
  // {
  //   // address: "0xacA02ddDBb0138e0990d1e667368b96269946799", funcionando en desarrollo
  //   address: "0xfE71DE1096F46B6E6FB6B4C9cf9415D6fBE7ea1B", // revisar

  //   pair: [
  //     "0x5d34DcA9d19C9e9D55b5F35adAf0aBed2fC3b996",
  //     "0x74A4A85C611679B73F402B36c0F84A7D2CcdFDa3",
  //   ],
  // },
  {
    // address: "0xacA02ddDBb0138e0990d1e667368b96269946799", funcionando en desarrollo
    address: "0x007fd3A9E5A5ae5bF933eE7C32C48aE8e10A1ed4",

    pair: [
      "0xc53c298c1f2e85579d4fDf7aFaC2b9429e9DdE58",
      "0x74A4A85C611679B73F402B36c0F84A7D2CcdFDa3",
    ],
  },
];

export const getPairAddress = (pair) => {
  const filteredPair = whitelistedPools.find(
    (p) =>
      (p.pair[0] === pair[0] && p.pair[1] === pair[1]) ||
      (p.pair[0] === pair[1] && p.pair[1] === pair[0])
  );
  console.log(filteredPair);

  return filteredPair?.address || null;
};
