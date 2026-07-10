import { Route, Routes } from "react-router-dom";
import { AuthorizedRoute } from "./auth/AuthorizedRoute";
import Login from "./auth/Login";
import Register from "./auth/Register";
import UserProfileList from "./userprofiles/UserProfilesList";
import UserProfileDetails from "./userprofiles/UserProfileDetails";
import PostList from "./posts/PostList";
import PostDetails from "./posts/PostDetails";
import MyPostList from "./posts/MyPostList";
import { CreatePost } from "./posts/CreatePost";
import PostEdit from "./posts/PostEdit";
import PendingPostsList from "./posts/PendingPostsList";
import CategoryList from "./categories/CategoryList";

export default function ApplicationViews({ loggedInUser, setLoggedInUser }) {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <p>Welcome to Tabloid!</p>
            </AuthorizedRoute>
          }
        />
        <Route path="/posts">
          <Route
            index
            element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <PostList loggedInUser={loggedInUser} />
              </AuthorizedRoute>
            }
          />
          <Route path="/posts">
            <Route
              index
              element={
                <AuthorizedRoute loggedInUser={loggedInUser}>
                  <PostList />
                </AuthorizedRoute>
              }
            />
            <Route
              path="mine"
              element={
                <AuthorizedRoute loggedInUser={loggedInUser}>
                  <MyPostList />
                </AuthorizedRoute>
              }
            />
            <Route
              path=":id"
              element={
                <AuthorizedRoute loggedInUser={loggedInUser}>
                  <PostDetails loggedInUser={loggedInUser} />
                </AuthorizedRoute>
              }
            />
            <Route
              path="create"
              element={
                <AuthorizedRoute loggedInUser={loggedInUser}>
                  <CreatePost loggedInUser={loggedInUser} />
                </AuthorizedRoute>
              }
            />
          </Route>
          <Route
            path=":id"
            element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <PostDetails loggedInUser={loggedInUser} />
              </AuthorizedRoute>
            }
          />
          <Route
            path=":id/edit"
            element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <PostEdit />
              </AuthorizedRoute>
            }
          />
        </Route>
        <Route path="/userprofiles">
          <Route
            index
            element={
              <AuthorizedRoute loggedInUser={loggedInUser} roles={["Admin"]}>
                <UserProfileList />
              </AuthorizedRoute>
            }
          />
          <Route
            path=":id"
            element={
              <AuthorizedRoute loggedInUser={loggedInUser} roles={["Admin"]}>
                <UserProfileDetails />
              </AuthorizedRoute>
            }
          />
        </Route>
        <Route path="/categories">
          <Route
            index
            element={
              <AuthorizedRoute loggedInUser={loggedInUser} roles={["Admin"]}>
                <CategoryList />
              </AuthorizedRoute>
            }
          />
        </Route>
        <Route
          path="login"
          element={<Login setLoggedInUser={setLoggedInUser} />}
        />
        <Route
          path="register"
          element={<Register setLoggedInUser={setLoggedInUser} />}
        />
      </Route>
      <Route path="*" element={<p>Whoops, nothing here...</p>} />
      <Route path="/posts">
        {/* existing routes... */}
        <Route
          path="pending"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser} roles={["Admin"]}>
              <PendingPostsList />
            </AuthorizedRoute>
          }
        />
      </Route>
    </Routes>
  );
}
