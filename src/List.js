import {PropTypes } from 'prop-types';
const List = (props)=>{
    const listOfItems = props.items.map((item)=>{
    return <li>{item}</li>});
    return(
        <>
            <h3>{props.title}</h3>
            <ul>
                {listOfItems}
            </ul>
        </>

    )
}
List.prototype={
    items:PropTypes.array,
    title:PropTypes.string,
}

export default List;