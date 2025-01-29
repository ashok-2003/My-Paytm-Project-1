import {Heading} from "../components/Heading";
import {SubHeading} from "../components/SubHeading";
import {InputBox} from "../components/InputBox";
import {Button} from "../components/Button";
import {BottomWarning} from "../components/BottomWarning";
export const Signin = () =>{
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label ={"Sign In"}></Heading>
                <SubHeading label ={"Enter you info to access which i have already hehe .."}/>
                <InputBox label={"Email Id"} sublabel={"example123@gmail.com"} />
                <InputBox label={"Password"} sublabel={"asyxkhhti"} />
                <div className="pt-6">
                    <Button label={"SIGN IN"}/>
                </div>
                <div>
                    <BottomWarning label={"dose not have an account"} buttonText={"SignUp"} to={"/signup"} />
                </div>
            </div>
        </div>
    </div>
}