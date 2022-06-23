import * as React from "react";


export default (props: any) => {
  const [text, setText] = React.useState("");
  const debounceFunction = (func: Function, delay: number) => {
    let timer: any;
    return function (...rest: []) {
      const self = this;
      const args = [...rest];
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(self, args)
      }, delay)
    }
  }

  const onSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    if (text === "") {
    } else {
      props.onSubmit && props.onSubmit(text);
      //   setText("");
    }
  };
  const debounceInputSearch = React.useCallback(debounceFunction((txt: string) => props.onSubmit(txt), 1500), []);
  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.currentTarget.value;
    setText(value);
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="bg-gray-200 p-5">
        <input
          type="text"
          name="text"
          placeholder="Search events title, description or category..."
          value={text}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
            onChange(ev)
            debounceInputSearch(ev.currentTarget.value);
          }}
          className="bg-white p-2 w-3/4 outline-none"
        />
        <button type="submit" className="p-2 text-center text-blue-500 w-1/4 bg-white border-l">
          Search
        </button>
      </form>
    </div>
  );
};

