import React from 'react'
import ColorCard from '../ComponentsPage/CardsPage/ColorCard'
import ProgressCard from '../ComponentsPage/CardsPage/ProgressCard'

const Row3 = () => {
  const ProgressData = [
    {
      content: 'No.Of Failers',
      percentage: '15%',
      cardType: 'progress mb-4',
      barType: 'progress-bar bg-danger',
      width: '20%',
      ariavalue: '20',
    },
    {
      content: 'Irregular Attendance',
      percentage: '40%',
      cardType: 'progress mb-4',
      barType: 'progress-bar bg-warning',
      width: '40%',
      ariavalue: '40',
    },
    {
      content: 'Pass Percentage',
      percentage: '60%',
      cardType: 'progress mb-4',
      barType: 'progress-bar',
      width: '60%',
      ariavalue: '60',
    },
    {
      content: 'Regular Attendance',
      percentage: '80%',
      cardType: 'progress mb-4',
      barType: 'progress-bar bg-info',
      width: '80%',
      ariavalue: '80',
    },
    {
      content: 'Assignment Submitted',
      percentage: 'Complete!',
      cardType: 'progress',
      barType: 'progress-bar bg-success',
      width: '100%',
      ariavalue: '100',
    },
  ]
  const colorCardData = [
    {
      cardType: 'card bg-primary text-white shadow',
      cardHeading: 'English',
      content: 'Pass Percentage:85%',
      textColor: 'text-white-50 small',
    },
    {
      cardType: 'card bg-success text-white shadow',
      cardHeading: 'Mathematics',
      content: 'Pass Percentage:75%',
      textColor: 'text-white-50 small',
    },
    {
      cardType: 'card bg-info text-white shadow',
      cardHeading: 'Chemistry',
      content: 'Pass Percentage:80%',
      textColor: 'text-white-50 small',
    },
    {
      cardType: 'card bg-warning text-white shadow',
      cardHeading: 'Physics',
      content: 'Pass Percentage:90%',
      textColor: 'text-white-50 small',
    },
    {
      cardType: 'card bg-danger text-white shadow',
      cardHeading: 'History',
      content: 'Pass Percentage:70%',
      textColor: 'text-white-50 small',
    },
    {
      cardType: 'card bg-secondary text-white shadow',
      cardHeading: 'French',
      content: 'Pass Percentage:95%',
      textColor: 'text-white-50 small',
    },
    {
      cardType: 'card bg-light text-black shadow',
      cardHeading: 'Computer Science',
      content: 'Pass Percentage:90%',
      textColor: 'text-black-50 small',
    },
    {
      cardType: 'card bg-dark text-white shadow',
      cardHeading: 'Biology',
      content: 'Pass Percentage:85%',
      textColor: 'text-white-50 small',
    },
  ]
  return (
    <div className="row">
      <div className="col-lg-6 mb-4">
        {/* <!-- Project Card Example --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
          </div>
          <div className="card-body">
            {ProgressData.map((card, index) => (
              <ProgressCard
                key={index}
                content={card.content}
                percentage={card.percentage}
                cardType={card.cardType}
                barType={card.barType}
                width={card.width}
                ariavalue={card.ariavalue}
              />
            ))}
          </div>
        </div>
        <div className="row">
          {colorCardData.map((card, index) => (
            <ColorCard
              key={index}
              cardType={card.cardType}
              cardHeading={card.cardHeading}
              content={card.content}
              textColor={card.textColor}
            />
          ))}
        </div>
      </div>

      <div className="col-lg-6 mb-4">
        {/* <!-- Illustrations --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: '25rem' }}
                src="img/undraw_posting_photo.svg"
                alt="..."
              />
            </div>
            <p>Education helps a person to get knowledge and improve confidence in life. It can help you improve your career and your personal growth. An educated person can become a great citizen in society.
            </p>
           
          </div>
        </div>

        {/* <!-- Approach --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Knowledge 0Cw
              Development Approach
            </h6>
          </div>
          <div className="card-body">
            <p>
            They say knowledge is power. Think about it: Your current mentors and the senior leaders you regularly interact with at work likely have a vast knowledge of your company’s products and services and their field of work, and they might even keep up to date with general industry news. The world’s most successful people find ways to incorporate learning into their day-to-day work. 
            </p>
            <p className="mb-0">
            The ability to acquire knowledge effectively is a skill in itself. It’s the key to opening doors that would otherwise be locked and often controls access to opportunity and advancement in the workplace. 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Row3
