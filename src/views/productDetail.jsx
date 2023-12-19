import NavBar from "../components/productDetails/navbar";
import ImgProduct from "../components/productDetails/imgproduct";
import ProductDetails from "../components/productDetails/productDetails";
import Comments from "../components/productDetails/comments";
import FeatureProduct from "../components/productDetails/featureProduct";

function ProductDetail() {
  return (
    <div className='w-screen h-screen'>
        <NavBar />
        <div className="flex-row xs:flex-col flex mx-[7%] mt-[3%] w-screen">
          <div className="flex flex-col mr-8 w-[100%]">
            <ImgProduct />
            <Comments />
          </div>
          <div className="flex flex-col">
            <ProductDetails />

          </div>
        </div >
        <div className='mx-[7%]'>
          <FeatureProduct/>
        </div>
    </div>
  );
}

export default ProductDetail;
