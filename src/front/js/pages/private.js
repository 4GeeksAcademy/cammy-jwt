import React, { useContext, useEffect } from "react";
import dogImage from "../../img/doggo.jpg";
import "../../styles/private.css"

export const Private = () => {

	return (
		<div className="text-center mt-5">
			<h1>Welcome to the private browser!</h1>
			<p>
                Here is a picture of a doggo!
                <br />
				<img className="dog-pic" src={dogImage} />
			</p>
		</div>
	);
};
