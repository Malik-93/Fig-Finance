import * as React from "react";


export default (props: any) => {
  const [text, setText] = React.useState("");
  type callBackFunction = (value: string) => void;
  const debounceFunction = (func: callBackFunction, delay: number) => {
    let timer: any;
    return function (...rest: []) {
      const args = [...rest];
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  }

  const onSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    if (text.length) {
      props.onSubmit && props.onSubmit(text);
    }
  };
  const debounceInputSearch = React.useCallback(debounceFunction((txt: string) => props.onSubmit(txt), 1000), []);
  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.currentTarget.value;
    setText(value);
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="bg-gray-200 p-5">
        <div className="row gutter-2 mb-5">
          <div className="col-lg-4" />
          <div className="col-lg-4">
            <div className="input-group">
              <input
                type="text"
                name="text"
                className="form-control"
                placeholder="Search an event of your interest..."
                value={text}
                onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                  onChange(ev)
                  debounceInputSearch(ev.target.value);
                }}
              />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="submit">
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4" />
        </div>
      </form>
    </div>
  );
};

