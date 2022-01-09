import React from 'react'

export default function DarkSwitch(props) {
    return (
        <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">enable {props.mode==='light'?'dark':'light'} mode</label>
          </div>
    )
}
