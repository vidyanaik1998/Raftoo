
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { addfriend } from '../../services/friendSlice';


function DegreeSeparationn() {

  const candidates = useSelector((state: any) => state.profile);
  const findfriends = useSelector((state: any) => state.friend);

  const [friend, setfriend] = useState<any>([])
  const [items, setItems] = useState<any>([]);
  const [state, setstate] = useState<any>([]);
  const [finalset, setfinalset] = useState<any>([]);
  const [value, setvalue] = useState<any>(false);

  const dispatch = useDispatch();

  let getData3: any
  useEffect(() => {
    getData3 = window?.location?.pathname.split("/");

    setfriend(getData3.slice(2, getData3.length))
  }, [])

  useEffect(() => {

    if (friend.length !== 0) {

      friend.map((data: any) => {
        candidates?.profile.map((initial: any, index: number) => {
          if (initial.id == data) {

            var newarr = {
              id: initial.id,
              img: initial.img,
              phonenumber: initial.phonenumber,
              fullname: initial.fullname,
              friend: initial.friend
            };

            setItems((oldArray: any) => [...oldArray, newarr]);
          }
        })
      });
    }
  }, [friend]);


  
  useEffect(() => {
      if(items[1]?.friend !== '' && items[0]?.friend !==''){
         setstate(items.slice(0, 1));
    setvalue(!value);  
      }
      else{
        setstate([])
      }

   

  }, [items])



  useEffect(() => {

    if (state.length !== 0) {
      if (state[0].friend.trim() === items[1].fullname.trim()) {
        var newarr1 = {
          id: state[0].id,
          img: state[0].img,
          phonenumber: state[0].phonenumber,
          fullname: state[0].fullname,
          friend: state[0].friend
        };

        dispatch(addfriend(newarr1));

          var newarr2 = {
                id: items[1].id,
                img: items[1].img,
                phonenumber: items[1].phonenumber,
                fullname: items[1].fullname,
                friend: items[1].friend
              };
              dispatch(addfriend(newarr2));
      }
      else{
       const output = candidates?.profile.filter((new1: any) =>
          state.some((new2: any) => new1.id === new2.id)
        );
        var newarr = {
          id: output[0].id,
          img: output[0].img,
          phonenumber: output[0].phonenumber,
          fullname: output[0].fullname,
          friend: output[0].friend
        };

        dispatch(addfriend(newarr));

        const findfriend = candidates?.profile.filter((new1: any) =>
          newarr.friend.trim() === new1.fullname.trim()
        );

        setstate(findfriend);
      }
       
      
    
    }


  }, [state])



  return (
      <>
      {findfriends?.friend.length > 0 ?
    <div className='  grid grid-cols-4 gap-4'>
      {findfriends?.friend.map((item: any, index: number) => {
        return (

          <div className='border bg-[#f38065] text-white p-3' >
            <button className='bg-[#f38065] border-[#f38065]  text-white border px-3 py-1'>Add Friend</button>
            <div className='flex mb-4 text-left items-center gap-3'>
              <img className='w-[30%] h-[40%]' src={item.img} alt={item.img} />
              <div>
                <h4>{item.fullname}</h4>
                <h4>{item.phonenumber}</h4>
              </div>
            </div>
            <h2 className=' '>{item.fullname} is friend of {item.friend}</h2>
          </div>

        );
      })}
    </div>
    :
    <p>There is no degree of separation between {items[0]?.fullname} and {items[1]?.fullname} </p>
    }</>
  );
}

export default DegreeSeparationn;
