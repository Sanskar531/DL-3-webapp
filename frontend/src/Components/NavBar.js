function NavBar() {
  return (
    <div className="NavBar">
      <h1 className="title">RAD SAS</h1>
      <a href="/">Home</a>
      <a href="/inference/image">Run Inference on a Single Image</a>
      <a href="/inference/video">Video Inference</a>
      <a href="/inference/real-time">Real-time Stream</a>
    </div>
  );
}

export default NavBar;
