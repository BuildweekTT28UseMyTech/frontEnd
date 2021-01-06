import { useEffect } from 'react';
import PostCard from './PostCard';

function Postlist(props) {

    return (
        <div>
            {props.posts.map((prop)=>{

                return (
                    <PostCard

                        itemname={prop.itemname}
                        price={prop.price}

                    />)

            })}
        </div>
    )

}

export default Postlist