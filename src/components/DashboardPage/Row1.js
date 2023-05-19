import React from 'react'
import Card from '../ComponentsPage/CardsPage/Card'

const Row1 = () => {
  const cardData = [
    {
      cardtype: 'card border-left-primary shadow h-100 py-2',
      textcolor: 'text-xs font-weight-bold text-primary text-uppercase mb-1',
      heading: 'Total Students',
      content: '125',
      progress: false,
      icon:"fa fa-child fa-2x text-gray-300",
     
    },
    {
      cardtype: 'card border-left-success shadow h-100 py-2',
      textcolor: 'text-xs font-weight-bold text-success text-uppercase mb-1',
      heading: 'Total Teachers',
      content: '15',
      progress: false,
      icon:"fa fa-address-card fa-2x text-gray-300",

    },
    {
      cardtype: 'card border-left-info shadow h-100 py-2',
      textcolor: 'text-xs font-weight-bold text-info text-uppercase mb-1',
      heading: 'Total Administrators',
      content: '2',
      progress: true,
      icon:"fa fa-graduation-cap fa-2x text-gray-300",
      
    },
    {
      cardtype: 'card border-left-warning shadow h-100 py-2',
      textcolor: 'text-xs font-weight-bold text-warning text-uppercase mb-1',
      heading: ' Total Notice',
      content: '18',
      progress: false,
      icon: 'fas fa-clipboard-list fa-2x text-gray-300',
    },
  ]
  return (
    <div className="row">
      {cardData.map((card, index) => (
        <Card
          key={index}
          cardType={card.cardtype}
          textColor={card.textcolor}
          heading={card.heading}
          content={card.content}
          progress={card.progress}
          icon={card.icon}
        />
      ))}
    </div>
  )
}

export default Row1
