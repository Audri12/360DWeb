import React from 'react'
import HRBanner from './HRBanner'
import Compliance from './Compliance'
import HRAudit from './HRAudit'
import Banner2 from '../../Offshore Development/Banner2'
import Benefits from '../../Offshore Development/Benefits'
import BenifitsWithAnIcon from '../../Offshore Development/BenifitsWithAnIcon'

const HRServices = () => {
  return (
    <div>
        <HRBanner></HRBanner>
        <Compliance></Compliance>
        <HRAudit></HRAudit>
        <Banner2></Banner2>
        <Benefits></Benefits>
        <BenifitsWithAnIcon></BenifitsWithAnIcon>
    </div>
  )
}

export default HRServices