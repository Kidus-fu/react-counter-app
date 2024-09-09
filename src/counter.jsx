import { useState } from "react"

function Counter() { 
    const [num,setNum] = useState(0)
    const [hert,setHert] = useState(10)
    const count = () => {
        setNum(num + 1)
    }
    const decret = () => {
        setNum(num - 1)
    }
    const rest = () => {
        setNum(0)
        setHert(hert - 1)
    }
    if (hert === 0){
        document.location.reload();
    }
    return(
        <>
        <div class="position-absolute top-50 start-50 translate-middle bg-dark text-light rounded w-50 h-70">
           <p id="alert"></p>
                <h3 className="text-end border-2 me-3 fs-5">{hert} <span className="text-danger"> ♥️</span></h3>
            <center className="mt-5">
            <h1 className="ms-3 fs-1 mt-5">{num}</h1><br />
            <button class="btn btn-success ms-2 mt-2 rounded btn-block w-50"onClick={count}>count</button>
                    <button class="btn btn-danger ms-2 mt-2 rounded btn-block w-50" onClick={rest}>rest</button>
                    <button class="btn btn-info ms-2 mt-2 rounded btn-block w-50 mb-4" onClick={decret}> decret</button>
                    </center>
        </div>        
        </>
    );
}
export default Counter