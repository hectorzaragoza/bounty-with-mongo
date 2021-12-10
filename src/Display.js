function Display(props) {
    let display
    if (props.bounty.name) {
        display = (
            <div className="showBounty">
                <h2>{props.bounty.name}</h2>
                <h3>Wanted for: {props.bounty.wantedFor}</h3>
                <p>Lase Seen: {props.bounty.lastSeen ? props.bounty.lastSeen : "Unknown"}</p>
            </div>
        )
    } else {
        display = <p>Click "More" to see more about a bounty</p>
    }
    return (       
        <>{display}</>
    )
}

export default Display