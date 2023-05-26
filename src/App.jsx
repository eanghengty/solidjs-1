
import banner from './assets/banner.png';
import {Routes, Route, A} from '@solidjs/router';
import {createSignal} from 'solid-js';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';

function App() {
  const [darkTheme,setDarkTheme]=createSignal(false)
  const [moonIcon,setMoonIcon]=createSignal("🌑")
  function toggleTheme(){
    setDarkTheme(!darkTheme())
    if(darkTheme()===true){
      setMoonIcon("🌝")
    }else{
      setMoonIcon("🌑")
    }
  }
  return (
    <div class="container m-auto">
      <header class="my-4 p-2 text-xl flex items-center gap-4"
      classList={{"bg-neutral-900":darkTheme(), "text-white":darkTheme()}}>
      <span class="material-symbols-outlined cursor-pointer"
      onClick={toggleTheme}>
        {moonIcon()}
      </span>
        <h1>Net the Ninja</h1>
      <A href="/">Home</A>
      <A href="/Cart">Cart</A>

      </header>
      <img class="rounded-md" src={banner} atl='banner-image'></img>

      <Routes>
        <Route component={Home} path="/"/>
        <Route path='/Cart' component={Cart}/>
        <Route path='/products/:id' component={Product}/>
      </Routes>

    </div>
  );
}

export default App;
