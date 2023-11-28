import React from 'react'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader = () => {
  return (
   <SkeletonTheme baseColor="#171E31" highlightColor="#444">
    <div className='ContentBox'>
     <p><Skeleton width={'100%'} height={'10.875rem'} count={1} style={{
      borderRadius: '0.5rem'
     }} /></p>
     <p><Skeleton width={'35%'} height={'5px'} /></p>
     <p><Skeleton width={'70%'} height={'8px'} /></p>
    </div>
   </SkeletonTheme>
    
  )
}

export default SkeletonLoader