import { useEffect } from "react";
import { Meta, Links, Outlet, ScrollRestoration, Scripts } from "react-router";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";



const Root = () => {
    

 

    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>My Vite SSR</title>
                <Meta />
                <Links />
            </head>
            <body>
                <div className="bg-dark text-light min-vh-100 d-flex flex-column" data-bs-theme="dark">
                    <Header />
                    
                    <Outlet />

                    <Footer />

                    <ScrollRestoration />

                    <Scripts />
                </div>
            </body>
        </html>
    )
}

export default Root;