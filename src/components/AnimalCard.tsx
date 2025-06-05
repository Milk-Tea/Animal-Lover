import React from "react"

/**
 * - Displays the in depth info of an animal retrieved from the API endpoint
 */

const AnimalCard:React.FC = ()=> {

    return (
        
        <div className="bg-white">
            <h1 className="text-xl font-bold">Animal Name</h1>

            <p>Animal description</p>

            <ul>
                <li>Characteristic 1</li>
                <li>Characteristic 2</li>
                <li>Characteristic 3</li>
                <li>Characteristic 4</li>
                <li>Characteristic 5</li>
            </ul>
        </div>
    )
}

export default AnimalCard