import { IoChevronBackOutline } from "react-icons/io5"
import { Back } from "./styles"

export function BackButton() {
    return (
        <Back>
            <IoChevronBackOutline />
            <span>Back</span>
        </Back>
    )
}