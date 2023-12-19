import NavBar from "./components/productDetails/navbar";
import Intro from "./components/home/Intro";
import Products from "./components/home/products";
import Story from "./components/home/story";

function App() {
  return (
    <div>
        <div className='w-screen h-screen'>
          <NavBar />
          <Intro />
        </div>
        <div className="">
          <Products />
          <Story />
        </div>
    </div>
    
  );
}

export default App;