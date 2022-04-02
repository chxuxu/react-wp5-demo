import React, { useEffect, Suspense,useState, useImperativeHandle, useCallback, useMemo, useRef, forwardRef } from 'react';

export interface IHooksProps {
}

function SearchInput(props: { query: string }) {

  return (<div>
    <input value={props.query} onChange={(e) => {
      props.query = e.target.value;
    }} />
  </div>);
}

function SearchSuggestions(props: { query: string }) {
  useEffect(() => {
    console.log("query:" + props.query);
  }, [props.query]);
  return (<h2>{props.query}</h2>);
}
function TransitionApp() {
  const [value, setInputValue] = React.useState('')
  const [query, setSearchQuery] = React.useState('')
  const [isPending, startTransition] = React["useTransition"]()
  const handleChange = (e) => {
    setInputValue(e.target.value)
    startTransition(() => {
      setSearchQuery(e.target.value)
    })
  }
  return <div>
    {isPending && <span>isTransiton</span>}
    <input onChange={handleChange}
      placeholder="输入搜索内容"
      value={value}
    />
    <SearchSuggestions query={query} />
  </div>
}

function DeferredValueApp() {
  const [value, setInputValue] = React.useState('')
  const query = React["useDeferredValue"](value)
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  const id = React["useId"]();
  return <div>
    <button>useDeferredValue</button>
    <input onChange={handleChange} id={id}
      placeholder="输入搜索内容"
      value={value}
    />
    <SearchSuggestions query={query} />
  </div>
}


function useCounter(_count) {
  const [count, setCount] = useState(_count);

  useEffect(() => {
    console.log("useCounter");
    if (_count % 10 == 0) {
      setCount(_count);
    }
    return () => {

    }
  }, [_count]);

  return count;
}
function CounterChild(props: { count: number }) {
  const ccc = useCounter(props.count);
  const num2 = useMemo(
    () => () => {
      console.log("num2");
      return props.count + 1;
    },
    [props.count],
  );
  const num = useMemo(
    function () {
      console.log("num");
      return props.count + 1;
    },
    [props.count],
  );
  return (
    <div className="m-Counter">
      <h1>CounterChild:{props.count}-{num}--{num2()}--ccc:{ccc}</h1>
    </div>
  );
}

function Counter(props: IHooksProps) {

  console.log("Counter");
  const [count, setCount] = useState(0);
  const [, forceUpdate] = useState(0);
  const inpRef = useRef(null);
  const add = function () {
    setCount(count + 1);
  }
  const add1 = function () {
    setCount(count);
  }
  const add2 = function () {
    forceUpdate(+new Date());
  }
  return (
    <div className="m-Counter">
      <h1>{count}</h1>
      <button onClick={add}>改变数字</button>
      <button onClick={add1}>不改变数字</button>
      <button onClick={add2}>数字不变但强制更新</button>
      <CounterChild count={count} />
    </div>
  );
}
export default function useStateDemo(props: IHooksProps) {


  return (
    <div className="m-useStateDemo">
      <summary>
        useDeferredValue 接受一个值并返回该值的新副本，该副本将推迟到更紧急的更新。
        如果当前渲染是紧急更新的结果，比如用户输入，React 将返回之前的值，然后在紧急渲染完成后渲染新的值。

        这个钩子类似于用户空间钩子，它使用去抖动或节流来延迟更新。
        使用 useDeferredValue 的好处是 React 将在其他工作完成后立即进行更新（而不是等待任意时间），
        并且像 startTransition 一样，延迟值可以暂停而不会触发现有内容的意外回退。
      </summary>
      <Counter />
      <TransitionApp/>
      <DeferredValueApp/>
    </div>
  );
}
