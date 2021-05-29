import React ,{ useState } from 'react'
function ShowTown({towns})
{
     return <div>
         {
             towns.map(
                 (town ,index )=><li id={"town"+(1+index)}>{town.name}</li>
             )
         }
     </div>
}
function ShowCity({city})
{
  const[a,setA]=useState(0)
  return <div>
              {
                city.map(
                  (c,index)=><div>
                             <li id={"city"+(index+1)} onClick={
                                 ()=>{
                                     if(a===c.name)
                                       setA(0)
                                      else
                                      setA(c.name)
                                 }
                             }>{c.name}</li>
                             {a===c.name && <ShowTown towns={c.towns}/>}
                      </div>
                )
              }
         </div>;

}
export default ShowCity ;