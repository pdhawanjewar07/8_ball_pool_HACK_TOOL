import React from "react";

function Live_screen(){
    return(
        <div id="live_screen" style={{innerWidth:800, innerHeight:400}}>
            <video src="video.mp4" autoPlay loop muted></video>
        </div>
    );
}

export default Live_screen;