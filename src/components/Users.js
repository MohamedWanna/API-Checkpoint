import React from 'react'

const Users = ({user}) => {
  return (
    <div>
        <ul>
          <li><span>ID :</span> {user.id}</li>
          <li><span>Name : </span>{user.name}</li>
          <li><span>User name :</span> {user.username}</li>
          <li><span>Email :</span> {user.email}</li>
          <li className='sublist'><span>Address :</span>
              <li><span>Street :</span> {user.address.street}</li>
              <li><span>Suite :</span> {user.address.suite}</li>
              <li><span>City :</span> {user.address.city} </li>
              <li><span>ZIP Code :</span>  {user.address.zipcode} </li>
              <li><span>Geolocation:</span> {user.address.geo.lat},{user.address.geo.lng}</li>
          </li>
          <li><span>Phone :</span> {user.phone}</li>
          <li><span>Website :</span> {user.website}</li>
          <li><span>Company :</span> {user.company.name} 
              <li className='sublist'>
                <span>Catch Phrase :</span> {user.company.catchPhrase}
              </li>
              <li className='sublist'>
                <span>BS : </span>{user.company.bs}
              </li>
          </li>
        </ul>
    </div>
  )
}

export default Users