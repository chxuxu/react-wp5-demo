import React,{useEffect, useState,useImperativeHandle,useCallback,useMemo,useRef,forwardRef} from 'react';

export interface IHooksProps {
}

function _FancyInput(props, ref) {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef}/>;
}
const FancyInput = forwardRef(_FancyInput);

function useCounter(_count){
   const [count,setCount]=useState(_count);

   useEffect(()=>{console.log("useCounter");
    if(_count%10==0){
      setCount(_count);
    }
    return ()=>{

    }
   },[_count]);

   return count;
}
function CounterChild (props: {count:number}) {

  const ccc=useCounter(props.count);
  console.log("CounterChild");
  function num1(){
    return +new Date();
  }
  // const num2 = useCallback(
  //   function(){
  //     console.log("num2");
  //     return props.count+1;
  //   },
  //   [props.count],
  // );
  const num2 = useMemo(
    ()=>()=>{
      
        console.log("num2");
        return props.count+1;
    
    },
    [props.count],
  );
  function num3(){
    console.log("num3");
    return props.count+1;
  }
  const num = useMemo(
    function(){
      console.log("num");
      return props.count+1;
    },
    [props.count],
  );
  return (
    <div className="m-Counter">
      <h1>CounterChild:{props.count}-{num}--{num2()}--ccc:{ccc}</h1>
      {/* <button onClick={add}>add</button> */}
    </div>
  );
}

function Counter (props: IHooksProps) {

  console.log("Counter");
  const [count,setCount]=useState(0);
  const [,forceUpdate]=useState(0);
  const inpRef=useRef(null);
  const add=function(){
    setCount(count+1);
  }
  const add1=function(){
    setCount(count);
  }
  const add2=function(){
    forceUpdate(+new Date());
    inpRef.current&&inpRef.current.focus();
  }
  return (
    <div className="m-Counter">
      <h1>{count}</h1>
      <button onClick={add}>改变数字</button>
      <button onClick={add1}>不改变数字</button>
      <button onClick={add2}>数字不变但强制更新</button>
      <CounterChild count={count}/>
      <FancyInput ref={inpRef}/>
    </div>
  );
}
export default function useStateDemo (props: IHooksProps) {


  return (
    <div className="m-useStateDemo">
      <summary>
      Hook 是一个特殊的函数，它可以让你“钩入” React 的特性。例如，useState 是允许你在 React 函数组件中添加 state 的 Hook。
      </summary>
      <summary>如果你在编写函数组件并意识到需要向其添加一些 state，以前的做法是必须将其转化为 class。现在你可以在现有的函数组件中使用 Hook。</summary>
      <summary>
      通过在函数组件里调用它来给组件添加一些内部 state。React 会在重复渲染时保留这个 state。useState 会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并。
      </summary>
      <Counter/>
    </div>
  );
}
