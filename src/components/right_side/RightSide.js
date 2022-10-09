import React, { Fragment } from "react";
import TeamMember from "../team_member/TeamMember";
import "./RightSide.css"

const RightSide = ()=>{
    return(
        <Fragment>
            <section className="right-side">
                <ul>
                    <h6>Team Member</h6>
                    <TeamMember/>
                    <TeamMember/>
                    <TeamMember/>
                </ul>
            </section>
        </Fragment>
    )
}

export default RightSide;