import React from "react";
import { Form, Input, Button } from "antd";
import * as Constants from "../constants";
import { usePostIssueMutation } from "../services/postIssue";

const { Item } = Form;
const { TextArea } = Input;
const { emailRegExpression } = Constants;

export const ReportIssueForm = () => {
  const [postIssue, { isLoading, isSuccess, isError }] = usePostIssueMutation();

  return (
    <Form onFinish={(data) => postIssue(data)} layout="vertical">
      <Item
        name="firstname"
        label="Firstname"
        rules={[
          { required: true, message: "Firstname is required" },
          { max: 15, message: "Firstname is too long" },
          { min: 4, message: "Firstname is too short" }
        ]}
      >
        <Input placeholder="Enter your firstname here" />
      </Item>

      <Item
        name="lastname"
        label="Lastname"
        rules={[
          { required: true, message: "Lastname is required" },
          { max: 15, message: "Lastname is too long" },
          { min: 4, message: "Lastname is too short" }
        ]}
      >
        <Input placeholder="Enter your lastname here" />
      </Item>

      <Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: "Email  is required" },
          {
            pattern: emailRegExpression,
            message: "Wrong email format"
          }
        ]}
      >
        <Input type="email" placeholder="Enter your email here" />
      </Item>
      <Item
        name="issue"
        label="Issue"
        rules={[
          { required: true, message: "Issue is required" },
          { min: 5, message: "Give more details about your issue" }
        ]}
      >
        <TextArea placeholder="Enter your issue here" />
      </Item>
      <Item>
        <Button loading={isLoading} type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
      {isError && (
        <p style={{ color: "red" }}>Could not report the issue.Try later</p>
      )}
      {isSuccess && (
        <p style={{ color: "green" }}>Issue reported successfully</p>
      )}
    </Form>
  );
};
