import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export const deleteContactAction = async ({ params }) => {
  await deleteContact(params.contactId);
  return redirect("/");
};
