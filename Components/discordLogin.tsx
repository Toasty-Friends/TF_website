import { useSession, signIn, signOut } from "next-auth/react";
import { FaDiscord } from "react-icons/fa";

export default function DiscordLogin() {
  const { data: session } = useSession();

  if (session) {

    const discord_id =
      // @ts-ignore
      session.profile.username + "%23" + session.profile.discriminator;
    return (
      <>
      </>
    );
  }
  return (
    <>
    <div className="DiscordLogin">
      Please connect your Discord account for so we can add your role!
      <br/>
      <br/>
      If you havent joined yet our link is below! <br />
      <button
        className="DiscordLoginBtn"
        onClick={() =>
          signIn("discord", {
            callbackUrl: "https://toastyfriends.club/Clubhouse",
          })
        }
      >
        <div className="DiscordIcon">
          <FaDiscord/>
        </div>
        Sign in
      </button>
      </div>
    </>
  );
}
