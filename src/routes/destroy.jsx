/* eslint-disable react-refresh/only-export-components */
import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
  await deleteContact(params.contactId);
  return redirect("/");
}

const Destroy = ()=> {
return (
  <div>Deleted</div>
)
}

export default Destroy