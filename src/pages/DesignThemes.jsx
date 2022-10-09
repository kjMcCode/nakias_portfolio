
import React from "react"
import { Link } from 'react-router-dom'

const DesignTheme1 = () => {
    return (
        <div>
        <h1>Design Themes</h1>
        <Link to="/theme/1">Theme 1</Link>
        <Link to="/theme/2">Theme 2</Link>
        <Link to="/theme/3">Theme 3</Link>
        </div>
    )
}

export default DesignTheme1