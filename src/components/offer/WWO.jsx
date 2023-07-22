import React from 'react'
import "./WWO.css"

const WWO = () => {
  return (
    <div className="offerContainer" id='experices'>
        <h2 className="heading">
        Rejuvenate at Aranya: Discover an Oasis of Wellness and Luxury
        </h2>
        <div className="BaseOffer">
        <div className="offer box1">
            <div className="img">
<img src="/imgs/yoga.jpg" alt="yoga" width={292} height={292}/>
            </div>
            <div className="details">
                <h3 className="det-heading">
                Yoga
                </h3>
                <p className="det-text">
                Heading: Yoga Retreat: Find Harmony and Inner Balance in Nature                </p>
            </div>
            </div>

            <div className="offer box2">
            <div className="img">
<img src="/imgs/tBedsmall.avif" alt="Thererpy Bed" width={292} height={292}/>
            </div>
            <div className="details">
                <h3 className="det-heading">
                Therapy Bed
                </h3>
                <p className="det-text">
                Experience ultimate relaxation and bliss as our skilled therapists attend to your body's needs.</p>
            </div>
            </div>

            <div className="offer box1">
            <div className="img">
<img src="/imgs/bathTubsmall.avif" alt="ayurved" width={292} height={292}/>
            </div>
            <div className="details">
                <h3 className="det-heading">
                Jacuzzi
                </h3>
                <p className="det-text">
                Relax and Unwind: Revitalize Your Senses with the Bliss of Jacuzzi                </p>
            </div>
            </div>

            <div className="offer box2">
            <div className="img">
<img src="/imgs/hammam.jpg" alt="ayurved" width={292} height={292}/>
            </div>
            <div className="details">
                <h3 className="det-heading">
                Hammam
                </h3>
                <p className="det-text">
                Pamper Your Senses: Luxuriate in the Soothing Benefits of Hammam
                </p>
            </div>
            </div>
        </div>
        

        
    </div>
  )
}

export default WWO