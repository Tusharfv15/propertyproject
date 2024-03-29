import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google'
import connectDB from '@/config/database';
import User from '@/model/User';
export const authOptions = {

    providers:[

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
            }
        })
    ],

    callbacks : {

        //Invoked on successful sign in
        async signIn({profile}){

        

            //1. Connect to database
            await connectDB();
            //2. Check if user exists

            const userExists = await User.findOne({email:profile.email});
            //3. If not, create a new user
            if(!userExists){

                const username = profile.name.slice(0,20);
                await User.create({
                    username,
                    email:profile.email,
                    image:profile.picture
                });
            }
            //4. If yes, return true
            return true;
        },

        //Modifies the session object
        async session({session}){

            //1. Get user roles from database
            const user = await User.findOne({email:session.user.email});
            //2. Assign the user id to session
            session.user.id = user._id.toString();
            //3. Return the session object
            return session;
        },
    },
    secret: process.env.NEXT_AUTH_SECRET,

   

   
};
