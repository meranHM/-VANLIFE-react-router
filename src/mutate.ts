//Mutating the response because it conflicts with mirageJS
import { redirect } from "react-router-dom";

function mutateResponse(path: string) {
  let response: any = redirect(path)
  response.body = true

  return response
}

export { mutateResponse as redirect }