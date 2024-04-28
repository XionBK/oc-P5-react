
import { useState } from 'react'
import arrow from '../assets/arrow.svg'

export function Collapse ({title, children}) {

    const [open, setOpen] = useState(false)
    const toggleCollapse = () => setOpen(prevOpen => !prevOpen);

    return <div className={`collapse ${open ? 'isOpen': ''}`} >
        <div className="collapse-title">
            <h2>{title}</h2>
            <img src={arrow} alt="fleche" onClick={toggleCollapse} className='arrow' />
        </div>
        <div className="collapse-content">
            <div className="collapse-info">
                {children}
            </div>
        </div>
    </div>
}