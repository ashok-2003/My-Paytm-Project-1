import { useEffect, useState } from "react";
import { Users } from "../components/Users";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import axios from "axios";
import { Backend_URL } from "../config";

export const Dashboard = () => {
    const [balance, setBalance] = useState("0");

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`${Backend_URL}/accounts/balance`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setBalance(response.data.balance);
            } catch (error) {
                console.error("Error fetching balance:", error);
            }
        };

        fetchBalance();
    }, []); // Empty dependency array to run only once on mount

    return (
        <div>
            <Appbar />
            <div className="m-8">
                <Balance value={balance} />
                <Users />
            </div>
        </div>
    );
};