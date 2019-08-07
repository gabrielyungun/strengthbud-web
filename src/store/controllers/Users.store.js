import { makeLoad } from "../templates/makeLoad";
import { urls } from "../urls";

const UsersStore = makeLoad({ name: "Users", url: urls.users });

export { UsersStore };
