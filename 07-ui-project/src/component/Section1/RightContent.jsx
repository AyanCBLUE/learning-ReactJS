import RightCard from './RightCard'
const RightContent = (props) => {
  return (
    <div id="right" className='h-full w-3/4 p-6 flex overflow-x-auto items-center justify-center gap-10'>
        {props.user.map(function(elem, index){
            return <RightCard key={index} id={index} img={elem.img} tag={elem.tag} />
})}
   </div>
  )
}

export default RightContent