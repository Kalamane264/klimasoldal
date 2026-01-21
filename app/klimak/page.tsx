import ProductList from "../components/ProductList"
import { products } from "@/app/lib/products";

export default function KlimaLista() {

    const klimak = products.filter(p => p.type == "ac");

    return <>
    <ProductList products={klimak} />
    </>
}