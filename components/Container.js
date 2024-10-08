import Navbar from "./Navbar";

export default ({ children }) => {
  
    return (
        <div
            className={`flex w-screen h-screen flex-col px-10 md:px-24`}
        >
            <Navbar/>
            {children}
        </div>
    )
};