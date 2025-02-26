import { createContext, useContext } from "react"
import { Van } from "./types"

export const VanDetailContext = createContext<Van | undefined>(undefined)

export const useVanDetailContext = () => {
    const vanDetail = useContext(VanDetailContext)

    if (vanDetail === undefined) {
        throw new Error("useVanDetaiContext must be used within VanDetailContext")
    }

    return vanDetail
}