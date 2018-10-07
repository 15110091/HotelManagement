import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  getListLoaiPhongRequest,
  addLoaiPhongRequest,
  findLoaiPhongTheoIdRequest,
  deleteLoaiPhongTheoIdRequest,
  updateLoaiPhongTheoIdRequest
} from "../../actions/phong";
class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>Homepages</div>;
  }
}

const mapStateToProps = state => {
  return {
    loaiphong: state.phong.loaiphong,
    deleteloaiphong: state.phong.deleteloaiphong,
    updateloaiphong: state.phong.updateloaiphong
  };
};

const mapDispatchToProps = {
  getListLoaiPhongRequest,
  addLoaiPhongRequest,
  findLoaiPhongTheoIdRequest,
  deleteLoaiPhongTheoIdRequest,
  updateLoaiPhongTheoIdRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
