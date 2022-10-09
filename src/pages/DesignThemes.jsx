
import React from "react"
import { Link } from 'react-router-dom'

const DesignThemes = () => {
    return (
        <div className="container w-25 mt-5">
            <h1 className="mb-4">Design Themes</h1>
            <p><Link to="/theme/1">Theme 1</Link></p>
            <p><Link to="/theme/2">Theme 2</Link></p>
            <p><Link to="/theme/3">Theme 3</Link></p>
        </div>
    )
}

export default DesignThemes