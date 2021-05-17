import { useFetchUser } from '../lib/user'


function ProfileCard({ user }) {
  return (
    <>
      <h1>Profile</h1>

      <div>
        <h3>Profile (client rendered)</h3>
        <img src={user.picture} alt="user picture" />
        <p>nickname: {user.nickname}</p>
        <p>name: {user.name}</p>
      </div>
    </>
  )
}

function Profile() {
  const { user, loading } = useFetchUser({ required: true })

  return (<>
      {loading ? <>Loading...</> : <ProfileCard user={user} />}
  </>)
}

export default Profile
