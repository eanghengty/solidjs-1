import { useParams } from "@solidjs/router"
import { createResource } from "solid-js";

const fetchProduct = async (id)=>{
    const res = await fetch("http://localhost:4000/products/" + id)
    return res.json()
}

export default function Product(){

   
    const params=useParams()
    const [products]=createResource(params.id, fetchProduct)
    
    return (
        <div class="my-7 ">
            <Show when={products()} fallback={<p>Loading item . . . </p>}>
            <div class="grid grid-cols-5 gap-7">
            <img src={products().img} alt="image"></img>
            </div>
            <div class="col-span-3">
                <h2 class="text-3xl font-bold mb-7">{products().title}</h2>
                <p>{products().description}</p>
                <p class="my-7 text-2xl">Only ${products().price}</p>
            </div>
            </Show>
        </div>
    )
}