import React, { useEffect } from 'react'
import DraftView from '../view';
import useDraftModel from '../model';
import { TBanzuke } from '../../../../shared/types';

export default function DraftController({data}:{data:TBanzuke}) {
  const { state, dispatch } = useDraftModel();
  useEffect(() => {
    // init state
    dispatch({type:'INIT', payload:{teams:[
      {name:'team 1', rikishiTachi:[]},
      {name:'team 2', rikishiTachi:[]},
      {name:'team 3', rikishiTachi:[]},
      {name:'team 4', rikishiTachi:[]},
    ]}})
  },[])
  
  return (
    <DraftView data={data}/>
  )
}
