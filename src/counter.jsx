import React ,{ useState,useEffect } from "react"

import img from "./assets/gear-solid.svg"

function Counter() {
    const [num, setNum] = useState(0)
    const [hert, setHert] = useState(10)
    const [level, setLevel] = useState(1)
    const [conie,setConie] = useState(100)
    const [alertHieded,setAlertHieded] = useState(true)
   const [isBuySeucces,setIsBuySeucces] = useState()
   const [Buy100Hert,setBuy100Hert] = useState()
   const [i,setI] = useState(true)
    const count = () => {
        setNum( n => n + 1)
        if (num % 20 === 0) {
            if (i){ 
            setLevel(level + 1)
            setConie(conie + 10)
            setAlertHieded(false)
            let alertMessage = ["Gret keep taping","Nice work","Best try more make coines",]
            let alertChose = Math.floor(Math.random() * alertMessage.length)
            document.querySelector("#alert").innerHTML = `🎉 ${alertMessage[alertChose]}`
        }}
        
    }
    const alertClose = (event) => {
        setAlertHieded(true)
    }
    const decret = () => {
        setNum(n => n - 1)
        if (num % -20 === 0 ) {
            if (i){ 
            setAlertHieded(false)
            setHert(h => h - 1)
            let alertMessage = ["Noting going good","Stop Decret","Yoy going lose all",]
            let alertChose = Math.floor(Math.random() * alertMessage.length)
            document.querySelector("#alert").innerHTML = `:( ${alertMessage[alertChose]}`
        }}
    }
    const BuyHert = (e) => {
        
        e.preventDefault()
        console.log(e)
        
        if  (hert < 10  ){
            if (conie > e.target.dataset.buy){ 
                setIsBuySeucces(true)
                setBuy100Hert(true)
                setHert(h => h + parseInt(e.target.dataset.hert))  
                setConie(c => c -parseInt(e.target.dataset.buy))
            }else{
                setIsBuySeucces(false)
                setBuy100Hert(false)
            }}else{
                setIsBuySeucces(false)
                setBuy100Hert(false)
            }
      
        
    }
    const rest = () => {
        setNum(n => n = 0)
        setHert(h => h -1)
        setLevel(l => l = 1)
        setConie(c => c = 100)
    }
    if (hert === 0) {
        document.location.reload();
    }
    function ss(event){
        setI(event.target.checked)
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
                    <li className="me-4">Level {level} 🏆</li>
                    <li  class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Setting 🛠️</li>
                </ul>

                <center className="mt-5">
                    <h1 className="ms-3 fs-1 mt-5">{num}</h1><br />
                    <button class="btn btn-success ms-2 mt-2 rounded btn-block w-50" onClick={count}>count</button>
                    <button class="btn btn-danger ms-2 mt-2 rounded btn-block w-50" onClick={rest}>rest</button>
                    <button class="btn btn-info ms-2 mt-2 rounded btn-block w-50 mb-4" onClick={decret}> decret</button>
                </center>
            </div>
            



<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-3" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Setting 🛠️</h1>
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
    className="btn btn-outline-info"
        data-bs-toggle="modal"
        data-bs-target="#modalId"
        data-buy="10"
        data-hert="1"
        onClick={(e) => { BuyHert(e)}}
    >Buy now 🛒 </button>
            </div>
        </div>
       </div>
       <br />
       <div
        class="container-md"
       >
        <div className="row">
            <div className="col-5">
            <p>buy 10<span className="text-danger">♥️</span> = 100🪙</p>
            </div>
            <div className="col-2"></div>
            <div className="col-5">
                
    <button
    className="btn btn-outline-info"
        data-bs-toggle="modal"
        data-bs-target="#Buy100Hert"
        data-buy="100"
        data-hert="10"
        onClick={(e) => { BuyHert(e)}}
    >Buy now 🛒</button>
            </div>
        </div>
       </div>
       
    
    
    
    
   <div class="form-check form-switch">
    <input
        class="form-check-input"
        type="checkbox"
        id="flexSwitchCheckDefault"
        value={i}
        checked={i} 
        onChange={ss}
    />
    <label class="form-check-label" for="flexSwitchCheckDefault"
        >Alert showing ⚠️</label>
   </div>
</div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-info" >Save</button>
      </div>
    </div>
  </div>
</div>
<div
        className="modal fade"
        id="modalId"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
    >
        <div className="modal-dialog" role="document">
            <div className="modal-content">
               <div className={isBuySeucces ? "bg-success rounded text-light" : "bg-danger rounded"}>
                
                <div className="modal-body">
                    <button
                        type="button"
                        className="btn-close "
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button><br />
                    <div className="container-fluid ms-4 mt-3">{isBuySeucces ? "You'r Buy Is Success :)" : "You Hert Is Full I Can Buy More Over 10 :("}</div>
                    <button
                        type="button"
                        className="btn btn-secondary btn-sm w-100 mt-5"
                        data-bs-dismiss="modal"
                    >
                        Close
                    </button>
                </div>
                </div>
               
                   
            </div>
        </div>
    </div>
    <div
        className="modal fade"
        id="Buy100Hert"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
    >
        <div className="modal-dialog" role="document">
            <div className="modal-content">
               <div className={Buy100Hert ? "bg-success rounded text-light" : "bg-danger rounded"}>
                
                <div className="modal-body">
                    <button
                        type="button"
                        className="btn-close "
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button><br />
                    <div className="container-fluid ms-4 mt-3">{Buy100Hert ? "You'r Buy Is Success :)" : "Youd'n Have Mech Coine :("}</div>
                    <button
                        type="button"
                        className="btn btn-secondary btn-sm w-100 mt-5"
                        data-bs-dismiss="modal"
                    >
                        Close
                    </button>
                </div>
                </div>
               
                   
            </div>
        </div>
    </div>
        </>
    );
}
export default Counter