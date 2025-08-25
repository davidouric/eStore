import Navbar from "./Navbar"
import Fashionsectn from "./Fashionsectn"
import Services from "./Services"
import Products from "./Products"
import Bestseller from "./Bestseller"
import Allproducts from "./Allproducts"
import Emailsectn from "./Emailsectn"
import Infosection from "./Infosection"
import Footersctn from "./Footersctn"

let Home = ()=>{
  return(
    <div>
      <h1 className="bg-blue-950 text-white text-center">Welcome to my estore</h1>
      <Navbar/>
      <Fashionsectn/>
      <Services/>
      <Products/>
      <Bestseller/>
      <Allproducts/>
      <Emailsectn/>
      <Infosection/>
      <Footersctn/>
    </div>
  )
}
export default Home