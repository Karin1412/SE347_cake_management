import NavBar from "./components/user/nav";
import Intro from "./components/user/home/Intro";
import Products from "./components/user/home/products";
import Story from "./components/user/home/story";
import Footer from "./components/user/footer";
function App() {
  return (
    <div className="flex flex-col">
        <div className='w-full h-full'>
          <NavBar />
          <Intro />
        </div>
        <div className="w-screen flex flex-col">
          <Products />
          <Story />
        </div>
        <div>
          <Footer />
        </div>
    </div>
    
  );
}

export default App;