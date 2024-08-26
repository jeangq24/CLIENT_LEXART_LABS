import CardProduct from "@/components/CardProduct.js";
import Container from "@/components/Container.js"
import LoadingComponent from "@/components/LoadingComponent.js";
import { useListProducts } from "@/hooks/products.js";
import { useUser } from '@/lib/UserContext.js';

export default () => {
    const { user } = useUser();
    const { listProducts, loading } = useListProducts(user?.token);
    return (
        <Container>
            {listProducts.length === 0 ?
                <LoadingComponent />
                :
                <div className="w-full h-full lg:mt-20 mt-24 flex flex-col gap-4">
                    <h1 className="text-lg font-bold w-full text-center py-4">Product List </h1>
                    <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-3">
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



