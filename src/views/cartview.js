import NavBar from "../components/productDetails/navbar";
import Cart from "../components/productDetails/cart";
import Footer from "../components/productDetails/footer";
function App() {
  return (
    <div>
        <div className='w-screen h-screen'>
          <NavBar />
          <Cart />
          <Footer />
        </div>
        
    </div>
    
  );
}

export default App;