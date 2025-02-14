import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Backend_URL } from "../config";


export const Users = () => {
    // Replace with backend call
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get(`${Backend_URL}/users/bulk?filter=`+filter)
            .then(response => {
                setUsers(response.data.users)
            })
    }, [filter])

    return <>
        <div className="mt-6 text-lg font-bold">
            Users
        </div>
        <div className="my-2">
            <input onChange={(e) => {
                setFilter(e.target.value)
            }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
            {users.map(user => <User user={user} />)}
        </div>
    </>
}

function User({user}) {
    const navigate = useNavigate();
    // to navigate to the send money page we are using this 

    return <div className="flex justify-between">
        <div className="flex">
            <div className="flex justify-center w-12 h-12 mt-1 mr-2 rounded-full bg-slate-200">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                    {/* so this gives the first letter of the name in the input  */}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                    {/* display the whole name  */}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Button onClick={(e) => {
                navigate("/sendmoney?id=" + user._id + "&name=" + user.firstName);
            }} label={"Send Money"} />
        </div>
    </div>
}