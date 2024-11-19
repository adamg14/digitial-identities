import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, sepolia, base, baseSepolia, baseGoerli } from "wagmi/chains";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default config = getDefaultConfig({
    appName: 'Digital Identities',
    projectId: '',
    chains: [mainnet, sepolia, base, baseSepolia, baseGoerli],
    ssr: true
});

export const Providers = ({ children }) => (
    <WagmiProvider config={config}>
        <QueryClient client={ queryClient }>
            { children }
        </QueryClient>
    </WagmiProvider>
);