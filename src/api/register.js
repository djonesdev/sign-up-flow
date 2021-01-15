import axios from "axios";

import { config } from "../config";

export const registerApi = {
  register: userDetails => {
    return axios({
      url: `${config.baseUrl}/contact/register`,
      method: "POST",
      headers: {'api_key': `${config.apiKey}`},
      data: userDetails,
    });
  },
};

// {
//   title: "Mr.",
//   gender: "male",
//   registrationType: "EMAIL",
//   forename: "Jacky",
//   surname: "Jim",
//   phones: [{ phoneNumber: "07439392912" }],
//   email: "suciuandrei94+jacky@gmail.com",
//   contactType: "PERSON",
//   organisationId: "355d3529-a6c1-470b-983a-845b604a3976",
//   trackAndTrace: true,
// }
