import axios from "axios";

const API_URL = "https://krds-assignment.github.io/aoc/api-assets/";

class Services
{
    getPublicContent() {
        return axios.get(API_URL +"data.json");
      }
}

export default new Services();