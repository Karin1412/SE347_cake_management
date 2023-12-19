import NavBar from "../components/productDetails/navbar";
import Intro from "../components/user/home/Intro";
import Products from "../components/user/home/products"
import Story from "../components/user/home/story";

function App() {
  return (
    <div>
        <div className='w-screen h-screen'>
          <NavBar />
          <Intro />
          <Products />
          <Story />
        </div>
        
    </div>
    
  );
}

export default App;