

function ListGroup() {
    const items = ["Delhi", "Mumbai", "Bangalore"];

    // const handleClick = e => console.log(e);

    return (
        <>
            <h1>List:</h1>
            <ul>
                {/* {items.map(item => <li>{item}</li>)} */}
                {items.map((item, index) => (
                    <li 
                        key={item} 
                        className="list-item" 
                        onClick={console.log(index)}
                        // onClick={handleClick}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
