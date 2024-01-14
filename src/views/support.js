import NavBar from "../components/productDetails/navbar";
import Header from "../components/user/support/hello_hwchy"
import Hotnews from "../components/user/support/news_n_ques"
import Footer from "../components/user/footer"

function App() {
    return (
      <div className='w-screen h-screen'>
          <NavBar />
          <div className='w-screen h-[40%]'>
            <Header />
          </div>
          <Hotnews />
          <Footer />
      </div>
      
    );
  }
  
  export default App;