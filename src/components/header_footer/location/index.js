import React from 'react'

export const Location = () => {
    return (
        <div className="location_wrapper">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24121.427303656747!2d-119.04098969948441!3d40.9118338199298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809fc1db18d4f4a7%3A0xf2f995dbd40787a0!2sBlack%20Rock%20Desert!5e0!3m2!1siw!2sil!4v1588114953433!5m2!1siw!2sil" 
        width="100%" 
        height="500px"
        frameBorder="0" 
        allowFullScreen="" 
        aria-hidden="false" 
        tabIndex="0"
        >
        </iframe>
        <div className="location_tag">
        <div>Location</div>
        </div>
        </div>
    )
}
export default Location;
