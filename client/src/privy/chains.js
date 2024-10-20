import { toast } from "sonner";

export const neox = {
  id: 84532,
  network: "Base Sepolia",
  name: "ETH",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia.base.org"],
    },
    public: {
      http: ["https://sepolia.base.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://base-sepolia.blockscout.com",
    },
  },
};
