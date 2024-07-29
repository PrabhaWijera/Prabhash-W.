import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="EXPERIENCE"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./ceye.jfif"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Ceyentra Technologies</div>
							<div className="work-subtitle">
							Trainer Software Engineer 
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>
						
						<div className="work">
							<img
								src="./lancer.jfif"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">FreeLancer</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./photography-logo.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Prabhash Wijerathna Photography</div>
							<div className="work-subtitle">
							Photographer
							</div>
							<div className="work-duration">2022- Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
