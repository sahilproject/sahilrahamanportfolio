import { navlinks } from "@/constant/constant"
import Link from "next/link"
import { CgClose } from "react-icons/cg"

type props ={
  showNav:boolean;
  closeNav:()=>void
}


const MobileNav = ({closeNav,showNav}:props) => {
  const navOpen=showNav ? "translate-x-0" : "translate-x-[100%]"
  return (
    <div>
      <div className={`fixed ${navOpen} transform transition-all duration-500  inset-0 z-[1000] bg-blue opacity-100 w-full h-screen`}>
         <div className={`text-black ${navOpen} transform transition-all duration-500 delay-200 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#F2F2F2] space-y-6 z-[10000]`} >
         {
          navlinks.map((navlink)=>{
            return <Link  key={navlink.id} href={navlink.url}>
              <p className="nav-links text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">{navlink.label}</p> </Link>
        })
         } 
         {/* close btn  */}
         <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-black"/>
         </div>
      </div>
    </div>
  )
}

export default MobileNav
