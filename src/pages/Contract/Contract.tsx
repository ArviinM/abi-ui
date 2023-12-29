import {useParams} from 'react-router-dom';
import ContractABI from "../../components/Contract/ContractABI.tsx";

function Contract() {
    const {address} = useParams();

    return (<>
        <div className="text-3xl max-w-screen-2xl justify-center items-center text-center m-auto my-10">
            <div>
                <h1 className="text-6xl font-bold">abi ui | contract</h1>
            </div>
            <div className="flex">
                <ContractABI contractAddress={address}/>
            </div>
        </div>
    </>)
}

export default Contract
