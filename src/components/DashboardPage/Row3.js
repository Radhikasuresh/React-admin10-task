import React from 'react'
import ColorCard from '../ComponentsPage/CardsPage/ColorCard'
import ProgressCard from '../ComponentsPage/CardsPage/ProgressCard'

const Row3 = () => {
  const ProgressData = [
    {
      content: 'No.Of Books Yet to be re-stocked',
      percentage: '15%',
      cardType: 'progress mb-4',
      barType: 'progress-bar bg-danger',
      width: '20%',
      ariavalue: '20',
    },
    {
      content: 'Books ordered',
      percentage: '40%',
      cardType: 'progress mb-4',
      barType: 'progress-bar bg-warning',
      width: '40%',
      ariavalue: '40',
    },
    {
      content: 'No.of Books not returned',
      percentage: '60%',
      cardType: 'progress mb-4',
      barType: 'progress-bar',
      width: '60%',
      ariavalue: '60',
    },
    {
      content: 'No.of Books issued',
      percentage: '80%',
      cardType: 'progress mb-4',
      barType: 'progress-bar bg-info',
      width: '80%',
      ariavalue: '80',
    },
    {
      content: 'No.of Books returned',
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
      content: '85%',
      textColor: 'text-white-50 small',
    },
    {
      cardType: 'card bg-success text-white shadow',
      cardHeading: 'Mathematics',
      content: '75%',
      textColor: 'text-white-50 small',
    },
    {
      cardType: 'card bg-info text-white shadow',
      cardHeading: 'Polity',
      content: '80%',
      textColor: 'text-white-50 small',
    },
    {
      cardType: 'card bg-warning text-white shadow',
      cardHeading: 'Economics',
      content: '90%',
      textColor: 'text-white-50 small',
    },
    {
      cardType: 'card bg-danger text-white shadow',
      cardHeading: 'History',
      content: '70%',
      textColor: 'text-white-50 small',
    },
    {
      cardType: 'card bg-secondary text-white shadow',
      cardHeading: 'French',
      content: '55%',
      textColor: 'text-white-50 small',
    },
    {
      cardType: 'card bg-light text-black shadow',
      cardHeading: 'Computer Science',
      content: '90%',
      textColor: 'text-black-50 small',
    },
    {
      cardType: 'card bg-dark text-white shadow',
      cardHeading: 'Biology',
      content: '85%',
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
            <p>A library is a collection of materials, books or media that are accessible for use and not just for display purposes. A library provides physical (hard copies) or digital access (soft copies) materials, and may be a physical location or a virtual space, or both. A library's collection can include printed materials and other physical resources in many formats such as DVD, CD and cassette as well as access to information, music or other content held on bibliographic databases.
            </p>
           
          </div>
        </div>

        {/* <!-- Approach --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
             Importance of Library
            </h6>
          </div>
          <div className="card-body">
            <p>
            Libraries offer free education and entertainment to the masses which can be a student, a work professional or a common person of a community. It doesn't matter what your economic status is, you can come in and have free access to books that can inform and transform you. Though the use of school/college and research libraries is limited only to the students of that particular school/college but state and community libraries are open for all and anyone can avail the benefits of these during working hours.
            </p>
            <p className="mb-0">
            A good modern library usually subscribes to practically all the important newspapers and periodicals so that these are made available to all those interested in these information sources.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Row3
