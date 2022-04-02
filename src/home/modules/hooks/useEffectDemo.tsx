import React,{useState,useEffect,useMemo,useLayoutEffect} from 'react';

export interface IHooksProps {
}
function CounterChild (props: {count:number}) {

  const [count,setCount]=useState(props.count);
  useEffect(()=>{
    console.log("1-props.count updateed");
    setCount(props.count);
  },[props.count]);
  useEffect(()=>{ 
    console.log("2-loaded");
    return ()=>{
    }
  },[]);
  useEffect(()=>{ 
    console.log("3-update");//使用useMemo，这里会执行两次
  });
  useLayoutEffect(()=>{
    console.log("0-useLayoutEffect");//使用useMemo，这里会执行两次
  });
  
  return useMemo(()=>{
    function num1(){
      return +new Date();
    }
    function num2(){
      console.log("num2");
      return props.count+1;
    }
    
    console.log("CounterChild");
    return (
      <div className="m-Counter">
        <h1>CounterChild:{count}-{num1()}-{num2()}</h1>
      </div>
    );
  },[props.count]);
 
}

function Counter (props: IHooksProps) {

  console.log("Counter");
  const [count,setCount]=useState(0);
  const [,forceUpdate]=useState(0);

  const add=function(){
    setCount(count+1);
  }
  const add1=function(){
    setCount(count);
  }
  const add2=function(){
    forceUpdate(+new Date());
  }
  return (
    <div className="m-Counter">
      <h1>{count}</h1>
      <button onClick={add}>add</button>
      <button onClick={add1}>add1</button>
      <button onClick={add2}>add2</button>
      <CounterChild count={count}/>
    </div>
  );
}
export default function useEffectDemo (props: IHooksProps) {
  return (
    <div className="m-useStateDemo">
      <summary>
      useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API。
      </summary>
      <Counter/>
    </div>
  );
}
