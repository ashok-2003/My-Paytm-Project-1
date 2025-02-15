// so now it will export the url of the backend here 
export const Backend_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000/api/v1";
// export const Backend_URL = "http://localhost:3000/api/v1";

// when the docker conatiner will run it will pickup the enviroment varialbe like that to it's own container name 
// import.meta.env this is how vite import the url 
