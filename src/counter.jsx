import { useState } from "react"

import img from "./assets/gear-solid.svg"

function Counter() {
    const [num, setNum] = useState(0)
    const [hert, setHert] = useState(10)
    const [level, setLevel] = useState(1)
    const [conie,setConie] = useState(100)
    const [alertHieded,setAlertHieded] = useState(true)
    const [alertSetting,setAlertSetting] = useState(true)

    const count = () => {
        setNum(num + 1)
        if (num % 20 === 0) {
            setLevel(level + 1)
            setConie(conie + 10)
            setAlertHieded(false)
            let alertMessage = ["Gret keep taping","Nice work","Best try more make coines",]
            let alertChose = Math.floor(Math.random() * alertMessage.length)
            document.querySelector("#alert").innerHTML = `🎉 ${alertMessage[alertChose]}`
        }
        
    }
    const alertClose = (event) => {
        setAlertHieded(true)
    }
    const decret = () => {
        setNum(num - 1)
    }
    const S = (e) => {
        
        e.preventDefault()
        console.log(e)
    }
    const rest = () => {
        setNum(0)
        setHert(hert - 1)
    }
    if (hert === 0) {
        document.location.reload();
    }

    return (
        <>
            
                <div className={alertHieded ? "invisible" : "visible"}>
                <div class="alert alert-light text-dark fixed-top alert-dismissible fade show  w-50" role="alert">
                    <p className="alert-text" id="alert"></p>
                    <button type="button" class="btn-close" onClick={(event) => {  alertClose(event)}}></button>
                </div>
                </div>
            <div class="position-absolute top-50 start-50 translate-middle bg-dark text-light rounded w-50 h-70 ">
                <h5 className="text-start ms-2 mt-2">{hert} <span className="text-danger"> ♥️</span></h5>
                <h5 className="text-start ms-2 mt-2">{conie} <span className="text-werring"> 🪙</span></h5>
                <ul class="list-unstyled text-end">
                    <li className="me-4">Level {level}</li>
                    <li  class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Setting</li>
                </ul>

                <center className="mt-5">
                    <h1 className="ms-3 fs-1 mt-5">{num}</h1><br />
                    <button class="btn btn-success ms-2 mt-2 rounded btn-block w-50" onClick={count}>count</button>
                    <button class="btn btn-danger ms-2 mt-2 rounded btn-block w-50" onClick={rest}>rest</button>
                    <button class="btn btn-info ms-2 mt-2 rounded btn-block w-50 mb-4" onClick={decret}> decret</button>
                </center>
            </div>
            



<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Setting</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="form-check form-switch">
        <div
        class="container-md"
       >
        <div className="row">
            <div className="col-4">
            <p>buy 1 <span className="text-danger">♥️</span> = 10🪙</p>
            </div>
            <div className="col-3"></div>
            <div className="col-5">
                
    <button
    className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#modalId"
    >Buy now</button>
            </div>
        </div>
       </div>
       
    
    
    
    
   
    
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-info" >Save</button>
      </div>
    </div>
  </div>
</div>
<div
        class="modal fade"
        id="modalId"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
    >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalTitleId">
                        Modal title
                    </h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">Add rows here</div>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Close
                    </button>
                    <button type="button" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}
export default Counter