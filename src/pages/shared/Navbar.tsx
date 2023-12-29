import {useAccount, useConnect, useDisconnect, useEnsName} from 'wagmi'
import {InjectedConnector} from 'wagmi/connectors/injected'
import {NavLink} from "react-router-dom";

function Navbar() {

    const {address, isConnected} = useAccount()
    const {data: ensName} = useEnsName({address})
    const {connect} = useConnect({
        connector: new InjectedConnector(),
    })
    const {disconnect} = useDisconnect()


    return (
        <>
            <div className="navbar bg-base-100 fixed top-0 flex z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/contract">Contract</NavLink></li>
                        </ul>
                    </div>
                    <NavLink to="/" className="btn btn-ghost text-xl">abi ui</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/contract">Contract</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {isConnected ?
                        <div><span className='text-xs break-all mx-2'> Connected to {ensName ?? address} </span><a
                            className="btn btn-outline"
                            onClick={() => disconnect()}>Disconnect</a>
                        </div> :
                        <a className="btn btn-outline" onClick={() => connect()}>Connect Wallet</a>}
                </div>
            </div>
        </>
    )
}

export default Navbar