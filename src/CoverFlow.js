import styled from "styled-components";

//NowPlaying-Menu(CoverFlow)
function CoverFlow(props){
    return(
        <Cover color = {props.color}>
            <div id="text">
                <span>CoverFlow</span>
            </div>
            <Icon id="font">
             <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </Icon>
        </Cover>
    )
}

const Cover = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
width: 60%;
height: 40px;
padding-left: 3px;
border-radius: 20px;
background-color: ${props => props.color || "#cccccc"};
& #font i{
    color: #cccccc;
 };
& #font{
    padding-top: 10px;
};

& #text{
    padding-top: 10px;
    width: 50%;
};

& div span{
    font-size: 1.1em;
    padding-top: 8px;
}
`;

const Icon = styled.div`
height: 15px;
width: 15px;
`;

export default CoverFlow;