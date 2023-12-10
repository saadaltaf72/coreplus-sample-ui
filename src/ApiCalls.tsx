import axios from 'axios';
var baseUrl = "http://localhost:5279/"


export const getAllPractitioners = async () => {
    try {
        const response = await axios.get(baseUrl+'practitioners');
        return response.data;
    } catch (error) {
        return 'some error occured ' + error;
    }

};


export const getSupervisors = async () => {
    try {
        const response = await axios.get(baseUrl+'practitioners/supervisors');
        return response.data;
    } catch (error) {
        return 'some error occured ' + error;
    }
};

export const getRemaining = async () => {
    try {
        const response = await axios.get(baseUrl+'practitioners/remaining');
        return response.data;
    } catch (error) {
        return 'some error occured ' + error;
    }
};