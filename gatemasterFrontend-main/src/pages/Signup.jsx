import signupImg from "../assets/Images/signup3.png"
import Template from "../Components/core/Auth/Template"
import { useSelector } from "react-redux";

function Signup() {
  const {loading} = useSelector((state)=>state.auth);
  return (
    loading?(<div className=" h-[100vh] flex justify-center items-center bg-white"><div class="custom-loader bg-white"></div></div>):(
    <Template
      title="Join the millions learning to code with GATEMaster for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
    />
    )
  )
}

export default Signup
