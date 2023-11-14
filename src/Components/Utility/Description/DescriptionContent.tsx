import React from 'react'
import DescriptionContentSubHeader from './DescriptionContentSubHeader'
import DescriptionContentgenres from './DescriptionContentgenres'
import DescriptionContentCasts from './DescriptionContentCasts'
import DescriptionButtons from './DescriptionButtons'
import StarRating from '../rating/StarRating'

const DescriptionContent = () => {
  return (
    <section className='description_Content'>
     <div className='description_Content_HeaderDiv'>
      <h2 className='description_Content_HeaderDiv_header'>The Killer</h2>
      <p className='description_Content_HeaderDiv_qoute'>Execution is everything.</p>
     </div>
     <div className='description_Content_ratings'>
      <h3 className='description_Content_ratings_header'>3.5</h3>
      <StarRating rating={3.4}/>
     </div>
     <div className='description_Content_SubDivs'>
      <DescriptionContentSubHeader header='Length' />
      <DescriptionContentSubHeader header='Language' />
      <DescriptionContentSubHeader header='Year' />
      <DescriptionContentSubHeader header='Status' />
     </div>
     <DescriptionContentgenres />
     <div className='description_Content_SynopsisDiv'>
      <h3 className='description_Content_subHeaders'>Synopsis</h3>
      <p className='description_Content_SynopsisDiv_para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur natus et optio harum cupiditate sed necessitatibus deleniti nam, quaerat aut veniam in ex sint temporibus distinctio officia quia non debitis!</p>
     </div>
     <DescriptionContentCasts />
     <DescriptionButtons />
    </section>
  )
}

export default DescriptionContent