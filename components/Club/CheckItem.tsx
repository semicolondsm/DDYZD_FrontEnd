import { useState } from "react"

function ToggleItem(){
    const [state,setState] = useState(false);
    return(
        <>
        {
            !state ? 
                <svg style={{cursor: "pointer"}} onClick={()=>setState(true)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <g id="그룹_426" data-name="그룹 426" transform="translate(-330 -295)">
                        <g id="타원_110" data-name="타원 110" transform="translate(330 295)" fill="none" stroke="#a4a4a4" stroke-width="1">
                        <circle cx="10" cy="10" r="10" stroke="none"/>
                        <circle cx="10" cy="10" r="9.5" fill="none"/>
                        </g>
                        <g id="check" transform="translate(330 295)">
                        <path id="패스_94" data-name="패스 94" d="M150.876,166.751l-5.417,5.417a.833.833,0,0,1-1.178,0l-2.708-2.708a.833.833,0,0,1,1.178-1.178l2.119,2.119,4.828-4.827a.833.833,0,0,1,1.178,1.178Zm0,0" transform="translate(-135.808 -158.87)" fill="#a4a4a4"/>
                        </g>
                    </g>
                </svg>
            :
            <svg style={{cursor: "pointer"}} onClick={()=>setState(false)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <g id="그룹_428" data-name="그룹 428" transform="translate(-330 -295)">
                    <g id="check" transform="translate(330 295)">
                    <path id="패스_93" data-name="패스 93" d="M10,0A10,10,0,1,0,20,10,10.011,10.011,0,0,0,10,0Zm0,0" fill="#713eff"/>
                    <path id="패스_94" data-name="패스 94" d="M150.876,166.751l-5.417,5.417a.833.833,0,0,1-1.178,0l-2.708-2.708a.833.833,0,0,1,1.178-1.178l2.119,2.119,4.828-4.827a.833.833,0,0,1,1.178,1.178Zm0,0" transform="translate(-135.808 -158.87)" fill="#fff"/>
                    </g>
                </g>
            </svg>
        }
        </>

    )
}
export default ToggleItem