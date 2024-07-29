import toast from "react-hot-toast";
import CURRENT_HOST from "@/lib/getHost.js";

export const loginFunction = async (emailValue, passwordValue, setIsLoading, login, Router) => {
    try {
      
        setIsLoading(true);
        const response = await fetch(`${CURRENT_HOST}/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: emailValue, password: passwordValue }),
        });

        const result = await response.json();
        if (result?.error) {
            toast.error(result?.error)
        } else {
            const { token, user } = result;
            login(token, user);
            toast.success('Welcome');
            Router.push('/');
        }
        setIsLoading(false);
        return;
    } catch (error) {
        console.error('Login error:', error);
        setIsLoading(false);
        return;
    };
};


export const registerFunction = async (data, setIsLoading, resetField, Router) => {
    try {
        setIsLoading(true);
        const { emailValue, passwordValue, nameValue, birthDateValue, lastNameValue, userNameValue } = data;

        const response = await fetch(`${CURRENT_HOST}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: emailValue, password: passwordValue, name: nameValue, birthdate: birthDateValue.toString(), last_name: lastNameValue, username: userNameValue, rol: 'user' }),
        });
       
        const result = await response.json();
        
        if (result?.error) {
            toast.error(result?.error)
        }else {
            resetField()
            toast.success('Successful registration');
            Router.push('/auth');
        }
        setIsLoading(false);
        return;

    } catch (error) {
        console.error('Login error:', error);
        setIsLoading(false);
        return;
    };
}