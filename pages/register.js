import { CiMail } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import InputText from "@/components/InputText";
import InputPassword from "@/components/InputPassword";
import Button from "@/components/Button";
import toast from "react-hot-toast";
import { useState } from "react";
import { registerFunction } from '@/lib/auth';
import Container from "@/components/Container";
import InputDate from "@/components/InputDate";
import Router from 'next/router';
import Link from "next/link";
export default () => {
    return (
        <Container>
               <div className="flex flex-col justify-center items-center w-full h-full gap-10 py-20 mt-20">
                <RegisterUser />

            </div>
        </Container>
    )
};


const RegisterUser = () => {
    const [emailValue, setEmailValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [userNameValue, setUserNameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [birthDateValue, setBirthDateValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleChangeEmail = (e) => {
        const { value } = e.target;
        setEmailValue(value)
    };

    const handleChangeName = (e) => {
        const { value } = e.target;
        setNameValue(value);
    };

    const handleChangeUserName = (e) => {
        const { value } = e.target;
        setUserNameValue(value);
    };

    const handleChangeLastName = (e) => {
        const { value } = e.target;
        setLastNameValue(value);
    };

    const handleChangePassword = (e) => {
        const { value } = e.target;
        setPasswordValue(value);
    };

    const handleChangeBirthDate = (e) => {
        const { value } = e.target;
        setBirthDateValue(value);
    };

    const resetField = () => {
        setEmailValue('');
        setLastNameValue('')
        setNameValue('')
        setPasswordValue('')
        setUserNameValue('');
    }

    const classNameIcons = "w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto";
    return (
        <div className="flex flex-col gap-4 w-full md:w-1/2 h-auto">
            <h1 className="text-2xl font-bold w-full text-center">Register</h1>
            <InputText placeholder={"Enter your name"} textLabel={'Name'} value={nameValue} onChange={handleChangeName}>
                <CiUser className={classNameIcons} />
            </InputText>
            <InputText placeholder={"Enter your last name"} textLabel={'Last name'} value={lastNameValue} onChange={handleChangeLastName}>
                <CiUser className={classNameIcons} />
            </InputText>
            <InputDate placeholder={"Enter your birth date"} textLabel={"Birt date"} value={birthDateValue} onChange={handleChangeBirthDate}>
                <CiUser className={classNameIcons} />
            </InputDate>
            <InputText placeholder={"Enter your username"} textLabel={'Username'} value={userNameValue} onChange={handleChangeUserName}>
                <CiUser className={classNameIcons} />
            </InputText>
            <InputText placeholder={"Enter your email"} textLabel={'Email'} value={emailValue} onChange={handleChangeEmail}>
                <CiMail className={classNameIcons} />
            </InputText>
            <InputPassword value={passwordValue} onChange={handleChangePassword} />
            <Button text={'Register'} onClick={() => { registerFunction({ emailValue, userNameValue, nameValue, lastNameValue, passwordValue, birthDateValue }, setIsLoading, resetField, Router) }} />
            <span>Already have an account?  - <Link href={'auth'}><span className="font-bold underline text-indigo-600 hover:text-indigo-700">Log in</span></Link></span>
        </div>
    )
};