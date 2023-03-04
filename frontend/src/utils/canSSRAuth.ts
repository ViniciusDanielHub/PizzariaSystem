import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";

import { destroyCookie, parseCookies } from "nookies";
import { AuthTokenError } from "services/errors/authTokenError";

export function canSSRAuth<T>(fn: GetServerSideProps<T>) {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<T>> => {

    const cookies = parseCookies(ctx);

    const token = cookies['@nextauth.token'];

    if (!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        }
      }
    }

    try{
      return await fn(ctx)
    }catch(err) {
      if(err instanceof AuthTokenError){
        destroyCookie(ctx, '@nextauth.token');

        return{
          redirect:{
            destination: '/',
            permanent: false
          }
        }
      }
    }
  }
}