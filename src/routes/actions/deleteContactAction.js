import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export const deleteContactAction = async ({ params }) => {
  console.log('hit')
  const deleteRes = await deleteContact(params.contactId);
  console.log('###', deleteRes);
  
  return redirect("/");
};
