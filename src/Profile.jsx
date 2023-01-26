const Profile = ({login, data}) => {
    function Item() {
        if (login) {
          return(
                <div className="profile">
                    <img src="/Ellipse 49.png" alt="" />
                    <p>Email:</p>
                    <p>Name: </p>
                    <p>{data.data.token}</p>
                </div>
            )
        }
        return <p>not authorised</p>;
    }
    return ( 
        <Item></Item>
     );
}
 
export default Profile;