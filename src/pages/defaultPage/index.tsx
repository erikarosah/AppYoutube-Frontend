import { CardShorts } from "../../components/cardShorts";
import { useMenu } from "../../context/openMenu";
import { ITEMS_SHORTS } from "../../utils/itemsShorts";
import { Container, Content, Controls } from "./styles";
import { Link, useParams } from "react-router-dom";
import { BiSolidLike } from "react-icons/bi";
import { AiFillDislike } from "react-icons/ai";
import { MdComment } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

import { Button } from "../../components/Button";

export function DefaultPage(){
    const params = useParams()
    const stringParams = JSON.stringify(params).replaceAll('{"*":"','').replaceAll('"}', '')
    
    const { openMenu } = useMenu()

    return(
        <Container>

            {
                stringParams === "Shorts" ? 
               
                    <Content openmenu={openMenu}>
                        {
                            
                            ITEMS_SHORTS.map((item, index) => (
                                <div>
                                    <CardShorts key={index}
                                        title={item.title}
                                        span={item.views}
                                        src={item.src}
                                    />

                                    <Controls>
                                        <Button
                                            icon={BiSolidLike}
                                            type="button"
                                        />
                                        <Button
                                            icon={AiFillDislike}
                                            type="button"
                                        />
                                        <Button
                                            icon={MdComment}
                                            type="button"
                                        />
                                            <Button
                                            icon={FaShare}
                                            type="button"
                                        />
                                        <Button
                                            icon={BsThreeDots}
                                            type="button"
                                        />
                                    </Controls>
                                </div>
                            ))
                        }
                    </Content>
              
                :

                <>
                    <h1>Página {stringParams}</h1>
                    <Link to="/">Voltar para página inicial</Link>
                </>
            }
           
        </Container>
    )
};