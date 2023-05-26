
import banner from './assets/banner.png';
import Card from './assets/components/Card';
function App() {
  return (
    <div class="container m-auto">
      <header>
        <h1>Net the Ninja</h1>
      </header>
      <img class="rounded-md" src={banner} atl='banner-image'></img>
      <div class="grid grid-cols-4 gap-10 my-4">
      <Card >
      <h1>Ninja Tee, black shirt</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae laborum voluptatem sint eveniet, odio itaque velit quibusdam voluptate debitis necessitatibus. Dignissimos quibusdam esse voluptas minima iste praesentium quisquam aliquam!</p>
      <button className="btn">click me</button>
      </Card>
      <Card rounded={true} flat={false}>
      <h1>Ninja Bag, Swag ninja</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae laborum voluptatem sint eveniet, odio itaque velit quibusdam voluptate debitis necessitatibus. Dignissimos quibusdam esse voluptas minima iste praesentium quisquam aliquam!</p>
      <button className="btn">click me</button>
      </Card>
      <Card rounded={false} flat={true}>
      <h1>Ninja Cap, Cappe</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae laborum voluptatem sint eveniet, odio itaque velit quibusdam voluptate debitis necessitatibus. Dignissimos quibusdam esse voluptas minima iste praesentium quisquam aliquam!</p>
      <button className="btn">click me</button>
      </Card>

      </div>
    </div>
  );
}

export default App;
