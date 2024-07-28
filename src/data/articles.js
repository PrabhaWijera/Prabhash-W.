import React from "react";

function article_1() {
	return {
		date: "Feb 29, 2024",
		title: "React Patterns",
		description:
			"The Compound Components pattern, Render Props pattern, and Debouncing pattern are all common techniques used in React to help manage state and behavior in a more organized and reusable way.",
		keywords: [
			"The Benefits of React Pattern",
			"Prabhash",
			"Prabhash W.",
			"Prabhash wijerathna",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "Mar 27, 2023",
		title: "Understanding the CSS Display Property: Block, Inline, Inline-Block.",
		description:
			"CSS’s display property is used to control the layout and rendering of an HTML element. It allows you to specify whether an element is treated as a block-level or inline-level element, or whether it is hidden from the page entirely.",
		style: ``,
		keywords: [
			"CSS Display",
			"Prabhash",
			"Prabhash W.",
			"Prabhash wijerathna",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
