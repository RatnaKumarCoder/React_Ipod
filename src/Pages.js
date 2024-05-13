import styled from "styled-components";
import sound from "./audio/pushpa.mp3"


//to update the activePage on the screen whenever a option in menu is clicked
const PageScreen=styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: linear-gradient(to right, #ff5733, #66aaff);
flex-wrap: wrap;

& div{
    display: flex; 
    flex-direction: column;
    text-align: center;
}
`;

const Audio=styled.audio`
width: 150px;
height: 20px;
margin: 5px;
&::-webkit-media-controls-panel{
    background-color:rgba(255, 0, 0, 0.3);
}
`;

const Image=styled.img`
height: 100px;
width: 100px;
margin: auto;
`;

function Page(props){

    console.log(props);

    if(props.activePage==="Music"){

    return(
        <>
        <PageScreen>
            <div>
                <Image src="https://wallpapercave.com/wp/wp11717825.jpg" alt="This is an example image" />
                <Audio controls>
                    <source src={sound} type="audio/mpeg" />
                </Audio>
                <span>Music</span>
            </div>
        </PageScreen>
        </>
    )
    
}
else if(props.activePage==="Settings"){
    return(
        <>
        <PageScreen>
            <div>
                <span>Settings</span>
            </div>
        </PageScreen>
        </>
    )
}

else if(props.activePage==="NowPlaying"){
    return(
        <>
        <PageScreen>
            <div>
                <span>NowPlaying</span>
            </div>
        </PageScreen>
        </>
    )
}

else if(props.activePage==="Settings"){
    return(
        <>
        <PageScreen>
            <div>
                <span>Settings</span>
            </div>
        </PageScreen>
        </>
    )
}
else{
    return(
        <>
        <PageScreen>
            <div>
                <Image src="https://wallpapercave.com/wp/gk1MNeu.jpg" />
                <span>Games</span>
            </div>
        </PageScreen>
        </>
    )
}



}


export default Page;