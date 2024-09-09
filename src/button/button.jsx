import style from "./button.module.css"

function Button(){
    return(
        <>
        <button type="button" className={style.button}>Click me</button>
        </>
    );
}

export default Button