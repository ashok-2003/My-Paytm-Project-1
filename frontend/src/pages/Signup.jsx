// so now here we will create the signup pages for it 
import {Heading} from "../components/Heading";
import {SubHeading} from "../components/SubHeading";
import {InputBox} from "../components/InputBox";
import {Button} from "../components/Button";
import {BottomWarning} from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

export const Signup = () => {
  // so now for propogoating the changes we have to 
  const[firstname , setFirstname] = useState("");
  const[lastname , setLastname] = useState("");
  const[username , setUsername] = useState("");
  const[password , setPassword] = useState("");
  const Navigate = useNavigate();
    return (
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign Up"} />
            <SubHeading label={"Give you all info to me hehe.."} />
            <InputBox label={"First Name"} sublabel={"Ashoka"} onChange={(e) => {
              setFirstname(e.target.value);
            }} />
            <InputBox label={"Last Name"} sublabel={"Gupta"} onChange={(e) => {
              setLastname(e.target.value);
            }} />
            <InputBox label={"Email Id"} sublabel={"example123@gmail.com"} onChange={(e) => {
              setUsername(e.target.value);
            }} />
            <InputBox label={"Password"} sublabel={"asyxkhhti"} onChange={(e) => {
              setPassword(e.target.value);
            }} />
            <div className="pt-4">
            <Button onClick={async () => {
            const response = await axios.post("http://localhost:3000/api/v1/users/signup", {
              username,
              firstname,
              lastname,
              password
              // if the both value are same we can passon direct thier 
            });
            localStorage.setItem("token", response.data.token)
            Navigate("/dashboard")
          }} label={"Sign up"} />
            </div>
            <div>
              <BottomWarning label={"Already have an account?"} buttonText={"Sign In"} to={"/signin"} />
            </div>
          </div>
        </div>
      </div>
    );
};