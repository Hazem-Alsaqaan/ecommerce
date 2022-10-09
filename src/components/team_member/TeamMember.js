import React, { Fragment } from "react";
import "./TeamMember.css"

const TeamMember = ()=>{
    return(
        <Fragment>
            <div className="box-team">
                        <div className="images-team">
                            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" />
                        </div>
                        <h2>Mohamed Ibrahim</h2>
                        <span>Full Stack Developer</span>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        </p>
            </div>
        </Fragment>
    )
}
export default TeamMember;