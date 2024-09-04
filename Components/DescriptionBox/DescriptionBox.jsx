import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel tellus nunc. Morbi pellentesque in ante id euismod. Suspendisse lorem felis, accumsan quis tincidunt sed, consequat ac eros. Etiam eget efficitur magna. Phasellus sollicitudin mi elementum, condimentum felis in, feugiat risus. Donec tincidunt odio pharetra lacus sagittis venenatis. Nullam egestas.
            </p>
            <p>
            Etiam eget efficitur magna. Phasellus sollicitudin mi elementum, condimentum felis in, feugiat risus. Donec tincidunt odio pharetra lacus sagittis venenatis. Nullam egestas.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox
