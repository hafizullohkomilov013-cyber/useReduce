  import React, { useState } from 'react'
  import datas from './data/data.js'

  function App() {
    const [data, setData] = useState(datas)

    function likes (id){
      console.log(id);
      let arr = data.map((item) => {
        if(item.id === id){
          return {...item, likes: item.likes + 1}
        }else{
         return item
        }
      })
      setData(arr)
    }
    function disLikes (id){
      console.log(id);
      let arr = data.map((item) => {
        if(item.id === id){
          return {...item, disLikes: item.disLikes + 1}
        }else{
         return item
        }
      })
      setData(arr)
    }
    function deletes (id){
      console.log(id);
      let arr = data.filter((item) => {
        return item.id !== id
      })
      setData(arr)
    }
    return (
      <div className='images-container'>
        {data.map((item) => {
          return (
              <div className='buttons-container'>
                <button onClick={() => likes(item.id)}>+</button>
                <button onClick={() => disLikes(item.id)}>-</button>
                <button onClick={() => deletes(item.id)}>🗑</button>
              </div>
          );
        })}
      </div>
    )
  }

  export default App
