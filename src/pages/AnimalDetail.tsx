import React from "react"
import AnimalCard from "../components/AnimalCard"
/**
 * - to return the specifics from the animal that was listed as a favourite so that the user can like its characteristics.
 * 
 * Wishlist: 
 * - Have a featured image next to animal detail
 * - Show images of related animal in a gallery below the animal detail
 */
const AnimalDetail:React.FC = ()=> {

    return (
        <div>
            <AnimalCard />
        </div>
    )
}

export default AnimalDetail