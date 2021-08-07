import styeled from "styled-components";
const components = {
    Button:styeled.button`
        background:${props=>(props.bg||'var(--primary-bg)')};
        padding:${props=>(props.padding||'7px 10px')};
        border-radius:4px;
        color:${props=>(props.color||'white')};
        cursor:pointer;
        width:${props=>(props.width||'50%')};
        &:disabled {
            opacity:0.8;
        }
    `,
    RoundButton:styeled.button`
        background:${props=>(props.bg||'var(--secoundary-bg)')};
        padding:${props=>(props.padding||'0px 5px')};
        border-radius:50%;
        border:${props=>(props.border||'0px')};
        color:${props=>(props.color||'white')};
        cursor:pointer;
        font-size:${props=>(props.font||'small')};
        width:${props=>(props.width||'fit-content')};
    `
}
export default components;