const initialState = {
  auth: {
    
  },
};
// {
//   "accessToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwYTdlNTRmOS1hODBiLTQyNTctODNjNi0zMmNiMGQ1ZDU5OTkiLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjEwNzk4Nzk1fQ.iRMjdxFS7LCx7ab9G1nFbxi9gQUR6XKYXsKqc2izRt6zN-u-bQPy3-n7_6FrkTc8ZASV-Tji884KFAk-MKYR_Q",
//   "refreshToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwYTdlNTRmOS1hODBiLTQyNTctODNjNi0zMmNiMGQ1ZDU5OTkiLCJ0eXBlIjoicmVmcmVzaCIsImV4cCI6MTYxNjc2MDM5NX0.IyNgggZd9lGXa7YGoEDICMg2YcouRBzujqbbv85X4xHPqOpzenBoEhNqm2ig5Xiy0UNB4lhT_peO5Uf3ZLOW1Q",
//   "exp": 1610798795710,
//   "externalId": "0a7e54f9-a80b-4257-83c6-32cb0d5d5999",
//   "forename": "Jacky",
//   "surname": "Jim",
//   "title": "Mr."
// }

export default (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        auth: action.payload,
      };
    default:
      return state;
  }
};


// curl "https://api.dev.unaro.co.uk/v3/api/organisations/355d3529-a6c1-470b-983a-845b604a3976/contacts?size=16&page=0&name=&type=&sort=forename" \
// -H "authority: api.dev.unaro.co.uk" \
// -H "accept: application/json, text/plain, */*" \
// -H "authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhY2U5ZDRkMi0wYjhkLTExZWEtOTUxOC00MjAxMGE5YTAwMDMiLCJ0eXBlIjoiYWNjZXNzIiwicHJpbWFyeU9yZ2FuaXNhdGlvbiI6IjhkY2MzNjgwLTBiOGEtMTFlYS05NTE4LTQyMDEwYTlhMDAwMyIsImN1cnJlbnRPcmdhbmlzYXRpb24iOiI4ZGNjMzY4MC0wYjhhLTExZWEtOTUxOC00MjAxMGE5YTAwMDMiLCJwZXJtaXNzaW9ucyI6Ik1FU1NBR0VfUkVBRCxJTlZJVEVfVVNFUixPUkdBTklTQVRJT05fUkVBRCxPUkdBTklTQVRJT05fV1JJVEUsUFJPSkVDVF9SRUFELFBST0pFQ1RfV1JJVEUsQVBJS0VZX1JFQUQsQVBJS0VZX1dSSVRFLE1FU1NBR0VfUkVBRCxURVNUUExBTl9SRUFELFRFU1RQTEFOX1dSSVRFLFJPVVRFX1JFQUQsUk9VVEVfV1JJVEUsVEVTVEVYRUNVVElPTl9SRUFELFRFU1RFWEVDVVRJT05fV1JJVEUsU0xBX1dSSVRFLFNMQV9SRUFELExJQ0VOQ0VfV1JJVEUiLCJsaWNlbmNlcyI6IltdIiwiZXhwIjoxNjEwMDI0NzU4fQ.IZF-YF06iTaviXnDzL2BRjmeDo5xzX1RCH1E3o-bbV2hm5eD8MYi85arb-jr5B5CCZ1S7DZRyOstSG6l-AN47g" \
// -H "user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36" \
// -H "origin: https://dashboard.dev.unaro.co.uk" \
// -H "sec-fetch-site: same-site" \
// -H "sec-fetch-mode: cors" \
// -H "sec-fetch-dest: empty" \
// -H "referer: https://dashboard.dev.unaro.co.uk/" \
// -H "accept-language: ro-RO,ro;q=0.9,en-US;q=0.8,en;q=0.7,de;q=0.6,es;q=0.5" \
// --compressed