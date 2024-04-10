import { myFetch } from "../utils/apiUtils.js"

export const events = async () => {
    // Fetch event data from the API
    const endpoint = "https://iws.itcn.dk/techcollege/schedules?departmentcode=smed"
    const data = await myFetch(endpoint)


    const endpoint_friendly = "https://api.mediehuset.net/infoboard/subjects"
    const friendly_data = await myFetch(endpoint_friendly)

    console.log(friendly_data);
}