
export default function Libraries(props) {
    const divStyle = {display: props.visible ? "block" : "none"};
    return (
        <div style={divStyle}>
            Library
        </div>
    );
}

