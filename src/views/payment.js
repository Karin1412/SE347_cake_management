import NavBar from "../components/productDetails/navbar";
import Payment from "../components/cartPayment/payment";
import Footer from "../components/productDetails/footer";
function App() {
  return (
    <div>
        <div className='w-screen h-screen'>
          <NavBar />
          <Payment />
          <Footer />
        </div>
        
    </div>
    
  );
}

export default App;