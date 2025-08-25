import Footersctn from "./Aboutfooter"
import Infosection from "./Aboutinfo"
import Navbar from "./Aboutnav"
import Bestseller from "./Aboutusers"
import Products from "./Aboutvideo"
import Fashionsectn from "./History"
import Services from "./Mission"
import Allproducts from "./Testimonials"

let About = ()=>{
  return(
    <div>
      <h1 className="bg-blue-950 text-white text-center">Welcome to my estore</h1>
    <Navbar/>
     <Services/>
     <Products/>
     <Bestseller/>
     <Allproducts/>
     <Infosection/>
     <Footersctn/> 
    </div>
  )
}
export default About