import styled from "styled-components";

//Games Menu
function Games(props){
    return(

        <Game color={props.color}>
            <div id="text">
                <span>Games</span>
            </div>
            <Icon className="Icon">
             <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </Icon>
        </Game>
    )
}

const Game = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 60%;
height: 40px;
background-color: ${props => props.color || "#cccccc"};
border-radius: 20px;
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

& span{
    font-size: 1.1em;
    padding-top: 8px;
}
`;

const Icon = styled.div`
height: 15px;
width: 15px;
`;

export default Games;