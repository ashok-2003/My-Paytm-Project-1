// so now here we will create the signup pages for it 
import {Heading} from "../components/Heading";
import {SubHeading} from "../components/SubHeading";
import {InputBox} from "../components/InputBox";
import {Button} from "../components/Button";
import {BottomWarning} from "../components/BottomWarning";

export const Signup = () => {
    return (
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign Up"} />
            <SubHeading label={"Give you all info to me hehe.."} />
            <InputBox label={"First Name"} sublabel={"Ashoka"} />
            <InputBox label={"Last Name"} sublabel={"Gupta"} />
            <InputBox label={"Email Id"} sublabel={"example123@gmail.com"} />
            <InputBox label={"Password"} sublabel={"asyxkhhti"} />
            <div className="pt-6">
              <Button label={"SIGN UP"} />
            </div>
            <div>
              <BottomWarning label={"Already have an account?"} buttonText={"Sign In"} to={"/signin"} />
            </div>
          </div>
        </div>
      </div>
    );
};