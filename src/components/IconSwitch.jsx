export default function IconSwitch({icon, onSwitch}) {
    return (
        <div className="iconSwitch">
            <span className="material-icons" onClick={()=> onSwitch()}>{icon}</span>
        </div>
    )
}