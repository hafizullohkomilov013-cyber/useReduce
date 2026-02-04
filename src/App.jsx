  import {useReducer } from 'react'
  import datas from './data/data.js'

  function reducer(state, action){
    console.log(state);
    let {type} = action
    if(type === "count+1"){
      console.log("dad");
      
    }
  }

  function App() {

    let [counter, dispatch] = useReducer(reducer, datas)


    // const [data, setData] = useState(datas)

    // function likes (id){
    //   console.log(id);
    //   let arr = data.map((item) => {
    //     if(item.id === id){
    //       return {...item, likes: item.likes + 1}
    //     }else{
    //      return item
    //     }
    //   })
    //   setData(arr)
    // }
    // function disLikes (id){
    //   console.log(id);
    //   let arr = data.map((item) => {
    //     if(item.id === id){
    //       return {...item, disLikes: item.disLikes + 1}
    //     }else{
    //      return item
    //     }
    //   })
    //   setData(arr)
    // }
    // function deletes (id){
    //   console.log(id);
    //   let arr = data.filter((item) => {
    //     return item.id !== id
    //   })
    //   setData(arr)
    // }
    return (
      <div className='flex justify-center h-screen items-center'>
        {counter.map((item) => {
          return (
            <div key={item.id} className='flex w-full bg-gray-200 max-w-160 p-5 text-center rounded-2xl flex-col'>
              <button className='cursor-pointer m-auto rounded-2xl w-fit px-10 text-white mb-10 text-[30px] bg-green-500 '>{item.count}</button>
              <div className="buttons-container flex w-full justify-around max-w-150 ">
                <button onClick={() => dispatch({type: "count+1"})} className='cursor-pointer text-3xl py-3 px-5 bg-white rounded-2xl font-medium'>+</button>
                <button className='cursor-pointer text-3xl py-3 px-5 bg-white rounded-2xl font-medium'>-</button>
                <button className='cursor-pointer text-3xl py-3 px-5 bg-white rounded-2xl font-medium'>+5</button>
                <button className='cursor-pointer text-3xl py-3 px-5 bg-white rounded-2xl font-medium'>-5</button>
              </div>
              <button className='cursor-pointer mt-10 bg-rose-600 rounded-2xl w-fit m-auto text-3xl text-white py-3 px-10'>reset</button>
            </div>
          );
        })}
      </div>
    )
  }

  export default App
