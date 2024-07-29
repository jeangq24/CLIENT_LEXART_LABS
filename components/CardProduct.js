import { Trash } from "@phosphor-icons/react";

export default ({ product, modeHistory = false }) => {
    const { name, lot_number, price, stock, entry_date } = product;
    return (
        <div className="flex flex-col items-start gap-6 rounded-md bg-slate-200 drop-shadow-md w-60 h-72 p-4">
            <div className="w-full font-semibold flex flex-row justify-end gap-2"><span>Lot number:</span><span>{lot_number}</span></div>

            <div className="w-full h-auto flex flex-col gap-2 items-start">
                <div className=" flex flex-row justify-start gap-2"><span className="font-semibold">Name:</span><span>{name}</span></div>
                <div className=" flex flex-row justify-start gap-2"><span className="font-semibold">Price:</span><span>{price}</span></div>
                <div className=" flex flex-row justify-start gap-2"><span className="font-semibold">Stock:</span><span>{stock}</span></div>
                <div className=" flex flex-row justify-start gap-2"><span className="font-semibold">Entry date:</span><span>{entry_date}</span></div>

                <div className="w-full h-full grid grid-cols-2 gap-2">
                    <button>
                        <Trash size={32} />
                    </button>
                </div>
            </div>

        </div>
    )
}