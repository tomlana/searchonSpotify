import { useEffect, useState } from 'react'
import ReactDom from 'react-dom'

const Loader = (props) => {
        const[node] = useState(document.createElement('div'))
        const loader = document.querySelector('#loader')

}

useEffect (() => {
    loader.appendChild(node).ClassList.add('message')
}, [loader, node])


useEffect (() => {
    if(props.show){
        loader.classlist.remove('hide')
        document.body.classList.add('loader-open')
    } else {
        loader.classlist.add('hide')
        document.body.classList.remove('loader-open')
    }
}, [loader, props.show])

return ReactDom.createPortal(props.children, node)

export default Loader
