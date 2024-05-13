import styled from "styled-components";

//setting Menu
function Settings(props){
    return(
        <Setting color={props.color}>
            <div id="text">
                <span>Setting</span>
            </div>
            <Icon>
             <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </Icon>
        </Setting>
    )
}

const Setting = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 60%;
border-radius: 20px;
height: 40px;
background-color: ${props => props.color || "#cccccc"};

& div{
    padding-top: 10px;
};

& #text{
    padding-top: 10px;
    width: 50%;
};

& div i{
   color: #cccccc;
};

& #text span{
    font-size: 1.1em;
    padding-top: 8px;
}
`;

const Icon = styled.div`
height: 15px;
width: 15px;
`;

export default Settings;