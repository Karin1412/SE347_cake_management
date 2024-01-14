import NavBar from "../components/productDetails/navbar";
import ImgProduct from "../components/productDetails/imgproduct";
import ProductDetails from "../components/productDetails/productDetails";
import Comments from "../components/productDetails/comments";
import FeatureProduct from "../components/productDetails/featureProduct";
import BuyMore from "../components/productDetails/buyWith";
import Footer from "../components/productDetails/footer";

function ProductDetail() {
  return (
    <div className='w-screen h-screen'>
        <NavBar />
        <div className="flex-row xs:flex-col flex mx-[7%] mt-[3%] w-screen">
          <div className="flex flex-col mr-8 w-full">
            <ImgProduct />
            <Comments />
          </div>
          <div className="flex flex-col">
            <ProductDetails />
            <BuyMore />
          </div>
        </div >
        <div className='mx-[7%]'>
          <FeatureProduct/>
        </div>
        <Footer/>
    </div>
  );
}

export default ProductDetail;
