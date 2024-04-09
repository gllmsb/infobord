import { myFetch } from "../utils/apiUtils.js"

export const menu = async () => {
    const endpoint = "https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?type=json"
    const data = await myFetch(endpoint)

    const container = document.getElementById("menu")
    container.innerHTML = ""

    const curday = (new Date().getDay()-1)

    const ul = document.createElement("ul")
    
    data && data.Days && data.Days.map((value, key) => {
        if (key >= curday) {
             const li = document.createElement("li")
            li.innerHTML = `<span>${value.DayName}:</span>
                            <span>${value.Dish}:</span>`

            if (key === curday) {
            li.classList.add("active")
            }
            ul.appendChild(li)
        }
    })

    container.appendChild(ul)
    
    // Reload menu every 5 minutes
    setInterval(() => {
        menu()
    },3600000) 
}