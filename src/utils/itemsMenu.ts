import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { GoVideo } from "react-icons/go";
import { IoPlayCircleOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { MdAirplay } from "react-icons/md";
import { LuClock10 } from "react-icons/lu";
import { RiDownloadLine } from "react-icons/ri";
import { FaFireAlt } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMdMusicalNote } from "react-icons/io";
import { PiFilmSlateLight } from "react-icons/pi";
import { MdOnlinePrediction } from "react-icons/md";

export const ITEMS_MENU_HEADER = [
    {icon: IoMdHome, text: "Início" , link: "/"},
    {icon: SiYoutubeshorts, text: "Shorts" , link: "/Shorts"},
    {icon: GoVideo, text: "Incrições" , link: "/Inscrições"},
    {icon: IoPlayCircleOutline, text: "Youtube Music" , link: "/Youtube-Music"}
]

const ITEMS_MENU_HEADER_EXTRA = [ 
    {icon: MdAirplay, text: "Você", link: "/my-videos"},
    {icon: RiDownloadLine, text: "Downloads", link: "/Downloads"}
]

export const ITEMS_MENU_YOUR = [
    {icon: FaUser, text: "Seu canal" , link: "/my-videos"},
    {icon: MdAirplay, text: "Enviar vídeo" , link: "/send-video"},
    {icon: MdHistory, text: "Histórico" , link: "/Histórico"},
    {icon: LuClock10, text: "Assistir mais tarde" , link: "Assistir-Depois"},
    {icon: RiDownloadLine, text: "Downloads" , link: "/Downloads"}
]

export const ITEMS_MENU_EXPLORER = [
    {icon: FaFireAlt, text: "Em alta" , link: "/Em-Alta"},
    {icon: MdOutlineShoppingBag, text: "Shopping" , link: "/Shopping"},
    {icon: IoMdMusicalNote, text: "Música" , link: "/Música"},
    {icon: PiFilmSlateLight, text: "Filmes" , link: "/Filmes"},
    {icon: MdOnlinePrediction, text: "Ao vivo" , link: "/Ao-Vivo"}
]

export const ITEMS_CARD_MENU = ITEMS_MENU_HEADER.concat(ITEMS_MENU_HEADER_EXTRA)
