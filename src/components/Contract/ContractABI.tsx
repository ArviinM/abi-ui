import {useEffect, useState} from "react";
import {Abi} from "../../types/abi.type.ts";
import ContractABIHandler from "./ContractABIHandler.tsx";
import {useNetwork} from "wagmi";

interface ContractABIProps {
    contractAddress: `0x${string}` | string | undefined;
}

function ContractABI({contractAddress}: ContractABIProps) {
    const [contractABI, setContractABI] = useState<Abi>([]);
    const [activeTab, setActiveTab] = useState(2);

    const {chain} = useNetwork()

    useEffect(() => {
        let storedContractData;
        if (contractAddress) {
            storedContractData = localStorage.getItem(contractAddress);
        }
        if (storedContractData) {
            const parsedData = JSON.parse(storedContractData);
            const storedABI = parsedData[0]; // ABI is the first element in the array
            const parsedStoredABI = JSON.parse(storedABI)
            if (Array.isArray(parsedStoredABI)) {
                setContractABI(parsedStoredABI);
            } else {
                console.error('Stored contract ABI is not an array:', parsedStoredABI);
            }
        }
    }, [contractAddress]);


    return (
        <div className="text-sm max-w-lg m-auto">
            <div className="p-4">

                {!contractAddress &&
                    <div className="text-sm text-warning"> Return to home and select a contact address that are
                        available in the list. </div>}

                {contractAddress &&
                    <div className="text-lg">Contract Address <span className="italic">{contractAddress}</span></div>}
                {chain && <div className="text-accent">Connected to {chain.name}</div>}
                {contractAddress && <div role="tablist" className="tabs tabs-bordered">
                    {/*<a role="tab" className={`tab ${activeTab === 1 ? 'tab-active' : ''}`}*/}
                    {/*   onClick={() => setActiveTab(1)}>Code</a>*/}
                    <a role="tab" className={`tab ${activeTab === 2 ? 'tab-active' : ''}`}
                       onClick={() => setActiveTab(2)}>Read Contract</a>
                    <a role="tab" className={`tab ${activeTab === 3 ? 'tab-active' : ''}`}
                       onClick={() => setActiveTab(3)}>Write Contract</a>
                </div>}

                <div>
                    {activeTab === 2 && contractABI
                        .filter(abiItem => abiItem.stateMutability === 'view')
                        .map((abiItem, index) => (
                            <div key={index} className="p-1 my-1 text-left">
                                <div className="collapse collapse-plus bg-secondary shadow-md shadow-accent">
                                    <input type="checkbox"/>
                                    <div className="collapse-title text-xl font-medium">
                                        {index + 1}. {abiItem.name}
                                    </div>
                                    <ContractABIHandler contractAddress={contractAddress} abi={contractABI}
                                                        inputs={abiItem.inputs}
                                                        stateMutability={abiItem.stateMutability}
                                                        functionName={abiItem.name} outputs={abiItem.outputs || []}/>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="">
                    {activeTab === 3 && contractABI
                        .filter(abiItem => abiItem.stateMutability === 'nonpayable' && abiItem.name)
                        .map((abiItem, index) => (
                            <div key={index} className="p-1 my-1 text-left">
                                <div className="collapse collapse-plus bg-secondary shadow-md shadow-accent">
                                    <input type="checkbox"/>
                                    <div className="collapse-title text-xl font-medium">
                                        {index + 1}. {abiItem.name}
                                    </div>
                                    <ContractABIHandler key={index} contractAddress={contractAddress} abi={contractABI}
                                                        inputs={abiItem.inputs}
                                                        stateMutability={abiItem.stateMutability}
                                                        functionName={abiItem.name} outputs={abiItem.outputs || []}/>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default ContractABI
