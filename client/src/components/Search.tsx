import * as React from "react";


export default (props: any) => {
  const [text, setText] = React.useState("");

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    if (text === "") {
    } else {
      props.onSubmit && props.onSubmit(text);
    //   setText("");
    }
  };

  const onChange = (evt: any) => setText(evt.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="bg-gray-200 p-5">
        <input
          type="text"
          name="text"
          placeholder="Search events title, description or category..."
          value={text}
          onChange={onChange}
          className="bg-white p-2 w-3/4 outline-none"
        />
        <button type="submit" className="p-2 text-center text-blue-500 w-1/4 bg-white border-l">
          Search
        </button>
      </form>
    </div>
  );
};

