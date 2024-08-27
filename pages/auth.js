import { CiMail } from "react-icons/ci";
import InputText from "@/components/InputText";
import InputPassword from "@/components/InputPassword";
import Button from "@/components/Button";
import { useState } from "react";
import { useUser } from '@/lib/UserContext';
import Container from "@/components/Container";
import Link from "next/link";


export default () => {
    const { login } = useUser();
    return (
        <Container>
            <div className="flex flex-col justify-center items-center w-full h-full gap-10 py-20 mt-20">
                <LoginUser login={login} />
            </div>
        </Container>
    )
};

const LoginUser = ({ login }) => {

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
   

    const handleChangeEmail = (e) => {
        const { value } = e.target;
        setEmailValue(value)
    };

    const handleChangePassword = (e) => {
        const { value } = e.target;
        setPasswordValue(value);
    };

    const classNameIcons = "w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto";
    return (

        <div className="flex flex-col gap-4 w-full md:w-1/2">
            <h1 className="text-2xl font-bold w-full text-center">Login</h1>
            <InputText placeholder={"Enter your email"} textLabel={'Email'} onChange={handleChangeEmail} value={emailValue}>
                <CiMail className={classNameIcons} />
            </InputText>
            <InputPassword onChange={handleChangePassword} value={passwordValue} />
            <Button text={'Login'} onClick={() => login(emailValue, passwordValue)}
            />
            <span>Don't have an account? - <Link href={'register'}><span className="underline text-indigo-600 hover:text-indigo-700 font-bold">Create an account</span></Link></span>
        </div>

    )
}