import {SidebarData} from "@/component/Sidebar/SidebarData";
import style from '@/component/Sidebar/Sidebar.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Sidebar = () => {
    const iconStyle = {padding: 10, fontSize: 15};

    return (
        <div className={style.Sidebar}>
            <ul className={style.SidebarList}>
                {SidebarData.map((value, key) => {
                    return (
                        <li
                            key={key}
                            id={window.location.pathname === value.link ? "active" : ""}
                            className={style.row}
                            onClick={() => {
                                window.location.pathname = value.link;
                            }}
                        >
                            <FontAwesomeIcon style={iconStyle} icon={value.icon}/>
                            <div id="title">{value.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Sidebar;
