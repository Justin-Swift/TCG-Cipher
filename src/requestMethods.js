import axios from "axios";

const BASE_URL ="http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjI3YzJlNTkwZGZiYzgzMGFmNDQ5ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzIwNDQ2MSwiZXhwIjoxNjYzNDYzNjYxfQ.a0daLx93XbLMS4anMpzI7vA3ouHjoyozcZ4GZHAlMdc";

export const publicRequest = axios.create({
    
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{ token:`Bearer ${TOKEN}` },
});