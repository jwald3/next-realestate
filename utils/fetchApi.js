import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            "X-RapidAPI-Key":
                "11a155aebamshcd9dbc67f487f5cp1b7da8jsna63478d20f88",
            "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
    });

    return data;
};
