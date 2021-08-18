import React from 'react'
import styled from 'styled-components'

function Items({id,title,price,category,description,image}) {
    return (
        <ListItem>
            <img src={image} />
            <div className="itemDescription">
                <h3>{title}</h3>
                <p>{category}</p>
                <p className="price" >price : $ {price}</p>
                <p>{description.length>250 ? (description.substring(0,250)+"..."):description }</p>
                </div>
        </ListItem>
    )
}

export default Items

const ListItem = styled.div`

height:300px;
width:400px;
border:1px solid rgba(0,0,0,0.1);
border-radius:25px;
img{
height:300px;
width:100%;
object-fit:cover
object-position:top 
overflow:hidden
}
cursor:pointer;

.itemDescription{
    height:100%;
    transition:.5s ease;
    background:rgba(0,0,0,0.4);
    opacity:0;
    color:white;
    overflow:hidden

    h3{
        padding:.3rem;
        text-align:center;
    }
    p{
        padding:.5rem;
        margin-top:-10px;
        margin-left:5px;
        margin-bottom:5px;
    }
    .price{
        font-weight:bold;
        font-size:1.2rem;
    }
}
&:hover {
    .itemDescription{
        opacity:1;
        transform:translateY(-280px)
    }
}
`

