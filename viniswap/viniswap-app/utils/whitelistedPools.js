// TODO fetch whitelisted pools from db

export const whitelistedPools = [
  {
    // address: "0xacA02ddDBb0138e0990d1e667368b96269946799", funcionando en desarrollo
    address: "0x5F518BD5abBE87D7ace08c5976003bd763089F98",

    pair: [
      "0x1159862C5D48f8f970942FCf86e664680438d13A",
      "0x4200000000000000000000000000000000000006",
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
