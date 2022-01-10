import {useLocation} from 'react-router-dom'

const FirstComponent = () => {

    const location = useLocation()
    const data = location.state
    console.log(location)

    return(
        <>
                {data.map(element => {
                    return(
                        <>
                            <h2>{element.userId}</h2>
                            <p>{element.body}</p>
                            <p>{element.title}</p>

                        </>
                    )
                })}
            <h1>My first component</h1>
            <p>lorem15 lorem15lorem15lorem15lorem15lorem15s</p>
        </>
    )
}

export default FirstComponent