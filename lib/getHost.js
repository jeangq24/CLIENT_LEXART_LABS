const getHost = () => {
    if(process.env.NEXT_PUBLIC_ENV_DEV) {
        return process.env.NEXT_PUBLIC_HOST_DEV
    };

    if(process.env.NEXT_PUBLIC_ENV_PROD) {
        return process.env.NEXT_PUBLIC_HOST_PRODUCTION
    };
};

const CURRENT_HOST=getHost();
export default CURRENT_HOST;