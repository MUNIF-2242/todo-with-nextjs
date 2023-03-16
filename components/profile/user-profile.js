import ProfileForm from './profile-form';
import classes from './user-profile.module.css';

function UserProfile() {
  // Redirect away if NOT auth

  return (
    <section className={classes.profile}>
      <h1>User Profile</h1>
      <p>This page is under development...</p>
      {/* <ProfileForm /> */}
    </section>
  );
}

export default UserProfile;
