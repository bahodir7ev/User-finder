import React from 'react';

function Loading() {
    return (
        <div className="Loading-panel">
            <div className="Loading-video">
                <video src="../../videos/loading.mp4"></video>
            </div>
            <div className="Loading-text">Loading...</div>
        </div>
    )
}

export default Loading