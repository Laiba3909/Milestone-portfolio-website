interface butt {
    name:string,
    style:string,
    id?:string
    onClick?: () => void;
}

export default function components(props:butt){
              
    return(
    <button className={props.style} id={props.id} onClick={props.onClick}>{props.name} </button>
    )




}