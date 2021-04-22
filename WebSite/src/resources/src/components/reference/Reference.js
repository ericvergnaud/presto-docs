
function Reference(props) {
    const divStyle = {display: props.visible ? "block" : "none"};
    return (
        <div style={divStyle}>
            Reference
        </div>
    );
}

export default Reference;
