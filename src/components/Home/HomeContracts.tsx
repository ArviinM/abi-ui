import {useEffect, useState} from "react";
import {ethers} from "ethers";
import {useNavigate} from 'react-router-dom';

interface Contracts {
    [key: string]: string[];
}

function HomeContracts() {
    const [contracts, setContracts] = useState<Contracts>({});
    const navigate = useNavigate();

    useEffect(() => {
        const contractsByChain: Contracts = {};

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i) || '';
            if (ethers.isAddress(key)) {
                const contractData = JSON.parse(localStorage.getItem(key) || '');
                const chain = contractData[1];
                if (!contractsByChain[chain]) {
                    contractsByChain[chain] = [];
                }
                contractsByChain[chain].push(key);
            }
        }

        setContracts(contractsByChain);
    }, [localStorage.length]); // Add localStorage.length as a dependency

    const handleButtonClick = (address: string) => {
        navigate(`/contract/${address}`);
    };

    return (
        <div
            className="container max-w-md bg-base-100 card shadow-md border border-secondary shadow-base-content my-10 m-auto text-left">
            {/* Render your contracts here */}
            <div className="p-4">
                <div className="label">
                    <span className="label-text text-lg font-bold">List of Contract Addresses</span>
                </div>
                {Object.keys(contracts).map((chain, index) => (
                    <div key={index}>
                        <h2>{chain}</h2>
                        {contracts[chain].map((contract, index) => (
                            <button key={index}
                                    className="my-2 btn btn-outline btn-primary btn-xs sm:btn-sm md:btn-md break-all text-left"
                                    onClick={() => handleButtonClick(contract)}>{contract}</button>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeContracts
