import React from "react";
import "../App.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  Table,
  Badge,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
} from "reactstrap";
import { INCOME } from "../data/income";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

class Income extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      income: INCOME,
      isModalOpen: false,
      id: "",
      date: "",
      amount: "",
      description: "",
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleDelete(id) {
    const newIncome = this.state.income.filter((item) => item.id !== id);
    this.setState({ income: newIncome });
  }

  handleSubmit(values) {
    console.log(values);
    const newIncome = {
      id: this.state.id,
      date: this.state.date,
      amount: this.state.amount,
      description: this.state.description,
    };
    const newIncomeArray = this.state.income.concat(newIncome);
    this.setState({
      income: newIncomeArray,
    });
    console.log(this.state.income);
    console.log(this.state.newIncomeArray);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/home">BudgetPlanner</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Manage income</BreadcrumbItem>
        </Breadcrumb>
        <div className="income-div">
          <h3 className="text-center m-4">
            My income
            <Badge className="ml-4" color="success">
              $1590
            </Badge>
          </h3>
          <Table size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Amount, $</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.income.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.date}</td>
                    <td>{item.amount}</td>
                    <td>{item.description}</td>
                    <td>
                      <Button
                        color="danger"
                        onClick={() => this.handleDelete(item.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                      <Button outline onClick={this.handleUpdate}>
                        <FontAwesomeIcon icon={faPen} />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Button onClick={this.toggleModal}>Add new item</Button>
          <Modal toggle={this.toggleModal} isOpen={this.state.isModalOpen}>
            <ModalHeader>New income item</ModalHeader>
            <ModalBody>
              <Form onSubmit={(values) => this.handleSubmit(values)}>
                <div className="form-group">
                  <Input
                    onChange={this.handleChange}
                    name="id"
                    value={this.state.id}
                    placeholder="ID"
                  ></Input>
                </div>
                <div className="form-group">
                  <Input
                    onChange={this.handleChange}
                    name="date"
                    value={this.state.date}
                    type="date"
                    placeholder="Date"
                  >
                    Date
                  </Input>
                </div>
                <div className="form-group">
                  <Input
                    onChange={this.handleChange}
                    name="amount"
                    value={this.state.value}
                    placeholder="Amount, $"
                  >
                    Amount
                  </Input>
                </div>
                <div className="form-group">
                  <Input
                    onChange={this.handleChange}
                    name="description"
                    value={this.state.description}
                    placeholder="Description"
                  >
                    Description
                  </Input>
                </div>
                <Button color="success" onClick={this.toggleModal}>
                  ADD
                </Button>{" "}
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggleModal}>
                CANCEL
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </>
    );
  }
}

export default Income;
