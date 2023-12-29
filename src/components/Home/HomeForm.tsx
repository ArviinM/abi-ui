// import {useState} from "react";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "react-toastify";

const FormSchema = z.object({
    contractAddress: z.string({required_error: "Contract Address is required.",}).min(3, "At least three letters are required."),
    contractABI: z.string({required_error: "Contract ABI is required.",}).min(3, "At least three letters are required."),
    contractChain: z.string({required_error: "Contract Chain is required."}),
})

interface FormField {
    contractAddress: string;
    contractABI: string;
    contractChain: string;
}

function HomeForm() {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormField>({
        resolver: zodResolver(FormSchema),
    });

    const onSubmit = handleSubmit((data: FormField) => {
        const chainAbi = [data.contractABI, data.contractChain]
        localStorage.setItem(data.contractAddress, JSON.stringify(chainAbi))
        toast.success("Contract Address & ABI was successfully saved!")
        clearForm(false)
    })


    const clearForm = (isNotify: boolean) => {
        reset();
        if (isNotify) toast.success('Form cleared successfully!')
    }

    return (
        <div
            className="container max-w-md card shadow-md border border-secondary shadow-base-content my-10 m-auto text-left">
            <form className="p-4" onSubmit={onSubmit}>
                <div className="label">
                    <span className="label-text text-lg font-bold">Contract Address</span>
                </div>
                <input {...register('contractAddress')} type="text" placeholder="Add the contract address..."
                       className="input input-bordered w-full my-2 text-sm"/>
                {errors.contractAddress && <p className="text-xs mx-2 text-error">{errors.contractAddress.message}</p>}
                <div className="label">
                    <span className="label-text text-lg font-bold">Contract ABI</span>
                </div>
                <textarea {...register('contractABI')}
                          className="textarea py-2 w-full my-2 textarea-sm textarea-bordered"
                          placeholder="Add the contract abi..."></textarea>
                {errors.contractABI && <p className="text-xs mx-2 text-error">{errors.contractABI.message}</p>}
                <div className="label">
                    <span className="label-text text-lg font-bold">Contract Chain</span>
                </div>
                <select {...register('contractChain')} className="select my-2 select-bordered w-full">
                    <option>Mainnet</option>
                    <option>Polygon Mumbai Testnet</option>
                </select>
                {errors.contractChain && <p className="text-xs mx-2 text-error">{errors.contractChain.message}</p>}
                <button type='submit' className="my-2 btn btn-outline btn-primary btn-xs sm:btn-sm md:btn-md">Save
                </button>
            </form>
        </div>
    )
}

export default HomeForm