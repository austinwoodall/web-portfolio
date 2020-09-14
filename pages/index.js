import Head from "next/head";
import styles from "../styles/Home.module.css";
import RotatedDiv from "../styled-components/RotatedDiv";

export default function Home() {
    return (
        <div style={{ overflowX: "hidden" }} className={styles.container}>
            <Head>
                <title>Austin Woodall | Software Developer</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <RotatedDiv />

            <header className={styles.main}>
                <div style={{ padding: "20px 0", zIndex: 10 }}>
                    <img
                        style={{ height: 60, width: 60 }}
                        src={"/austin-logo.png"}
                        alt={"logo"}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}>
                    <div
                        style={{
                            alignItems: "center",
                            justifyContent: "flex-start",
                            padding: "100px 0",
                            width: 550,
                        }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "10px 0",
                            }}>
                            <div
                                style={{
                                    height: 2,
                                    width: 60,
                                    backgroundColor: "rgb(76, 64, 247)",
                                }}
                            />
                            <div style={{ width: 15 }} />
                            <p
                                style={{
                                    display: "inline",
                                    fontSize: 18,
                                    fontWeight: 600,
                                    color: "rgb(76, 64, 247)",
                                }}>
                                Austin Woodall
                            </p>
                        </div>
                        <h1
                            style={{
                                margin: 0,
                                fontSize: 70,
                                fontWeight: 600,
                                lineHeight: 1.2,
                            }}>
                            Hello, my name's Austin. <br /> I'm a Front-end
                            Developer.
                        </h1>
                    </div>
                    <div>
                        <img
                            style={{ width: 610, height: 600 }}
                            src={"/deliveries.svg"}
                            alt={"code server"}
                        />
                    </div>
                </div>
            </header>
            <section className={styles.main}>
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}>
                    <div
                        style={{
                            alignItems: "center",
                            justifyContent: "flex-start",
                            padding: "100px 0",
                        }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "20px 0",
                            }}>
                            <div
                                style={{
                                    height: 2,
                                    width: 70,
                                    backgroundColor: "rgb(76, 64, 247)",
                                }}
                            />
                            <div style={{ width: 15 }} />
                            <p
                                style={{
                                    display: "inline",
                                    fontWeight: 700,
                                    color: "rgb(76, 64, 247)",
                                }}>
                                What I Do
                            </p>
                        </div>
                        <h1 style={{ margin: 0, fontSize: 50 }}>
                            I enjoy building delightful, enriched digital
                            experiences.
                        </h1>
                        <h1
                            style={{
                                fontSize: 50,
                                fontWeight: 600,
                                lineHeight: 1,
                            }}>
                            Think. Solve. <br />
                            Deploy.
                        </h1>
                    </div>
                    <div style={{ width: 400 }}>
                        <img
                            style={{ width: 750, height: 700 }}
                            src={"/progressive_app.svg"}
                            alt={"code server"}
                        />
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer">
                    Powered by{" "}
                    <img
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className={styles.logo}
                    />
                </a>
            </footer>
        </div>
    );
}
