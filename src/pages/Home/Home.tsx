import HomeForm from "../../components/Home/HomeForm.tsx";
import HomeContracts from "../../components/Home/HomeContracts.tsx";

function Home() {
    return (<>
        <div className="text-3xl max-w-screen-2xl justify-center items-center text-center m-auto my-10">
            <div>
                <h1 className="text-6xl font-bold">abi ui</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
                <div>
                    <HomeForm/>
                </div>
                <div>
                    <HomeContracts/>
                </div>
            </div>
        </div>
    </>)
}

export default Home
