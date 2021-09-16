
import axios from 'axios'
import { useState, useEffect } from 'react'
import CardShow from './cards'
import './App.css';
import Loader from './loader'

function Exercise1() {
  const [dataArr, setData] = useState("")

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setData(res.data)
      }

      )
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        {!dataArr ? <Loader /> : <div> {dataArr.map((item, i) => {
          // console.log("item", item.title)
          return (
            <div key={i} style={{ padding: "10px" }}>
              <CardShow data={item} />
            </div>
          )

        })}
        </div>
        }


      </header>
    </div>
  );
}

export default Exercise1;
