import React, {useState, useEffect} from "react";
import * as yup from 'yup'


const formSchema = yup.object().shape({
        name: yup
            .string()
            .min(4, 'Must be at least 3 characters long'),
        price: yup
            .string()
            .required('Pricing is required')
    
})

function OwnerForm(props) {
//   const { values, update, submit } = props;

    const [rentPost, setRentPost] = useState({
        name: "",
        price: ""
    })

    const [errors, setErrors] = useState({
        name: "",
        price: ""
    })

    useEffect(() => {
        formSchema.isValid(rentPost)
            .then(valid => {
                setButtonDisabled(!valid)
            })
    }, [rentPost])

    const validate = event => {

        let value = event.target.value;

        yup
            .reach(formSchema, event.target.name)
            .validate(value)
            .then(valid => {
                setErrors({
                    ...errors, [event.target.name]: ''
                })
            })
            .catch(error => {
                setErrors({
                    ...errors, [event.target.name]: error.errors[0]
                })
            })
    }

    const inputChange = event => {

        event.persist();

        validate(event);

        let value = event.target.value

        setRentPost({
            ...rentPost, [event.target.name]: value
        })
    }


    const formSubmit = event => {

        event.preventDefault()

        // Axios.post('NEED LINK', rentpost)
        //     .then((res)=>{
        //         props.history.push('/login')
        //     })
        //     .catch((res) => {
        //         console.log(res)
        //     })
    }

        const [buttonDisabled, setButtonDisabled] = useState(true)

 return (
    <form className="form container" onSubmit={formSubmit}>
      <div className="form-group inputs">
            <div className='form-group'>
                <label htmlFor='nameId'> Listing Name: </label>
                    <input
                        type='name'
                        name='name'
                        id='nameId'
                        class='form-control'
                        placeholder='Item for rent'
                        value={rentPost.name}
                        onChange={inputChange}
                        />

                    {errors.username.length > 0 ? (<p className='error' > { errors.name } </p>) : null}    
            </div>

            <div className='form-group'>
                <label htmlFor='priceId'> Price: </label>
                    <input
                        type='number'
                        name='price'
                        id='priceId'
                        class='form-control'
                        placeholder='List the renting price'
                        value={rentPost.price}
                        onChange={inputChange}
                        />

                    {errors.username.length > 0 ? (<p className='error' > { errors.price } </p>) : null}    
            </div>
            <button disabled={buttonDisabled} className='btn btn-primary btn-lg btn-block mt-3 mb-3 ' > Create Listing </button>
      </div>
    </form>
  );
}

export default OwnerForm



{/*         <label>
          Price
          <select name="Price" value={values.price} inputChange={inputChange}>
            <option value="">------Select Price------</option>
            <option value="24 Hours">$19.99</option>
            <option value="48 Hours">$35.99</option>
            <option value="72 Hours">$49.99</option>
          </select>
        </label> */}