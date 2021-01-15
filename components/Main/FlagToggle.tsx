import { useState } from "react"

function FlagToggle({state} : {state: boolean}){
    const [toggle,setToggle] = useState<boolean>(state); 
    function togglehandler(){
        toggle ? setToggle(false) : setToggle(true);
    }
    return(
        <div>
        
           
                <svg onClick={togglehandler} id="flag" xmlns="http://www.w3.org/2000/svg" width="29.75" height="28" viewBox="0 0 29.75 28">
                    <path style={{transition: "all 0.3s"}} id="패스_86" data-name="패스 86" d="M144.317,133.8l7.062,8.925c-5.312,1.633-17.562,1.283-22.312-.992V125.867c4.688,2.275,17,2.683,22.313.992l-7.063,6.942Z" transform="translate(-121.629 -118.984)" fill={toggle ? "#713eff" : "#ffffff"} stroke={toggle ? "none" : "#707070"} strokeWidth={toggle ? "none" : "1.5"}/>
                    <path style={{transition: "all 0.3s"}} id="패스_87" data-name="패스 87" d="M129.067,247.55l3.812-1.75-2.812-7.933-1,1.342Z" transform="translate(-121.629 -224.859)" fill="#350871"/>
                    <path style={{transition: "all 0.3s"}} id="패스_88" data-name="패스 88" d="M40.533,44.221V60.03a10.949,10.949,0,0,1,8.937,2.508V46.788A10.867,10.867,0,0,0,40.533,44.221Z" transform="translate(-38.283 -41.655)" fill={toggle ? "#713eff" : "#ffffff"} stroke={toggle ? "none" : "#707070"} strokeWidth={toggle ? "none" : "1.5"}/>
                    <path style={{transition: "all 0.3s"}} id="패스_89" data-name="패스 89" d="M3.883,0h0a1.685,1.685,0,0,0-1.75,1.575V28H5.571V1.575A1.627,1.627,0,0,0,3.883,0Z" transform="translate(-2.133)" fill="#350871"/>
                </svg>
            
        
        </div>
    )
}
export default FlagToggle