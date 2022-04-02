import React, { useEffect, useState, useContext,useReducer } from 'react';

export interface IHooksProps {
}

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

const CountContext = React.createContext({
  counter: null,dispatch:null
});
function CounterSub(props: {}) {
  const countContext = useContext(CountContext);
  return (
    <div className="m-CounterChild">
      {/* <h1>CounterSub:{countContext.count}</h1> */}
      {<button onClick={()=>{
        countContext.dispatch({type:"increment"})
      }}>+++</button>}
      <h2>CountContext.Consumer</h2>
      <CountContext.Consumer>
        {(context) => {
          return (<div>
            {context.counter.count}
            <button onClick={()=>{
              context.dispatch({type:"decrement"})
            }}>----</button>
          </div>);
        }}
      </CountContext.Consumer>
    </div>
  );
}

function CounterChild(props: {}) {
  const countContext = useContext(CountContext);
  return (
    <div className="m-CounterChild">
      <h1>CounterChild:{countContext.counter.count}</h1>
      <CounterSub />
      <button onClick={()=>{
        countContext.dispatch({type:"increment"})
      }}>+++</button>
    </div>
  );
}

function Counter(props: IHooksProps) {
  const [state, dispatch] = useReducer(reducer, initialState); 
  const add = function () {
    dispatch({type: 'increment'});
  }
  return (
    <div className="m-Counter">
      <h1>{state.count}</h1>
      <button onClick={add}>改变数字</button>
      {<CountContext.Provider value={{counter:state,dispatch }}>
        <CounterChild />
      </CountContext.Provider>}
    </div>
  );
}
export default function useStateDemo(props: IHooksProps) {


  return (
    <div className="m-useContextDemo">
      <summary>
      useState 的替代方案。它接收一个形如 (state, action) =》 newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法。（如果你熟悉 Redux 的话，就已经知道它如何工作了。）

在某些场景下，useReducer 会比 useState 更适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等。并且，使用 useReducer 还能给那些会触发深更新的组件做性能优化，因为你可以向子组件传递 dispatch 而不是回调函数 。</summary>
      <Counter />
    </div>
  );
}
