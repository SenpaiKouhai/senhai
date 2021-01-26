import axios from "axios"
import { useEffect, useState } from "react"

export const OpVideo = ( { id }) =>{
    const [op, setOp] = useState('')
    const url = 'https://anusic-api.herokuapp.com/api/v1/anime/' + id

    useEffect( () => {
        let unmount = false
        axios.get(url)
        .then( res => {
            if(!unmount) {
                console.log(res.data)
            }
        })
        .catch( err => console.log(err))
    }, [url])
    
    return(
        <div>
            asd
        </div>
    )
}