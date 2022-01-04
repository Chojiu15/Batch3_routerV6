import { Routes, Route } from "react-router-dom"
import SecondComponent from "./SecondComponent"


const FirstComponent = () => {
    return(
        <>
            <h1>My first component</h1>
            <p>lorem15 lorem15lorem15lorem15lorem15lorem15s</p>
            <Routes>
             <Route exact path="secondcomponent" element={<SecondComponent />} />
            </Routes>
        </>
    )
}

export default FirstComponent