import axios from 'axios'
import { useState, useEffect } from 'react'
import CardsShow from './cards2'
import './App.css';
import Loader from './loader'

function Exercise2() {
    const [dataArr, setData] = useState("")

    useEffect(() => {
        axios.get("https://dummyapi.io/data/v1/user?limit=50"
            , { 'headers': { 'app-id': "613e64e2748b558d779ce190" } })
            .then(response => {
                setData(response.data.data);
            })

    }, [])
    return (
        <div className="App">
            <header className="App-header">
                {!dataArr ? <Loader /> : <div> {


                    dataArr.map((item, i) => {
                        return (
                            <div key={i} style={{ padding: "10px" }}>
                                <CardsShow data={item} />
                            </div>
                        )

                    })}
                </div>
                }
            </header>
        </div>
    );
}
export default Exercise2