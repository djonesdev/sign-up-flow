import axios from "axios";

import { config } from "../config";

export const registerApi = {
  register: (userDetails) => {
    const {
      firstName,
      surname,
      dob,
      gender,
      email,
      trackAndTrace,
    } = userDetails.payload;
    return axios({
      url: `${config.baseUrl}/contact/register`,
      method: "POST",
      headers: { api_key: `${config.apiKey}` },
      data: {
        firstName,
        surname,
        dob,
        gender,
        email,
        trackAndTrace,
        organisationId: config.organisationId,
      },
    });
  },
  authenticateUser: (userName) => {
    axios({
      url: `${config.baseUrl}/user/authenticate`,
      method: "POST",
      headers: { api_key: `${config.apiKey}` },
      data: { name: "callum@gmail.com", password: "password123" },
    });
  },
  getOptInUsers: (externalId, token) => {
    axios({
      url: `${config.baseUrl}/organisations/${externalId}/contacts?size=16&page=0&name=&type=&sort=forename`,
      method: "GET",
      headers: {
        api_key: `${config.apiKey}`,
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
