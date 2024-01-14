import NavBar from "../components/productDetails/navbar";
import Intro from "../components/user/home/Intro";
import Products from "../components/user/home/products"
import Story from "../components/user/home/story";
import Footer from "../components/user/footer"

function App() {
  return (
    <div>
        <div className='w-screen h-screen'>
          <NavBar />
          <Intro />
          <Products />
          <Story />
          <Footer />
        </div>
        
    </div>
    
  );
}

export default App;