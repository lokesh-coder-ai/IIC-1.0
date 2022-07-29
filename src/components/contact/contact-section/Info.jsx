import React from 'react'
import { Icon, InlineIcon } from '@iconify/react'

import locationIcon from '@iconify/icons-mdi/map-marker-radius-outline'
import phoneIcon from '@iconify/icons-mdi/phone-outline'
import emailIcon from '@iconify/icons-mdi/email-multiple-outline'



import './info.css'

const contactDetails = [
  {
    value: 'National Institute of Technology Calicut,NIT Campus P.O 673 601, Kozhikode, India.',
    icon: locationIcon,
  },
  { value: '09645654204', icon: phoneIcon },
  { value: 'iic-nitc@nitc.ac.in', icon: emailIcon },
]

const renderContactDetails = () =>
  contactDetails.map(detail => (
    <p key={detail.value} className="info-detail">
      <InlineIcon icon={detail.icon} /> {detail.value}
    </p>
  ))


const Info = () => (
  <section className="info">
    <h2 className="info-h2">Contact information</h2>

    <div className="info-details-container">{renderContactDetails()}</div>

    
  </section>
)
export default Info;