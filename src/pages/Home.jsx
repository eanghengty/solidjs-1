import Card from './../assets/components/Card';
import {createResource} from 'solid-js';
import {Routes,Route,A} from '@solidjs/router';
const fetchProduct = async () => {
    const res = await fetch('http://localhost:4000/products')
    return res.json();
}

export default function Home(){
    const [products]=createResource(fetchProduct)
    return(
    <Show when={products()} fallback={<p>loading products</p>}>
    <div class="grid grid-cols-4 gap-10 my-4">
        <For each={products()}>
            {(product)=>(
                <Card rounded={true} flat={true}>
                    <img src={product.img} alt="image"></img>
                    <h2 class="my-3 font-bold">{product.title}</h2>
                    <A class="btn" href={"/products/"+ product.id}>View</A>
                    
                </Card>
            )}
        </For>

      </div>
      </Show>
    );
}