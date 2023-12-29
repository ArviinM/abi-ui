import {ReactNode} from "react";
import Navbar from "./Navbar.tsx";

type Props = {
    children: ReactNode
}

function Layout(props: Props) {

    return (
        <>
            <Navbar/>
            <main className="mt-20">
                {props.children}
            </main>
        </>
    )

}

export default Layout