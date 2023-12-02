import { Container, LogoContainer, SearchContainer, ButtonsContainer } from "./styles";
import { HiBars3 } from "react-icons/hi2";
import { Button } from "../Button";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosMic } from "react-icons/io";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { LuBell } from "react-icons/lu";


import Youtube from "../../assets/youtube.png";

export function Header(){
    return(
        <Container>
            <LogoContainer>
                <Button 
                    icon={HiBars3}
                    type="button"
                />
                <img class="style-scope ytd-yoodle-renderer" src={Youtube} alt="Youtube"/>
            </LogoContainer>

            <SearchContainer>
                <input placeholder="Pesquisar"/>
                <div>
                    <Button
                        type="button"
                        icon={IoSearchOutline}
                    />
                </div>
                <Button
                    type="button"
                    icon={IoIosMic}
                    margin={"0 0 0 1rem"}
                />
            </SearchContainer>

            <ButtonsContainer>
                <Button
                    type="button"
                    icon={MdOutlineVideoCameraFront}
                    />
                <Button
                    type="button"
                    icon={LuBell}
                />
                <Button
                    type="button"
                    text="É"
                />
            </ButtonsContainer>
        </Container>
    )
};