import {useAccount, useContractWrite} from "wagmi";
import {UseContractABIOptions} from "./ContractABIHandler.tsx";

function ContractWrite({options}: { options: UseContractABIOptions }) {
    const {isConnected} = useAccount()
    const {data, isError, isLoading, isSuccess, error, write} = useContractWrite(options);

    return (
        <div className="">
            {!isConnected ? (
                <div className="tooltip tooltip-right" data-tip="Connect your Wallet">
                    <button className="btn btn-outline btn-sm my-2" disabled={!isConnected}
                            onClick={() => write?.()}>Write
                    </button>
                </div>
            ) : (
                <button className="btn btn-outline btn-sm my-2" disabled={!isConnected} onClick={() => write?.()}>Write
                </button>
            )}
            <div className="break-all">
                {/*{options.outputs.map((output, index) => (*/}
                {/*    <span key={index} className="font-thin italic"> {output?.type}</span>*/}
                {/*))}*/}
                {isLoading && <div className="text-info">Loading...</div>}
                {isError && <div className="text-error break-all">{error?.message}</div>}
                {isSuccess && <div className="mx-2 text-success"><span className="font-semibold"> Successful Transaction:  </span>{JSON.stringify(data)}
                </div>}
            </div>
        </div>
    );
}

export default ContractWrite
