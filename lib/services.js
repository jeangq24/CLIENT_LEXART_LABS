import toast from "react-hot-toast";

export const getListProudcts = async (setIsLoading, tokenBearer) => {
    try {
        setIsLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/products`, {
            
            headers: {
                'Content-Type': 'application/json',
            },

            credentials: "include"

        });

        const result = await response.json();

        if(result.error) {
            toast.error(error);
            setIsLoading(false);
            return;
        };

        setIsLoading(false);
        return result;
    } catch (error) {
        console.log(error);
        setIsLoading(false);
        return;
    };
}