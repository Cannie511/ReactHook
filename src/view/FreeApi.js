import { useState, useEffect } from "react"
import axios from "axios"

const FreeApi = () => {
    const [dataCoin, setDataCoin] = useState([])
    //component did mount
    useEffect(async () => {
        let res = await axios.get('http://universities.hipolabs.com/search?country=Viet+Nam');
        let data = res && res.data && res.data.bpi ? res.data.bpi : []
        setDataCoin(data);
        console.log(">>>check bitcoin: ", res.data.bpi);
    }, [])
    return (
        <>
            <table>
                {console.log("check data coin: ", dataCoin)}
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Rate</th>
                        <th>Discription</th>
                        <th>1 Bitcoin for</th>
                    </tr>
                </thead>
                <tbody>
                    {dataCoin && dataCoin.length > 0 && dataCoin.map(item => {
                        return (
                            <tr key={item.code}>
                                <td>{item.code}</td>
                                <td>Maria Anders</td>
                                <td>Germany</td>
                                <td>Germany</td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </>
    )
}
export default FreeApi