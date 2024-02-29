import { useState, useEffect } from "react"
import { useRouter } from "next/router"

import InputWithSuggestions from "../form/input/inputWithSuggestions/InputWithSuggestions"


export const SearchCity = (props) => {
    const [searchText, setSearchText]  = useState('')
    const [suggestions, setSuggestions] = useState([])
    const router = useRouter()

    const fetchCitiesList = async () => {
        const CITIES_LIMIT = 5
        // console.log(`http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=${CITIES_LIMIT}&appid=${process.env.NEXT_PUBLIC_OWM_KEY}`)
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=${CITIES_LIMIT}&appid=${process.env.NEXT_PUBLIC_OWM_KEY}`)
        const json = await response.json()
        handleList(json)
    }

    const handleList = (list) => {
        const formatList = list.map((obj) => ({
            text: `${obj.name}, ${obj.state}, ${obj.country}`, 
            onClick: () => router.push(`/info/${obj.lat}/${obj.lon}`)
        }))
        setSuggestions(formatList)
    }

    useEffect(() => {
        if (searchText.length >= 3) fetchCitiesList()
        else setSuggestions([])
    }, [searchText])

    return (
        <
            InputWithSuggestions 
            placeholder="Informe o nome da cidade!" 
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            suggestions={suggestions}
        />
    )
}




