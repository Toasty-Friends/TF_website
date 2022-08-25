import NextAuth from "next-auth/next";
import DiscordProvider from "next-auth/providers/discord"

const secret = process.env.JWT_SECRET
const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET


export default NextAuth({
    secret: secret,
    providers:[
        DiscordProvider({
            clientId: clientId,
            clientSecret: clientSecret,
            authorization: {params: { scope: 'identify guilds'}}
        })
    ],
    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }) {
            if (profile) { 
                token.profile = profile;
            }
            console.log(profile)
            if(account?.access_token) token.accessToken = account.access_token;
            const data = await (
                await fetch("https://discord.com/api/v8/users/@me/guilds", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token.accessToken}`,
                    },
                })
            ).json();

            //@ts-ignore
            token.profile.guilds = data;

            return token;
        },
        
        async session({ session, user, token }) {
            session.profile = token.profile;
            return session;
        },
    }
})

