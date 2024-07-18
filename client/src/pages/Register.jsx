import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useRegisterMutation } from "../../redux/api/authApi"
import { useSelector } from "react-redux"
import toast from "react-hot-toast"


const Register = () => {
    const navigate = useNavigate()
    const[user, setUser] = useState({
        name : "",
        email : "",
        password : ""
    })
    const {name, email, password} = user
  const[register, {isLoading, error, data}] =  useRegisterMutation();
  const {isAuthenticated} = useSelector((state)=> state.auth)
  useEffect(()=>{
    if (isAuthenticated) {
        navigate("/login")
    }
    if (error) {
        toast.error(error?.data?.message);
      }
},[error, isAuthenticated])
const submitHandler =(e)=>{
e.preventDefault()
const registerData ={
    name,
    email,
    password,
}
register(registerData)
}
const onChange = (e) =>{
    setUser({...user, [e.target.name] : e.target.value})
}
  return (
   
    <div>
    <div>
    <section className=" body-font bg-gray-100">
      <div className="container xl:px-32 px-5 py-36 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-bold lg:text-7xl text-6xl text-blue-600 text-center md:text-left ">facebook</h1>
          <p className="leading-relaxed mt-4 lg:text-3xl text-2xl lg:max-w-xl font-medium  text-black text-center md:text-left ">Facebook helps you connect and share with the people in your life.</p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-white shadow-lg rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <form action="" onSubmit={submitHandler}>
     
          <div className="relative mb-4">
            <input type="email"  name="email" placeholder="Email address or phone number" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg outline-none  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={email} onChange={onChange}/>
          </div>
          <div className="relative mb-4">
            <input type="passwrd"  name="password" placeholder="Password" className="w-full  bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  outline-none text-lg text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={password} onChange={onChange}/>
          </div>
     
         
          <button className="text-white border-0 py-2 px-8 focus:outline-none font-medium  rounded text-xl bg-blue-600 " >{isLoading ? "Loging.." : "Log In"}</button>
          </form>
          <p className="text-sm text-blue-500 py-5 text-center">Forgotten password?</p>
          <hr className="my-5" />
          <button className="text-white  border-0 py-2 px-8 focus:outline-none font-medium  rounded text-xl bg-green-500 " >
            <Link to="/login">Create New Account</Link></button>
        </div>
        
        <div className="lg:w-2/6 md:w-1/2 bg-transparent rounded-lg p-8 flex flex-col md:ml-auto w-full mt-3 md:mt-0">
        <p className="text-sm text-gray-700 mt-3 text-center"><b>Create a Page</b> for a celebrity, band or business</p>
    
        </div>
       
      </div>
      
    </section>
       </div>
    
    
  
    </div>
  )
}

export default Register