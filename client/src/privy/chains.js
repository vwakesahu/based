import { toast } from "sonner";

export const neox = {
  id: 12227332,
  network: "NeoX",
  name: "NeoX T4",
  nativeCurrency: {
    name: "GAS",
    symbol: "GAS",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://neoxt4seed1.ngd.network/"],
    },
    public: {
      http: ["https://neoxt4seed1.ngd.network/"],
    },
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://xt4scan.ngd.network/",
    },
  },
};