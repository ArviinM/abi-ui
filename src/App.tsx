import Layout from "./pages/shared/Layout.tsx";
import Home from "./pages/Home/Home.tsx";

import {WagmiConfig, createConfig, configureChains} from 'wagmi'
import {publicProvider} from 'wagmi/providers/public'
import {Slide, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import {mainnet, polygonMumbai} from '@wagmi/core/chains'
import {MetaMaskConnector} from '@wagmi/core/connectors/metaMask'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Contract from "./pages/Contract/Contract.tsx";

const {chains, publicClient, webSocketPublicClient} = configureChains(
    [mainnet, polygonMumbai], [publicProvider()]
)

const config = createConfig({
    autoConnect: true,
    connectors: [
        new MetaMaskConnector({chains}),
    ],
    publicClient,
    webSocketPublicClient,
})

function App() {
    return (
        <WagmiConfig config={config}>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                transition={Slide}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"/>
            <Router>
                <Layout>
                    <Routes>
                        <Route index path="/" element={<Home/>}/>
                        <Route path="/contract/:address" element={<Contract/>}/>
                        <Route path="/contract/" element={<Contract/>}/>
                    </Routes>
                </Layout>
            </Router>
        </WagmiConfig>
    )
}

export default App
