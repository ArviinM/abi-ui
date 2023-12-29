import {Abi, AbiInput, AbiOutput, StateMutabilityType} from "../../types/abi.type.ts";
import {useState} from "react";
import ContractReader from "./ContractReader.tsx";
import ContractWrite from "./ContractWrite.tsx";

interface ReadContractProps {
    contractAddress: `0x${string}` | string | undefined;
    abi: Abi;
    functionName: string | undefined;
    outputs: AbiOutput[];
    inputs: AbiInput[];
    args?: string[];
    stateMutability?: StateMutabilityType
}

export interface UseContractABIOptions {
    address: `0x${string}`;
    abi: Abi;
    functionName: string | undefined;
    args?: string[];
    outputs: AbiOutput[];
}


function ContractABIHandler({contractAddress, abi, functionName, inputs, outputs, stateMutability}: ReadContractProps) {
    const address = contractAddress as `0x${string}`

    const [inputValues, setInputValues] = useState<string[]>(new Array(inputs.length).fill(''));
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (index: number, value: string) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);
    };

    let options: UseContractABIOptions = {
        address: address,
        abi: abi,
        functionName: functionName,
        outputs: outputs,
    };

    if (inputs.length > 0) {
        options = {...options, args: inputValues}
    }

    return (
        <div className="collapse-content">
            {inputs.map((input, index) => (
                <div key={index}>
                    <div className="label">
                        <span
                            className="label-text text-sm font-bold">{input.name === '' ? '<input>' : input.name} {input.type}</span>
                    </div>
                    <input
                        className="input input-sm w-full"
                        key={index}
                        value={inputValues[index]}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                </div>
            ))}
            {inputs.length > 0 && stateMutability === 'view' &&
                <button className="btn btn-outline btn-sm my-2" onClick={() => setSubmitted(true)}>Query</button>}
            {(submitted || inputs.length === 0 && stateMutability === 'view') && <ContractReader options={options}/>}
            {(stateMutability === 'nonpayable') && <ContractWrite options={options}/>}
        </div>
    );
}

export default ContractABIHandler