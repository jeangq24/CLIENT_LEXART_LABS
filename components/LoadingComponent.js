import LoadingGif  from "@/public/Loading.gif";
import Image from "next/image";

export default () => {
    <div className="w-full h-full flex justify-center items-center">
        <Image src={LoadingGif} width={150} height={150} className="" />
    </div>
}