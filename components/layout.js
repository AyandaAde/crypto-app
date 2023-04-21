import Navbar from "./Navbar/index";
import Footer from "./Footer/index";
import DrawerAppBar from "../components/navbar";



export default function Layout({ children }){

    return(
        <>
            <DrawerAppBar/>
            <main>{children}</main>
            <Footer/>


        </>
    )
    
}