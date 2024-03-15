import React from "react";
interface WayToTeachProps {
    title: string;
    description: string;
}
const WayToTeach : React.FC<WayToTeachProps> = ({ title, description }) => {
    return (
        <li>
            <p>
                <strong> {title} </strong>
                {description}
            </p>
        </li>
    );
}

export default WayToTeach;