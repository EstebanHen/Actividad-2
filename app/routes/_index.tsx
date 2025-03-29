import { redirect } from "@remix-run/node";

export const loader = async () => {
  return redirect("/inicio");
};


export default function Index() {
  return null
}
