// This import is only included in the server build, because it's only used by getServerSideProps
import auth0 from '../lib/auth0'

function Profile({ user }) {
  return (
    <div className="myaccount-page">

      <div className="myaccount-nav-title">My Account</div>
      <div className="myaccount-nav"></div>

      <div className="account-details">
        <h3>Profile (server rendered)</h3>
        <img src={user.picture} alt="user picture" />
        <p>nickname: {user.nickname}</p>
        <p>name: {user.name}</p>
      </div>
  </div>
  )
}

export async function getServerSideProps({ req, res }) {
  // Here you can check authentication status directly before rendering the page,
  // however the page would be a serverless function, which is more expensive and
  // slower than a static page with client side authentication
  const session = await auth0.getSession(req,res)

  if (!session || !session.user) {
    res.writeHead(302, {
      Location: '/api/login',
    })
    res.end()
    return
  }

  return { props: { user: session.user } }
}

export default Profile
