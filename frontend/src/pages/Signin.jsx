import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
    // similary here also recording the value 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign In"}></Heading>
                <SubHeading label={"Enter you info to access which i have already hehe .."} />
                <InputBox label={"Email Id"} sublabel={"example123@gmail.com"} onChange={(e) => {
                    setUsername(e.target.value);
                }} />
                <InputBox label={"Password"} sublabel={"asyxkhhti"} onChange={(e) => {
                    setPassword(e.target.value);
                }} />
                <div className="pt-4">
                    <Button onClick={async () => {
                        const response = await axios.post("http://localhost:3000/api/v1/users/signin", {
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