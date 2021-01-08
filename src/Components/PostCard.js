import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../style/Card.css'

const PostCard = props => {

    return (
            <div className='card-container'>
                <div className='card'>
                    <div className='card-body'>
                        <h1 className='card-title'><span className='props'>{props.itemname}</span></h1>
                        <p className='card-text'> Price: <span className='props'>{props.price}</span></p>
                        <form>
                            <input type="button" value="Request for Rental"/>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default PostCard

