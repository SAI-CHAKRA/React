export default function display({username, clr}){
    let styles={color:clr};
    return <h1 style={styles}>Hi, {username}</h1>
};