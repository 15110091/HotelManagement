import React from "react";
import { Field, reduxForm } from "redux-form";
import { Modal, Row, Button, Form } from "antd";
import CustomInput from '../../../component/CustomInput'
import RadioItem from '../../../component/radio/RadioItem'
import Calendars from '../../../component/calendar/Calendars'
const FormItem = Form.Item;

const validate = values => {
  const errors = {};
  if (!values.GioiTinh) {
    errors.GioiTinh = "Không được bỏ trống ô này";
  } else if (values.GioiTinh.length > 15) {
    errors.GioiTinh = "Must be 15 characters or less";
  }
  if (!values.HoTen) {
    errors.HoTen = "Không được bỏ trống ô này";
  } else if (values.HoTen.length>15) {
    errors.HoTen = "Must be 15 characters or less";
  }
  return errors;
};

class ModalThemKhachHang extends React.Component {
  formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 }
    }
  };

  handleThemKhachHang = (values,onCancel) => {
    console.log(values);
    const { addKhachHangRequest,getListKhachHangRequest } = this.props;
    const GioiTinh = values.GioiTinh;
    const HoTen = values.HoTen;
    const NgaySinh = values.NgaySinh;
    const DiaChi = values.DiaChi;
    const QuocTich = values.QuocTich;
    const Email =values.Email;
    const CMND = values.CMND;

    addKhachHangRequest(GioiTinh,HoTen,NgaySinh,DiaChi,QuocTich,Email,CMND,onCancel,getListKhachHangRequest);
  };

  render() {
    console.log(this.props);
    const { handleSubmit, visible, onCancel, addkhachhang } = this.props;

    return (
      <Modal
        title="Tạo khách hàng "
        visible={visible}
        onCancel={() => {
          onCancel();
        }}
        
      >
        <form
          onSubmit={handleSubmit(values => this.handleThemKhachHang(values,onCancel))}
        >
          <FormItem label="Giới Tính" {...this.formItemLayout}>
            <Field
              name="GioiTinh"
              type="radio"
              component={RadioItem}
            />
          </FormItem>

          <FormItem label="Họ Tên" {...this.formItemLayout}>
            <Field
              name="HoTen"
              type="text"
              component={CustomInput}
              placeholder="Nhập họ tên khách hàng"
            />
          </FormItem>

          <FormItem label="Ngày Sinh" {...this.formItemLayout}>
            <Field
              name="NgaySinh"
              type="date"
              component={Calendars}
             // placeholder="Nhập ngày sinh khách hàng"
            />
          </FormItem>

          <Row type="flex" justify="end">
            <Button
              type="primary"
              htmlType="submit"
              className="button"
              loading={addkhachhang.isFetching} // true
              disabled={addkhachhang.isFetching}
            >
              Add
            </Button>
          </Row>
        </form>
      </Modal>
    );
  }
}

export default reduxForm({
  form: "syncValidation", // a unique identifier for this form
  validate, // <--- validation function given to redux-form
})(ModalThemKhachHang);