import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Backend_URL } from "../config";

export const Signin = () => {
    // similary here also recording the value 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    return <div className="flex justify-center h-screen bg-slate-300">
        <div className="flex flex-col justify-center">
            <div className="p-2 px-4 text-center bg-white rounded-lg w-80 h-max">
                <Heading label={"Sign In"}></Heading>
                <SubHeading label={"Enter your info to access which i have already hehe .."} />
                <InputBox label={"Email Id"} sublabel={"example123@gmail.com"} onChange={(e) => {
                    setUsername(e.target.value);
                }} />
                <InputBox label={"Password"} sublabel={"asyxkhhti"} onChange={(e) => {
                    setPassword(e.target.value);
                }} />
                <div className="pt-4">
                    <Button onClick={async () => {
                        const response = await axios.post(`${Backend_URL}/users/signin`, {
                            username,
                            password
                            // if the both value are same we can passon direct thier 
                        });
                        localStorage.setItem("token", response.data.token)
                        navigate("/dashboard")
                    }} label={"Sign In"} />
                </div>
                <div>
                    <BottomWarning label={"dose not have an account"} buttonText={"SignUp"} to={"/signup"} />
                </div>
            </div>
        </div>
    </div>
}