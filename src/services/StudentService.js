class StudentService {
    axios
    baseUrl

    constructor(axios, apiUrl) {
        this.axios = axios
        this.baseUrl = `${apiUrl}students`
    }

    getAll() {
        let self = this;
        return self.axios.get(`${self.baseUrl}`);
    }
}

export default StudentService
