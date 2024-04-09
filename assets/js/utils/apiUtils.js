// export const myFetch = async (endpoint) => {
//     let response = ''

//     try {
//         response = await fetch(endpoint)
//         if (response.ok) {
//             const data = await response.json()
//             return data 
//         }
//     } catch (error) {
//         console.log(`Error in Fetch: ${error}`)
//     }
// }
// /**
//  * Fetch function
//  */
// export const myFetch = async (endpoint) => {
//     try {
//         const response = await fetch(endpoint)
//         if(response.ok) {
//             return await response.json()
//         }
//     }catch (error) {
//         console.log(`Error in fetch function: ${error}`);
//     }
// }
/**
 * Fetch function
 */
export const myFetch = async (endpoint) => {
    try {
        const response = await fetch(endpoint)
        if(response.ok) {
            return await response.json()
        } else {
            throw new Error('Network response was not ok.');
        }
    } catch (error) {
        console.log(`Error in fetch function: ${error}`);
        throw error;
    }
}