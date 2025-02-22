
const UserProfile = (props) => {
  return (
    <div>
      <h3 style={{ color:"blue"}} >{props.name}</h3>
       <p>Age: {props.age}</p>
       <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;

