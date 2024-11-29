import { Magic } from "magic-sdk";

const customNodeOptions = {
    rpcUrl: "https://rpc.testnet.moonbeam.network",
    chainId: 1287,
};

const createMagic = (key, options) =>
    typeof window != "undefined" && new Magic(key, options);

export const magic = createMagic(
    process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY,
    { network: customNodeOptions }
);

