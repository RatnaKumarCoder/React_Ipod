import styled from "styled-components";

function Musics(props){
    return(
        <Music color={props.color}>
            <div id="text">
                <span>Music</span>
            </div>
            
            <Icon>
             <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </Icon>
        </Music>
    )
}


const Music = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 60%;
height: 40px;
border-radius: 20px;
background-color: ${props => props.color || "#cccccc"};
& div i{
    color: #cccccc;
 };
& div{
    padding-top: 10px;
};

& #text{
    padding-top: 10px;
    width: 50%;
};

& #text span{
    font-size: 1.1rem;
    padding-top: 8px;
}
`;

const Icon = styled.div`
height: 15px;
width: 15px;
`;

export default Musics;