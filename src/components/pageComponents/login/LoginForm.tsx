import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import * as Yup from "yup";
import { Formik, Form, Field, FieldProps, ErrorMessage } from "formik";
import { Button, CircularProgress, TextField } from "@mui/material";
import { ME_QUERY } from "../../../graphql/Profile";
import { UserContext } from "../../../auth/UserContext";

interface LoginFormValues {
  username: string;
  password: string;
}

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(input: { username: $username, password: $password })
  }
`;

const LoginForm: React.FC = () => {
  const client = useApolloClient();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<{ username?: string }>({});
  const [loading, setLoading] = useState(false);

  const [createLogin] = useMutation(LOGIN_MUTATION, {
    refetchQueries: [{ query: ME_QUERY }],
  });

  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const fetchUser = async () => {
        try {
          const { data } = await client.query({
            query: ME_QUERY,
          });
          const userData = data.me;
          setCurrentUser(userData);
        } catch (error) {
          console.log("Error fetching user:", error);
        }
      };

      fetchUser();
    }
  }, [client, setCurrentUser]);

  const initialValues: LoginFormValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Password is required"),
  });

  const handleLogin = async (values: LoginFormValues) => {
    setLoading(true);
    try {
      const response = await createLogin({
        variables: values,
      });
      localStorage.setItem("token", response.data.login);
      const { data } = await client.query({
        query: ME_QUERY,
      });
      const userData = data.me;
      setCurrentUser(userData);
      localStorage.setItem("currentUser", JSON.stringify(userData));
      navigate("/");
    } catch (error) {
      console.log("Login failed:", error);
      setErrors({ username: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#3c44b1",
          }}
        >
          SEBLEWONGALE ENGINEERING
        </h2>
        <h3
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "green",
          }}
        >
          Login
        </h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Field name="username">
              {({ field }: FieldProps<string>) => (
                <TextField
                  {...field}
                  label="Username"
                  variant="outlined"
                  margin="normal"
                />
              )}
            </Field>

            <Field name="password">
              {({ field }: FieldProps<string>) => (
                <TextField
                  {...field}
                  label="Password"
                  type="password"
                  variant="outlined"
                  margin="normal"
                />
              )}
            </Field>
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />

            {errors.username && (
              <div className="error-message">{errors.username}</div>
            )}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ margin: "10px auto", width: "100%" }}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Login"
                         )}
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;