function Profile({ name, email, img }) {
  return (
    <div className="Profile">
      <img
        src={img}
        className="ProfilePic"
        style={name == "Sarrah Barodawala" ? { width: "65%" } : {}}
      />
      <h2>{name}</h2>
      <h2>{email}</h2>
    </div>
  );
}

export default Profile;
