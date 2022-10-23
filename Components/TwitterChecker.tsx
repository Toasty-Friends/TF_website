import { Textarea } from "theme-ui";

const TwitterChecker = () => {

    var twitterHandle;
    var mentions = 0
    var username = "TheLostToastr"
    var polarity = 0

  return (
    <>
    !!!!!!!!!!!!!THS IS NOT WORKING!!!!!!!!!!!!
      <h2>Check Twitter user Polarity and Mentions throughout the last week!</h2>
      <form>
  <label>
    Twitter Handle: &nbsp; 
    <input type="text" name="twitterHandle" />
  </label>
  <input type="submit" value="Submit" />
</form>
      <p>Name: {username}</p>
      <p>Mentions: {mentions}</p>
      <p>Polarity: {polarity}</p>
    </>
  );
};

export default TwitterChecker;
