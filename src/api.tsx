import axios from "axios";

const APP_ID = "HCYxja2zNsn3yjpOtzSdAmlOPwtjMI4NX5TwDE5N";
const REST_API_KEY = "IcoHxaEmJpmt8ASe0ApYH39bjM1eteawooTMNLPT";
const BASE_URL = "https://parseapi.back4app.com/classes";

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "X-Parse-Application-Id": APP_ID,
        "X-Parse-REST-API-Key": REST_API_KEY,
        "Content-Type": "application/json"
    }
});

export async function getProjects() {
    const response = await api.get("/projetos");
    return response;
}

export async function getProjectById(id: string) {
    const response = await api.get(`/projetos/${id}`);
    return response;
}