import React from 'react'
import { Helmet } from 'react-helmet'
import { useLoaderData } from 'react-router-dom'

const Users = () => {
    const loadedUser = useLoaderData()
  return (
    <div>
      <Helmet>
        <title>Users - jobayerBlogs</title>
      </Helmet>
      <h1 className=' text-3xl'> 
            <span className='text-[#12F7D6] text-[14px] SpecialFont'>&lt;h1&gt;</span> 
            <br/>
            Register user of JobayerBlogs!!
            <span className='text-[#12F7D6] text-[14px] SpecialFont'> &lt;h1/&gt;</span> 
     </h1>
     <div className="overflow-x-auto mt-[25px]">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        loadedUser.map(user=>
            <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
            </tr>)
      }
    </tbody>
  </table>
</div>
    </div>
  )
}

export default Users
