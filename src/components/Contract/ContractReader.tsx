import {useContractRead} from "wagmi";
import {UseContractABIOptions} from "./ContractABIHandler.tsx";

function ContractReader({options}: { options: UseContractABIOptions }) {
    const {data, isError, isLoading, error} = useContractRead(options);
    if (isLoading) return (<div className="mx-2 text-info">Loading...</div>)
    if (isError) return (<div className="mx-2 text-error">{error?.message}</div>)
    return (
        <div>
            <span
                className="break-all"> {typeof data === 'string' || typeof data === 'boolean' || typeof data === 'bigint' || typeof data === 'number' ? data.toString() : 'Data is not a string or boolean'} </span>
            {options.outputs.map((output, index) => (
                <span key={index} className="font-thin italic"> {output?.type}</span>
            ))}
        </div>
    );
}

export default ContractReader