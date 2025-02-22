
const UserProfile = ({name, age, bio}) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2 style={{color:"blue"}}>{name}</h2>
      <p>Age: <span >{age}</span></p>
      <p>Bio: {bio}</p>  
    </div>
  );
};

export default UserProfile;

