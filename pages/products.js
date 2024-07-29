import CardProduct from "@/components/CardProduct";
import Container from "@/components/Container"
import LoadingComponent from "@/components/LoadingComponent";
import { useListProducts } from "@/hooks/products";
import { useUser } from '@/lib/UserContext';

export default () => {
    const { user } = useUser();
    const { listProducts, loading } = useListProducts(user?.token);
    return (
        <Container>
            {loading || !listProducts[0] ?
                <LoadingComponent />
                :
                <div className="w-full h-full lg:mt-20 mt-24 flex flex-col gap-4">
                    <h1 className="text-lg font-bold w-full text-center py-4">Product List </h1>
                    <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-3 flex justify-center items-center">
                        {listProducts?.map((product) => {
                            return (
                                <CardProduct product={product} key={product.lot_number} />
                            )
                        })}
                    </div>

                </div>
            }
        </Container>
    )
}



