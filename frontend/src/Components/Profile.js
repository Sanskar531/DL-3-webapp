function Profile({ name, email, img }) {
  return (
    <div className="Profile">
      <img
        src={img}
        className="ProfilePic"
        style={name == "Sarrah Barodawala" ? { width: "50%" } : {}}
      />
      <h1>{name}</h1>
      <h1 style={{ fontSize: "1.5rem" }}>{email}</h1>
    </div>
  );
}

export default Profile;
