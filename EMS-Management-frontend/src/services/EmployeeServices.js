
import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/employees';

export const listEmployees = () => axios.get(REST_API_BASE_URL);

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);

export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL +'/'+ employeeId);
// export const getEmployee = (employeeId) => {
//     return axios.get(`${REST_API_BASE_URL}/${employeeId}`, {
//       // Optionally handle redirects
//       maxRedirects: 5,  // Example: maximum number of redirects to follow
//       validateStatus: function (status) {
//         return status >= 200 && status < 300;  // Resolve only if status is in the range
//       }
//     });
//   };

export const updateEmployee = (employeeId, employee) => axios.put(REST_API_BASE_URL + '/' + employeeId, employee);

export const deleteEmployee = (employeeId) => axios.delete(REST_API_BASE_URL + '/' + employeeId);
