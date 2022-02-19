import React from "react";
import styles from "./index.module.css";
import logo from "./logo.svg";
import loginImg from "./login-image.svg";

type LoginPageProps = {} & React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

const LoginPage = ({ onSubmit = () => {} }: LoginPageProps) => {
  return (
    <main className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.logoContainer}>
          <img src={logo} width={329} height={42} alt="Test" />
        </div>
        <img
          src={loginImg}
          width={852}
          height={968.47}
          alt="blsa"
          className={styles.background}
        />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.form}>
          <h1>Selamat Datang</h1>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username / Email"
              required
              minLength={10}
              maxLength={20}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              pattern="[a-z]{0,9}"
              title="Password should be digits (0 to 9) or alphabets (a to z)."
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
