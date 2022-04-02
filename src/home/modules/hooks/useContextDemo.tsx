import React, { useEffect, useState, useContext } from 'react';

export interface IHooksProps {
}
const CountContext = React.createContext({
  count: 0, add: null
});
function CounterSub(props: {}) {
  const countContext = useContext(CountContext);
  return (
    <div className="m-CounterChild">
      <h1>CounterSub:{countContext.count}</h1>
      {<button onClick={countContext.add}>add</button>}
      <h2>CountContext.Consumer</h2>
      <CountContext.Consumer>
        {(context) => {
          return (<div>
            {context.count}
            <button onClick={context.add}>addd</button>
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
      <h1>CounterChild:{countContext.count}</h1>
      <CounterSub />
    </div>
  );
}

function Counter(props: IHooksProps) {

  const [count, setCount] = useState(0);
  const [, forceUpdate] = useState(0);

  const add = function () {
    setCount(count + 1);
  }
  return (
    <div className="m-Counter">
      <h1>{count}</h1>
      <button onClick={add}>改变数字</button>
      <CountContext.Provider value={{ count: count, add: add }}>
        <CounterChild />
      </CountContext.Provider>
    </div>
  );
}
export default function useStateDemo(props: IHooksProps) {


  return (
    <div className="m-useContextDemo">
      <summary>
        接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 MyContext.Provider 的 value prop 决定。
      </summary>
      <summary>当组件上层最近的 MyContext.Provider 更新时，该 Hook 会触发重渲染，并使用最新传递给 MyContext provider 的 context value 值。即使祖先使用 React.memo 或 shouldComponentUpdate，也会在组件本身使用 useContext 时重新渲染。

        别忘记 useContext 的参数必须是 context 对象本身</summary>
      <summary>
        通过在函数组件里调用它来给组件添加一些内部 state。React 会在重复渲染时保留这个 state。useState 会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并。
      </summary>
      <summary>
        调用了 useContext 的组件总会在 context 值变化时重新渲染。如果重渲染组件的开销较大，你可以 通过使用 memoization 来优化。
      </summary>
      <Counter />
    </div>
  );
}
