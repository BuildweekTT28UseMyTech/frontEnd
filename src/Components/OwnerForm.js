import React, {useState, useEffect} from "react";
export default function OwnerForm(props) {
  const { values, update, submit } = props;

    const [post, setPost] = useState({
        tool: "",
        period: "",
        price: ""
    })

    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])

  const onChange = (evt) => {
    // input from event
    const { name, value } = evt.target;
    update(name, value);
    // `update` callback 
  };
  const onSubmit = (evt) => {
    // noo reload!
    evt.preventDefault();
    // callback coming in through propss
    submit();
  };
  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group inputs">
        {/*inputss*/}
        <label>
          Tool
          <input
            name="Tool"
            type="text"
            placeholder="type of tool"
            maxLength="30"
            value={values.tool}
            onChange={onChange}
          />
        </label>
        <label>
          Rental Period
          {/* Input for rental time */}
          <input
            name="length of rentel"
            type="text"
            placeholder="Length of rental"
            maxLength="30"
            value={values.period}
            onChange={onChange}
          />
        </label>
        <label>
          Price
          {/* Dropdown for Price */}
          <select name="Price" value={values.price} onChange={onChange}>
            <option value="">------Select Price------</option>
            <option value="24 Hours">$19.99</option>
            <option value="48 Hours">$35.99</option>
            <option value="72 Hours">$49.99</option>
          </select>
        </label>
        <div className="submit">
          <button>submit</button>
        </div>
      </div>
    </form>
  );
}
