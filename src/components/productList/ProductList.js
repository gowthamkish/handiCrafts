import React, { useState, useEffect } from "react";
import { fetchProductLists } from "../../redux/thunk/productListThunk";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CircularProgress from "@mui/material/CircularProgress";

const ProductList = () => {
  const dispatch = useDispatch();
  const productLists = useSelector((state) => state.productList.productList);

  useEffect(() => {
    if (productLists && productLists.length <= 0) {
      dispatch(fetchProductLists());
    }
  }, []);

  return (
    <>
      <Container fluid maxWidth="xl">
        <br />
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 3, md: 2 }}
          >
            {productLists && productLists.length > 0 ? (
              <>
                {productLists.map((item) => {
                  return (
                    <Grid key={item.id} item xs={3}>
                      <Card style={{ height: "400px" }}>
                        {/* <CardHeader
                          avatar={
                            <Avatar
                              sx={{ bgcolor: red[500] }}
                              aria-label="recipe"
                            >
                              R
                            </Avatar>
                          }
                          action={
                            <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
                          }
                          title={item.title}
                          // subheader="September 14, 2016"
                        /> */}
                        <CardMedia
                          component="img"
                          height="194"
                          image={item.image}
                          alt="Paella dish"
                          style={{ objectFit: "contain" }}
                        />
                        <CardContent>
                          <Typography
                            style={{ textAlign: "left" }}
                            variant="body2"
                            color="text.secondary"
                          >
                            <p>{item.title}</p>
                            <IconButton aria-label="settings">
                              <CurrencyRupeeIcon />
                            </IconButton>{" "}
                            {item.price}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    marginTop: "5rem",
                  }}
                >
                  <CircularProgress size={70} />
                </div>
              </>
            )}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ProductList;
