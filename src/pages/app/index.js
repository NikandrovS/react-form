import React from "react";
import { connect } from "react-redux";
import Item from "../../components/Item";

const AppPage = ({ getItems }) => {
    return (
        <div style={{ paddingTop: "26px" }}>
            {getItems.map((user, idx) => <Item user={user} key={idx} />)}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        getItems: state.users
    }
}

export default connect(mapStateToProps)(AppPage)
