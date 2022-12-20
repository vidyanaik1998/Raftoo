
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { addfriend } from '../services/friendSlice';
import DegreeSeparationn from './sections/DegreeSeparation';


function FindRelation() {


  return (
    <>
        <div className="p-20 App">

      <h3 className='pb-10 text-white text-[30px] font-bold'>Degree of separation</h3>

      <DegreeSeparationn />
      </div>
    </>
  );
}

export default FindRelation;
