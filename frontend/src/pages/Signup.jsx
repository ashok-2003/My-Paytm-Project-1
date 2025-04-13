// so now here we will create the signup pages for it 
import {Heading} from "../components/Heading";
import {SubHeading} from "../components/SubHeading";
import {InputBox} from "../components/InputBox";
import {Button} from "../components/Button";
import {BottomWarning} from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { Backend_URL } from "../config";

export const Signup = () => {
  // so now for propogoating the changes we have to 
  const[firstname , setFirstname] = useState("");
  const[lastname , setLastname] = useState("");
  const[username , setUsername] = useState("");
  const[password , setPassword] = useState("");
  const Navigate = useNavigate();
    return (
      <div className="flex justify-center h-screen bg-slate-300">
        <div className="flex flex-col justify-center">
          <div className="p-2 px-4 text-center bg-white rounded-lg w-80 h-max">
            <Heading label={"Sign Up"} />
            <SubHeading label={"Give your all info to me hehe.."} />
            <InputBox label={"First Name"} sublabel={"First name"} onChange={(e) => {
              setFirstname(e.target.value);
            }} />
            <InputBox label={"Last Name"} sublabel={"last name"} onChange={(e) => {
              setLastname(e.target.value);
            }} />
            <InputBox label={"Email Id"} sublabel={"Your email."} onChange={(e) => {
              setUsername(e.target.value);
            }} />
            <InputBox label={"Password"} sublabel={"password"} onChange={(e) => {
              setPassword(e.target.value);
            }} />
            <div className="pt-4">
            <Button onClick={async () => {
            const response = await axios.post(`${Backend_URL}/users/signup`, {
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