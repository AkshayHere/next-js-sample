import React, { useEffect, useState } from "react";

function DudePage() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const interval = setInterval(function () {
            let d = new Date();
            let n = d.toLocaleTimeString();
            setTime(n);
        }, 1000);
    }, []);

    return (
        <React.Fragment>
            <h3>This obviously is a beautiful page made by The Dude !!</h3>
            <div>{time}</div>
        </React.Fragment>
    );
}

export default DudePage