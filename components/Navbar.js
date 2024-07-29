import Link from "next/link";
import { useUser } from '@/lib/UserContext';
import { useItemsNavbar } from "@/hooks/navBarHook";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default ({ }) => {
    const router = useRouter();
    const { user, logout } = useUser();
    const { itemsListNavBar, handleItemsStatus } = useItemsNavbar();

    useEffect(() => {
        const currentItem = sessionStorage.getItem('itemNavbar');
        if (currentItem) {
            if (user?.id && router.pathname !== '/auth' && router.pathname !== '/register') {
                router.push(itemsListNavBar[currentItem]?.href || '/');

            }
        }

    }, [itemsListNavBar]);

    return (
        <nav className="absolute right-0 top-0 sticky-0 w-full lg:h-20 h-24 bg-indigo-700 flex flex-col lg:flex-row lg:justify-between justify-center gap-4 lg:gap-0 items-center text-white px-10 py">
            <div>
                <span className="font-bold text-white text-2xl">{"< JEANDev />"}</span>
            </div>
            <ul className="flex flex-row gap-2 md:gap-10 lg:justify-end justify-center">
                {user?.id && itemsListNavBar?.map((item, indexItem) => {
                    return (
                        <li
                            key={item.id}
                            className={`hover:font-semibold md:w-32 w-20 text-[10px] md:text-[15px] ${item.status && 'outline outline-1 outline-offset-1 rounded-md text-center cursor-pointer'}`}
                            onClick={() => handleItemsStatus(indexItem)}
                        >
                            <Link href={item.href}>{item.value}</Link>
                        </li>
                    )
                })}

                {user?.id && <button
                    className={`hover:font-semibold md:w-32 w-20 text-[10px] md:text-[15px]`}
                    onClick={() => {
                        logout();
                    }}>
                    Log Out

                </button>}
            </ul>
        </nav>
    )
}