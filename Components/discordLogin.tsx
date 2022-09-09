import { useSession, signIn, signOut } from "next-auth/react";

export default function DiscordLogin() {
  const { data: session } = useSession();

  if (session) {
    //user guilds
    // @ts-ignore
    var guildArray = session.profile.guilds;
    guildArray = Array.from(guildArray);
    var guild = guildArray[0];
    console.log(guildArray);

    const discord_id =
      // @ts-ignore
      session.profile.username + "%23" + session.profile.discriminator;
    return (
      <>
        {/* <ul>
          {guildArray.map((d) => (
            <li key={d.id}>{d.name}</li>
          ))}
        </ul> */}
      </>
    );
  }
  return (
    <>
      Please connect your Discord account! <br />
      <button
        onClick={() =>
          signIn("discord", {
            callbackUrl: "https://toastyfriends.club/Clubhouse",
          })
        }
      >
        Sign in
      </button>
    </>
  );
}
