import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import BackDrop from '../../UI/BackDrop/BackDrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import './SideDrawer.css';

const SideDrawer = (props) => {
    console.log("props", props)
    let attachedClasses = ["SideDrawer", "Close"];
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }

    return (
        <Auxiliary>
            <BackDrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className="Logo2">
                    <Logo />
                </div>

                <nav>
                    <NavigationItems />
                </nav>

            </div>
        </Auxiliary >

    )
}
export default SideDrawer;