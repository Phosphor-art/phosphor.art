import DraggableDiv from "@/components/DraggableDiv";
import {useTheme} from "@/contexts/ThemeContext";

export default function ButtonSayHello(){
    const { isMobileDevice } = useTheme();
    return (
        <DraggableDiv defaultPosition={{x: !isMobileDevice? "55%" : "40%", y: !isMobileDevice? "75%" : "73%"}}
                      onClick={() => window.location.assign("mailto:contact@phosphor.art")} >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                    d="M17.0001 23.025C16.7168 23.025 16.4793 22.925 16.2876 22.725C16.0959 22.525 16.0001 22.2833 16.0001 22C16.0001 21.7166 16.0959 21.4791 16.2876 21.2875C16.4793 21.0958 16.7168 21 17.0001 21C18.1001 21 19.0418 20.6083 19.8251 19.825C20.6084 19.0416 21.0001 18.1 21.0001 17C21.0001 16.7166 21.1001 16.475 21.3001 16.275C21.5001 16.075 21.7418 15.975 22.0251 15.975C22.3084 15.975 22.5459 16.075 22.7376 16.275C22.9293 16.475 23.0251 16.7166 23.0251 17C23.0251 18.6666 22.4376 20.0875 21.2626 21.2625C20.0876 22.4375 18.6668 23.025 17.0001 23.025ZM2.0001 7.99998C1.71676 7.99998 1.4751 7.90414 1.2751 7.71248C1.0751 7.52081 0.975098 7.28331 0.975098 6.99998C0.975098 5.33331 1.5626 3.91248 2.7376 2.73748C3.9126 1.56248 5.33343 0.974976 7.0001 0.974976C7.28343 0.974976 7.5251 1.07081 7.7251 1.26248C7.9251 1.45414 8.0251 1.69164 8.0251 1.97498C8.0251 2.25831 7.9251 2.49998 7.7251 2.69998C7.5251 2.89998 7.28343 2.99998 7.0001 2.99998C5.9001 2.99998 4.95843 3.39164 4.1751 4.17498C3.39176 4.95831 3.0001 5.89998 3.0001 6.99998C3.0001 7.28331 2.90426 7.52081 2.7126 7.71248C2.52093 7.90414 2.28343 7.99998 2.0001 7.99998ZM19.2251 4.42498C19.4251 4.62498 19.5251 4.85831 19.5251 5.12498C19.5251 5.39164 19.4251 5.62498 19.2251 5.82498L12.8751 12.2C12.6918 12.4 12.4626 12.4958 12.1876 12.4875C11.9126 12.4791 11.6751 12.3833 11.4751 12.2C11.2751 12 11.1751 11.7625 11.1751 11.4875C11.1751 11.2125 11.2751 10.975 11.4751 10.775L17.8251 4.42498C18.0251 4.22498 18.2584 4.12498 18.5251 4.12498C18.7918 4.12498 19.0251 4.22498 19.2251 4.42498ZM21.0001 7.59998C21.2001 7.79998 21.3001 8.03748 21.3001 8.31248C21.3001 8.58748 21.2001 8.82498 21.0001 9.02498L15.3501 14.675C15.1668 14.8583 14.9376 14.95 14.6626 14.95C14.3876 14.95 14.1501 14.8583 13.9501 14.675C13.7501 14.475 13.6459 14.2375 13.6376 13.9625C13.6293 13.6875 13.7251 13.45 13.9251 13.25L19.5751 7.59998C19.7751 7.39998 20.0126 7.29998 20.2876 7.29998C20.5626 7.29998 20.8001 7.39998 21.0001 7.59998ZM5.2751 18.725C3.75843 17.2083 3.0001 15.3833 3.0001 13.25C3.0001 11.1166 3.75843 9.29164 5.2751 7.77498L7.5751 5.47498C7.7751 5.27498 8.00843 5.17498 8.2751 5.17498C8.54176 5.17498 8.7751 5.27498 8.9751 5.47498L9.7501 6.24998C9.86677 6.36664 9.96676 6.48748 10.0501 6.61248C10.1334 6.73748 10.2168 6.86664 10.3001 6.99998L14.0001 3.27498C14.2001 3.07498 14.4376 2.97498 14.7126 2.97498C14.9876 2.97498 15.2251 3.07498 15.4251 3.27498C15.6251 3.47498 15.7251 3.71248 15.7251 3.98748C15.7251 4.26248 15.6251 4.49998 15.4251 4.69998L11.1001 9.02498L8.9751 11.125L9.4501 11.6C10.2168 12.3666 10.5834 13.2833 10.5501 14.35C10.5168 15.4166 10.1084 16.3416 9.3251 17.125L9.3001 17.15C9.11676 17.3333 8.8876 17.425 8.6126 17.425C8.3376 17.425 8.1001 17.3333 7.9001 17.15C7.7001 16.95 7.6001 16.7125 7.6001 16.4375C7.6001 16.1625 7.7001 15.925 7.9001 15.725C8.28343 15.3416 8.49593 14.8875 8.5376 14.3625C8.57926 13.8375 8.40843 13.3833 8.0251 13L6.8501 11.85C6.6501 11.65 6.5501 11.4125 6.5501 11.1375C6.5501 10.8625 6.6501 10.625 6.8501 10.425L8.2751 9.02498C8.4751 8.82498 8.5751 8.58748 8.5751 8.31248C8.5751 8.03748 8.4751 7.79998 8.2751 7.59998L6.6751 9.19998C5.54176 10.3333 4.9751 11.6875 4.9751 13.2625C4.9751 14.8375 5.54176 16.1916 6.6751 17.325C7.80843 18.4583 9.16677 19.025 10.7501 19.025C12.3334 19.025 13.6918 18.4583 14.8251 17.325L20.8001 11.325C21.0001 11.125 21.2376 11.025 21.5126 11.025C21.7876 11.025 22.0251 11.125 22.2251 11.325C22.4251 11.525 22.5251 11.7625 22.5251 12.0375C22.5251 12.3125 22.4251 12.55 22.2251 12.75L16.2251 18.725C14.7084 20.2416 12.8834 21 10.7501 21C8.61677 21 6.79176 20.2416 5.2751 18.725Z"
                    fill="#1C1B1F"/>
            </svg>
            Say hello!
        </DraggableDiv>
    )
}