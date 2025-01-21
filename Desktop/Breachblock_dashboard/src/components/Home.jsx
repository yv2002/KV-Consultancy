import React from 'react';

const Home = () => {
    const cards=[
        {
            title:"Total Users",
            price:"$45231",
           icon: "bx bxs-user-account",
            percent:"+20.1%"
        },
        {
            title:"Total Orders",
            price:"$5000",
            icon:'bx bx-line-chart',
            percent:"+21.1%"
        },
        {
            title:" Total Sales",
            price:"$7000",
            icon:'bx bxs-cube',
            percent:"+21.1%"
        },
        {
            title:"Total Pending",
            price:"$6000",
            icon:'bx bx-time',
            percent:"+21.1%"
        }

    ];

    const users=[
        {
            Name:"Yogita",
            Course:"Web Development",
            Price:"4999",
            Status:"Active"
         },
         {
            Name:"Vedant",
            Course:"Web Development",
            Price:"4999",
            Status:"Active"
         },
         {
            Name:"Shubham",
            Course:"Cyber Security",
            Price:"4999",
            Status:"Active"
         },
         {
            Name:"Neetu",
            Course:"Cyber Security",
            Price:"4999",
            Status:"Active"
         },

    ]
    
  return (
    <div className=' h-screen  px-6 w-full'>
     <div className=" font-bold text-2xl text-white ml-4 mt-4">Dashboard</div>
      
      <div className="grid grid-cols-4   mt-6 gap-4">
              
                {cards.map((card, idx) => (
                  <div key={idx} className="p-4 bg-[#313D4F] rounded-xl relative shadow ">
                    <div className="text-[#FFFFFF] ">{card.title}</div>
                   
                   <div className=" absolute right-2 top-4 h-10 rounded-lg bg-slate-300 flex  justify-center items-center w-10">
                   <i class={`${card.icon} absolute right-2 text-3xl text-black `}></i>
                   </div>
                    <div className="text-2xl  text-white mt-2 ">{card.price}</div>
                    <div className="text-sm mt-2 text-white">{card.percent} Up from yesterday</div>
                  </div>
                ))}
              </div>

        <div className=" h-[400px] w-full px-6  shadow  bg-[#313D4F] rounded-xl mt-6 ">
            <p className="font-bold  text-xl p-3 text-white">User Details</p>

            <div className=" h-[40px] w-full    shadow bg-[#CFCFCF1D]  rounded-2xl">

                 <ul className="grid grid-cols-4  font-medium text-white p-2 ml-11">
                    <li>User Name </li>
                    <li>Course Name </li>
                    <li>Price</li>
                    <li>Status</li>
                 </ul>
        <div className="grid grid-cols-2  mr-3  ml-6  gap-2 mt-4">
          
            <table className="min-w-[900px]  ">
                
                <tbody className=" text-white    bg-[#313D4F]">
                  {users.map((user, idx) => (
                    <tr key={idx}>
                      <td className=" w-fit py-4 ">{user.Name}</td>
                      <td className="  w-fit  py-4 ">{user.Course}</td>
                      <td className="  w-fit  py-4 ">{user.Price}</td>
                      <td className="  w-fit  py-4 ">{user.Status}</td>
                     
                     
                    </tr>
                  ))}
                </tbody>
              </table>
         
          </div>

         
        </div>

</div>
            
            
</div>      
   
  )
}

export default Home
