import { useEffect, useState } from 'react';
import PostCard from './PostCard';
import { axiosWithAuth } from '../Utils/axiosWithAuth'
import styled from 'styled-components'


const MainCardContainer = styled.div

export default function Postlist(props) {
    const [posts, setPosts] = useState([])

    useEffect(() => {console.log("fetchPlants activated get")
    setPosts([])
    axiosWithAuth().get(`/items/items/`)
    .then(res => {
        console.log('res from fetchPlants', res.data)
        setPosts(res.data)

    })
    .catch(err => {
        console.log("error from fetchPlants", err)
    })
}, []);



return (
    <>
    <div>
    {posts.map(props=>(
        <MainCardContainer className='item-card' key={props.itemid}>
            <h4>Nickname: {props.itemname}</h4>
            <h4>Species: {props.price}</h4>
            <PostCard
                        itemname={props.itemname}
                        price={props.price}
                    />
        </MainCardContainer>
    ))}
    </div>
    </>
)}