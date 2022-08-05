import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Col, Row, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addCar, editCar, getAllCars } from "../redux/actions/carsAction";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";

function EditCar() {
  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [car, setCar] = useState();
  const params = useParams();
  const [totalCars, setTotalCars] = useState([]);

  useEffect(() => {
    if (cars.length == 0) {
      dispatch(getAllCars());
    }
    if (cars.length > 0) {
      setTotalCars(cars);
      setCar(cars.find((o) => o._id == params.carid));
    }
  }, [cars]);

  const onFinish = (values) => {
    values._id = car._id;
    dispatch(editCar(values));
  };

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <Row justify="center mt-5">
        <Col lg={12} sm={24} xs={24} className="p-2">
          {totalCars.length > 0 && (
            <Form
              initialValues={car}
              className="bs1 p-2"
              layout="vertical"
              onFinish={onFinish}
            >
              <h3>Edit Car</h3>
              <hr />
              <Form.Item
                name="name"
                label="Car name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="image"
                label="Image url"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="rentPerHour"
                label="Rent per hour"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="capacity"
                label="Capacity"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="fuelType"
                label="Fuel Type"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>

              <div className="text-right">
                <button className="btn1">EDIT CAR</button>
              </div>
            </Form>
          )}
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default EditCar;
