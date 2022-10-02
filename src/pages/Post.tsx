// Components
import { PostTitle } from "../components/post/PostTitle";

export const Post = () => {
  return (
    <main className="post-page">
      <div className="container">
        <div className="post-page-inner">
          <PostTitle
            title="15 Disadvantages Of Freedom And How You Can Workaround It."
            email="@samurai2099"
            date="27 may 2022"
          />
          <p className="post-page-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus
            venenatis lectus magna fringilla urna. Aliquet porttitor lacus
            luctus accumsan tortor posuere ac ut. Eleifend quam adipiscing vitae
            proin sagittis nisl rhoncus. Faucibus ornare suspendisse sed nisi
            lacus sed viverra tellus. Urna molestie at elementum eu facilisis
            sed odio morbi. Eget mi proin sed libero enim. Quis varius quam
            quisque id diam vel quam. Duis at tellus at urna condimentum mattis
            pellentesque. Nulla facilisi cras fermentum odio eu feugiat pretium
            nibh.
          </p>
        </div>
      </div>
    </main>
  );
};
