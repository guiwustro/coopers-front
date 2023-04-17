import axios from "axios";

const dev = "http://localhost:3000";
const prod = "https://coopers-kf47.onrender.com";

export const api = axios.create({
	baseURL: prod,
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});
