import HomeIcon from "../components/assets/home.svg"
import ShortsIcon from "../components/assets/shorts.svg"
import FeedbackIcon from "../components/assets/feedback.svg"
import SettingsIcon from "../components/assets/settings.svg"
import HelpIcon from "../components/assets/help.svg"
import ShowMoreIcon from "../components/assets/show-more.svg"
import LikedIcon from "../components/assets/liked.svg"
import VideosIcon from "../components/assets/videos.svg"
import HistoryIcon from "../components/assets/history.svg"
import LibraryIcon from "../components/assets/library.svg"
import SubscribeIcon from "../components/assets/subscribe.svg"
import Wathclater from '../components/assets/watchlater.svg'
const API =`AIzaSyD0Ek3KTGYljSJjexSdoCZtUnbuwEDLPHw`;
export const VIDEO_LIST_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=AIzaSyD0Ek3KTGYljSJjexSdoCZtUnbuwEDLPHw";
export const COMMENTS_THREAD_URL = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=AIzaSyD0Ek3KTGYljSJjexSdoCZtUnbuwEDLPHw&maxResults=100`;
export const VIDEO_INFO_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=AIzaSyD0Ek3KTGYljSJjexSdoCZtUnbuwEDLPHw`
export const SEARCH_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=AIzaSyD0Ek3KTGYljSJjexSdoCZtUnbuwEDLPHw`;
export const AUTOSUGGESTION_SEARCH_URL = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`
export const SIDEBAR_OPTIONS = [
    {
        icon: HomeIcon,
        name: "Home"
    },
    {
        icon: ShortsIcon,
        name: "Shorts"
    },
    {
        icon: SubscribeIcon,
        name: "Subscriptions"
    },
    {
        icon: LibraryIcon,
        name: "Library"
    },
    {
        icon: HistoryIcon,
        name: "History"
    },
    {
        icon: VideosIcon,
        name: "Your Videos"
    },
    {
        icon: Wathclater,
        name: "Watch Later"
    },
    {
        icon: LikedIcon,
        name: "Liked Videos"
    },
    {
        icon: ShowMoreIcon,
        name: "Show More"
    },
    {
        icon: SettingsIcon,
        name: "Settings"
    },
    {
        icon: HelpIcon,
        name: "Help"
    },
    {
        icon: FeedbackIcon,
        name: "Send Feeback"
    },
]