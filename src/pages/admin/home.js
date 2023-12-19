import Navbar from "../../components/admin/navbar";
import Table from "../../components/admin/table";
import SearchBar from "../../components/admin/searchbar";
import AddProductButton from "../../components/addproductbutton";

function Home(){
    return(
        <div>
            <Navbar></Navbar>
            <div className="flex w-full m-10">
                    <SearchBar></SearchBar>
                    <AddProductButton></AddProductButton>       
            </div>
            <Table></Table>
        </div>
       
    );
}

export default Home;