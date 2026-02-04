  import {useReducer } from 'react'
  import datas from './data/data.js'

  function reducer(state, action){
    console.log(state);
    let {type} = action
    return state.map((item) => {
      if(type === "count+1"){
        return {...item, count: item.count + 1}
        
      }else if(type === "count-1"){
        if(item.count <= 0){
          return item
        }else{
          return { ...item, count: item.count - 1 };
        }
      }else if(type === "count+5"){
        return { ...item, count: item.count + 5 };
      }else if(type === "count-5"){
        if(item.count <= 0){
          return item
        }else{
          return { ...item, count: item.count - 5 };
        }
      } 
      if(type === "reset"){
        return {...item, count: item.count = 0}
      }
    })
  }

  function App() {

    let [counter, dispatch] = useReducer(reducer, datas)
    return (
      <div className='flex justify-center h-screen items-center'>
        {counter.map((item) => {
          return (
            <div key={item.id} className='flex w-full bg-gray-200 max-w-160 p-5 text-center rounded-2xl flex-col'>
              <button className='cursor-pointer m-auto rounded-2xl w-fit px-10 text-white mb-10 text-[30px] bg-green-500 '>{item.count}</button>
              <div className="buttons-container flex w-full justify-around max-w-150 ">
                <button onClick={() => dispatch({type: "count+1"})} className='cursor-pointer text-3xl py-3 px-5 bg-white rounded-2xl font-medium'>+</button>
                <button onClick={() => dispatch({type:"count-1"})} className='cursor-pointer text-3xl py-3 px-5 bg-white rounded-2xl font-medium'>-</button>
                <button onClick={() => dispatch({type:"count+5"})} className='cursor-pointer text-3xl py-3 px-5 bg-white rounded-2xl font-medium'>+5</button>
                <button onClick={() => dispatch({type:"count-5"})} className='cursor-pointer text-3xl py-3 px-5 bg-white rounded-2xl font-medium'>-5</button>
              </div>
              <button onClick={() => dispatch({type:"reset"})} className='cursor-pointer mt-10 bg-rose-600 rounded-2xl w-fit m-auto text-3xl text-white py-3 px-10'>reset</button>
            </div>
          );
        })}
      </div>
    )
  }

  export default App
