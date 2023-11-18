import React from 'react'
import { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { AuthContent } from '../../AuthProvider/AuthProvider'

const Profile = () => {
  const {user} = useContext(AuthContent)
  return (
    <div>
      <Helmet>
        <title>Profile - {user.displayName}</title>
      </Helmet>
      <h1>I am profile</h1>
    </div>
  )
}

export default Profile
