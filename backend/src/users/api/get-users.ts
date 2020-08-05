import { Context, log } from "../../deps.ts";
import { User } from "../interfaces/entity.ts";

const getUsers = (ctx: Context<Record<string, any>>) => {
  const users: Array<User> = [
    { id: 1, name: "user1", lastName: "userLN1", email: "user1@user.com" },
    { id: 2, name: "user2", lastName: "userLN2", email: "user2@user.com" },
    { id: 3, name: "user3", lastName: "userLN3", email: "user3@user.com" },
  ];
  ctx.response.body = users;
  log.info(`getUsers: ${JSON.stringify(users)}`);
};

export default getUsers;
