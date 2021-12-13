import React from 'react';
import LinearProgress  from '@material-ui/core/LinearProgress';
import "./SkillContainer.css";

const SkillContainer = () => {
    return (
        <div className="skillContainer" >
            <div  className="skillContainer__text">
                <h2>SKILLSET</h2>
                <div className="skillContaioner__skillSet">
                    <h5>React</h5>
                    <div className="skillContainer__slider skillContainer__slider1">
                        <LinearProgress variant="determinate" value={75}/>
                    </div>
                </div>
                <div className="skillContaioner__skillSet">
                    <h5>NodeJs</h5>
                    <div className="skillContainer__slider skillContainer__slider2">
                        <LinearProgress variant="determinate" value={75}/>
                    </div>
                </div>
                <div className="skillContaioner__skillSet">
                    <h5>MangoDB</h5>
                    <div className="skillContainer__slider skillContainer__slider3">
                        <LinearProgress variant="determinate" value={80}/>
                    </div>
                </div>
                <div className="skillContaioner__skillSet">
                    <h5>ExpressJs</h5>
                    <div className="skillContainer__slider skillContainer__slider4">
                        <LinearProgress variant="determinate" value={79}/>
                    </div>
                </div>
                <div className="skillContaioner__skillSet">
                    <h5>AWS</h5>
                    <div className="skillContainer__slider skillContainer__slider5">
                        <LinearProgress variant="determinate" value={78}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillContainer;
