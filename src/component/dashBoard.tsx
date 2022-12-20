import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

import { Checkbox } from 'antd';

function Dashboard() {

  const candidates = useSelector((state: any) => state.profile);
  const [items, setItems] = useState<any>([]);
  const [itemName, setItemName] = useState<any>("");

  const addItem = (e: any, value: any) => {
    setItems([...items, { id: value.id, checked: e.target.checked }]);
    if (e.target.checked === false) {
      setItems((current: any) =>
        current.filter((fruit: any) => fruit.id !== value.id)
      );
    }
    setItemName("");
    e.preventDefault();
  };
  const filtered = items.map((item: any) => item.id);
  return (
    <div className="p-20 App">
      
      <h3 className=' text-white text-[30px] font-bold'>Raftooo</h3>

      <div className='flex justify-end gap-10 py-10 text-right'>
      <Link className={items.length === 2 ? " visible":"hidden"} to={`/find/${filtered[0]}/${filtered[1]}`} >
          <button className='text-white border border-white px-8 py-3 font-bold'>Find relationship</button>
        </Link>
        <Link to='/add' >
          <button className='text-white border border-white px-8 py-3 font-bold'>Add</button>
        </Link>      
      </div>

      <div className='grid grid-cols-3 gap-4'>
        {candidates?.profile.map((initial: any, index: number) => {
          const filtered = items.filter((employee: any) => {
            return employee.id === initial.id;
          });
          return (
            <Checkbox
              disabled={items.length === 2 ? filtered[0]?.id === initial.id ? false : true : false}
              onChange={(e) => addItem(e, initial)}>
              <div className=' cursor-pointer' >
                <div>
                  <div
                    className={filtered[0]?.checked === true ? 'h-[210px] border bg-[#f38065] text-white p-3' : 'h-[210px] border border-[#f38065] p-3'}
                  >

                    <div className='flex mb-4 text-left items-center gap-3'>
                      <img className='w-[30%] h-[40%]' src={initial.img} alt={initial.img} />
                      <div>
                        <h4 className='text-white  font-bold text-[22px]'>{initial.fullname}</h4>
                        <h4 className='text-white font-bold text-[20px]'>{initial.phonenumber}</h4>
                      </div>
                    </div>
                {initial.friend !==''? 
                <h2 className='text-[#62c0dd] font-bold text-[20px]'>{initial.fullname} is friend of {initial.friend}</h2> : null
                }    
                  </div>
                </div>
              </div>
            </Checkbox>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
