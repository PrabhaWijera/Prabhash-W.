import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Educations = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="EDUCATION"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./metro.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Metropolitan University</div>
							<div className="work-subtitle">
							BSc (Hons) Software Engineering
							</div>
							<div className="work-duration">2024 - 2025</div>
						</div>
						
						<div className="work">
							<img
								src="./ijse.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Institute of Software Engineering (IJSE)</div>
							<div className="work-subtitle">
							GDSE
							</div>
							<div className="work-duration">2021 - 2024</div>
						</div>

						<div className="work">
							<img
								src="./esoft.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">ESOFT Metro Campus</div>
							<div className="work-subtitle">
							Diploma In Information Technology
							</div>
							<div className="work-duration">2022 - 2022</div>
						</div>
						<div className="work">
							<img
								src="./esoft.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">ESOFT Metro Campus</div>
							<div className="work-subtitle">
							Diploma in English
							</div>
							<div className="work-duration">2022 - 2022</div>
						</div>


						<div className="work">
							<img
								src="./kv.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Kalutara Vidyalaya</div>
							<div className="work-subtitle">
							GCE O level / A level
							</div>
							<div className="work-duration">2007 - 2020</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Educations;
