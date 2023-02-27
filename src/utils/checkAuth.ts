import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";
import { UserType } from "../@types/UserType";
import { AppStore } from "../store";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (ctx: GetServerSidePropsContext, store: AppStore, setUserData: (data: UserType) => any) { // eslint-disable-line no-unused-vars
  try {
    const { authToken } = parseCookies(ctx)
    if (authToken) {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}user/me`, { headers: { Authorization: authToken } })
      store.dispatch(setUserData(data.user))
    }
  } catch (error) {
    console.warn(error);
  }
}