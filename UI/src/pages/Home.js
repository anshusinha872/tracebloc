import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import toast, { Toaster } from "react-hot-toast";
import { useStyles } from "../components/Styles";
import { ConnectButton } from '@rainbow-me/rainbowkit';

import * as supplyChain from "../assets/supply-chain-and-shipping.json";

const classes = useStyles();
const suppChainLoader = {
    loop: true,
    autoplay: true,
    animationData: supplyChain,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
export const Home = () => {
    const [pageURL, setPageURL] = useState()
    const [gatewayStatus, setGatewayStatus] = useState(0)

    return (
        <>
          <div className={classes.pageWrap}>
            <Navbar >
              <Toaster position='top-center' reverseOrder='false' />
              <Grid
                container
                spacing={3}
                style={{ height: "100%", minHeight: "90vh", width: "100%" }}
              >
                <Grid
                  item
                  xs={12}
                  sm={6}
                  style={{
                    minHeight: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {/* <img
                    alt="."
                    src="/homeArt.png"
                    style={{ width: "90%", height: "auto" }}
                  /> */}
                  <Lottie
                    options={suppChainLoader}
                    height="auto"
                    width="90%"
                  />
                </Grid>
    
                <Grid
                  item
                  xs={12}
                  sm={6}
                  style={{
                    minHeight: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    flexDirection: "column",
                  }}
                >
                  <div className={classes.HomeCardWrap}>
                    {true ? (
                      <>
                        <h1 className={classes.pageHeading}>Welcome User</h1>
    
                        <Link
                          to="/trackOrder"
                          style={{ textDecoration: "none", color: "#fff" }}
                        >
                          <Button
                            className={classes.HomeBtn}
                            size="large"
                            variant="outlined"
                            color="primary"
                          >
                            Track Order
                          </Button>
                        </Link>
                        {true && (
                        //   <IdentityButton mode={ButtonMode.LIGHT} animation={true} />
                        //   <button onclick={requestGatewayToken}>Civic Pass</button>
                            <button>btn</button>
                        )}
    
                        <br />
    
    
                        {true ? (
                          <>
                            <Link
                              to="/roleAdmin"
                              style={{ textDecoration: "none", color: "#fff" }}
                            >
                              <Button
                                className={classes.HomeBtn}
                                size="large"
                                variant="outlined"
                                color="primary"
                              >
                                Assign Role
                              </Button>
                            </Link>
                            {true &&
                              (<Link
                                to={pageURL}
                                style={{ textDecoration: "none", color: "#fff" }}
                              >
                                <Button
                                  className={classes.HomeBtn}
                                  size="large"
                                  variant="outlined"
                                  color="primary"
                                >
                                  My Dashboard
                                </Button>
                              </Link>
                              )}
    
                          </>
                        ) : (
                          gatewayStatus === 9 &&
                          <Link
                            to={pageURL}
                            style={{ textDecoration: "none", color: "#fff" }}
                          >
                            <Button
                              className={classes.HomeBtn}
                              size="large"
                              variant="outlined"
                              color="primary"
                            >
                              My Dashboard
                            </Button>
                          </Link>
                        )}
    
    
    
                      </>
                    ) : (
                      <>
                        <h1 className={classes.pageHeading}>Connect Wallet To Start</h1>
                        <ConnectButton />
                      </>
                    )}
                  </div>
                </Grid>
              </Grid>
            </Navbar>
          </div>
        </>
      );
}
