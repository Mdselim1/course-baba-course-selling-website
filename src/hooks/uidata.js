import { useEffect, useState } from "react"

const UiData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('./myuidata.json')
            .then(resp => resp.json())
        .then(dat => setData(dat))
    }, [])
    return [data];
}
export default UiData;