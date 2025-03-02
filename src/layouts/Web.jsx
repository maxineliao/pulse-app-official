import { Outlet } from "react-router";
import HeaderVisitor from "../components/Web/HeaderVisitor";

function Web() {
    return (
        <>
            <HeaderVisitor />
            <Outlet />
        </>
    )
}

export default Web;