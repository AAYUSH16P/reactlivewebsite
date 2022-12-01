import React from 'react';
import FeatureBox from './FeatureBox';
import Featureimage from '../image/feature_1.png';
import Featureimage1 from '../image/feature_2.png';
import Featureimage2 from '../image/feature_3.png';

function Feature() {
  return (
    <div id='features'>
    <div className='a-container'>
        <FeatureBox image={Featureimage} title='Development Course'/>
        <FeatureBox image={Featureimage1} title='Development Course'/>
        <FeatureBox image={Featureimage2} title='Development Course'/>
    </div>
   </div>
  )
}

export default Feature;