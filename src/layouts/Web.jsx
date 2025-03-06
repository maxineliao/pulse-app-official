import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router";
import WebHeader from "../components/Web/WebHeader";
import { useSelector } from 'react-redux';

function Web() {
    const isAuth = useSelector((state) => state.auth.isAuth);
    return (
        <>
            <WebHeader />
            <Outlet />
        </>
    )
}

export default Web;