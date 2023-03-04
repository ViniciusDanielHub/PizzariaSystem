import { api } from "services/api/api";
import { IToken, IUser} from "./types";

export function setUserLocalStorage(user: IUser, token: IToken) {
  localStorage.setItem("@PizzariaSystem:token", JSON.stringify(token));
  localStorage.setItem("@PizzariaSystem:user", JSON.stringify(user));
}

export function getTokenLocalStorage() {
  const jsonToken = localStorage.getItem('@PizzariaSystem:token')

  if (!jsonToken) {
    return null;
  }

  const token = JSON.parse(jsonToken)

  return token ?? null;
}

export function getUserLocalStorage() {
  const jsonUser = localStorage.getItem('@PizzariaSystem:user')

  if(!jsonUser){
    return null;
  }

  const user = JSON.parse(jsonUser)

  return user ?? null;
}

export async function RegisterRequest(name: string, email: string, password:string) {
  const request = await api.post('/users', {
    name,
    email,
    password
  })

  return request.data;
}

export async function LoginRequest(email: string, password: string) {
  const res = await api.post('/session', {
    email,
    password
  })

  return res.data;
}

export async function ExitRequest() {
  localStorage.removeItem("@PizzariaSystem:token");
  localStorage.removeItem("@PizzariaSystem:user");
}


